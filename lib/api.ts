import { Document } from "@contentful/rich-text-types";


export interface Article {
  sys: {
    id: string;
  };
  title: string;
  slug: string;
  sumary?: string;
  detail?: {
    json: Document;
    links?: {
      assets?: {
        block?: {
          sys: {
            id: string;
          };
          url: string;
          description: string;
        }[];
      };
    };
  };
  date: string;
  authorName?: string;
  categoryName?: string;
  articleImage: {
    url: string;
  };
}


interface ContentfulResponse<T> {
  data?: {
    knowledgeArticleCollection?: {
      items: T[];
    };
  };
  errors?: Array<{ message: string }>;
}

const ARTICLE_GRAPHQL_FIELDS = `
  sys {
    id
  }
  title
  slug
  sumary
  detail {
    json
    links {
      assets {
        block {
          sys {
            id
          }
          url
          description
        }
      }
    }
  }
  date
  authorName
  categoryName
  articleImage {
    url
  }
`;


function getContentfulApiAndToken(isPreview: boolean): { url: string; token: string } {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const cdnToken = process.env.CONTENTFUL_ACCESS_TOKEN;
  const previewToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;

  if (!spaceId || !cdnToken || !previewToken) {
    throw new Error("Missing Contentful environment variables. Asegúrate de configurar .env correctamente.");
  }

  return {
    url: `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    token: isPreview ? previewToken : cdnToken,
  };
}

/**
 * @param query     
 * @param preview   
 * @param variables 
 */
export async function fetchGraphQL<T>(
  query: string,
  preview: boolean = false,
  variables?: Record<string, unknown>
): Promise<ContentfulResponse<T>> {
  const { url, token } = getContentfulApiAndToken(preview);

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ query, variables }),

      next: { tags: ["articles"] },
    });

    if (!response.ok) {
      const errorData = await response.json();
      const errorMsg = errorData.errors
        ? errorData.errors.map((err: { message: string }) => err.message).join(", ")
        : "Unknown error";
      console.error("Error en la respuesta de Contentful:", errorData);
      throw new Error(errorMsg);
    }

    const data: ContentfulResponse<T> = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data from Contentful:", error);
    return {};
  }
}

function extractArticleEntries(fetchResponse: ContentfulResponse<Article>): Article[] {
  if (!fetchResponse?.data?.knowledgeArticleCollection?.items) {
    console.error("No se recibieron datos de Contentful.");
    return [];
  }
  return fetchResponse.data.knowledgeArticleCollection.items;
}


export async function getLastThreeArticles(
  isDraftMode: boolean = false
): Promise<Article[]> {
  const query = `
    query getLastThreeArticles($preview: Boolean!) {
      knowledgeArticleCollection(limit: 3, preview: $preview, order: date_DESC) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;

  const response = await fetchGraphQL<Article>(query, isDraftMode, {
    preview: isDraftMode,
  });
  return extractArticleEntries(response);
}

export async function getAllArticles(limit: number = 10, skip: number = 0): Promise<Article[]> {
  const query = `
    query getAllArticles($limit: Int!, $skip: Int!) {
      knowledgeArticleCollection(limit: $limit, skip: $skip, order: date_DESC) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;

  const response = await fetchGraphQL<Article>(query, false, {
    limit,
    skip,
  });
  return extractArticleEntries(response);
}

export async function getArticle(
  slug: string,
  isDraftMode: boolean = false
): Promise<Article | undefined> {
  const query = `
    query getArticleBySlug($slug: String!, $preview: Boolean!) {
      knowledgeArticleCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;

  const response = await fetchGraphQL<Article>(query, isDraftMode, {
    slug,
    preview: isDraftMode,
  });

  return extractArticleEntries(response)[0];
}
