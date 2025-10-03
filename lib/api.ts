import { Document } from "@contentful/rich-text-types";

const AUTHOR_GRAPHQL_FIELDS = `
  sys { id }
  name
  profilePicture { url }
  role
  description
  socialLinks
`;


const SIMPLE_ARTICLE_GRAPHQL_FIELDS = `
  sys { id }
  title
  slug
  sumary
  date
  author { ${AUTHOR_GRAPHQL_FIELDS} }
  categoryName
  articleImage { url }
  tags
`;



export interface Author {
  sys: { id: string };
  name: string;
  profilePicture: { url: string };
  role?: string;
  description?: string;
  socialLinks?: { [key: string]: string | undefined };
}

export interface Article {
  sys: { id: string };
  title: string;
  slug: string;
  sumary?: string;
  detail?: {
    json: Document;
    links?: {
      assets?: {
        block?: {
          sys: { id: string };
          url: string;
          description: string;
        }[];
      };
    };
  };
  date: string;
  author: Author; // Usamos la referencia a Author
  categoryName?: string;
  articleImage: { url: string };
  tags?: string[];
}

interface ContentfulResponse<T> {
  data?: {
    knowledgeArticleCollection?: { items: T[] };
    authorCollection?: { items: T[] }; // Añadido para consultas de autores
  };
  errors?: Array<{ message: string }>;
}

const ARTICLE_GRAPHQL_FIELDS = `
  sys { id }
  title
  slug
  sumary
  detail { json links { assets { block { sys { id } url description } } } }
  date
  author { ${AUTHOR_GRAPHQL_FIELDS} }
  categoryName
  articleImage { url }
  tags
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

function extractAuthorEntries(fetchResponse: ContentfulResponse<Author>): Author[] {
  if (!fetchResponse?.data?.authorCollection?.items) {
    console.error("No se recibieron datos de autores de Contentful.");
    return [];
  }
  return fetchResponse.data.authorCollection.items;
}

// Consultas de artículos
export async function getLastThreeArticles(isDraftMode: boolean = false): Promise<Article[]> {
  const query = `
    query getLastThreeArticles($preview: Boolean!) {
      knowledgeArticleCollection(limit: 2, preview: $preview, order: date_DESC) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query, isDraftMode, { preview: isDraftMode });
  return extractArticleEntries(response);
}

export async function getLastSixArticles(isDraftMode: boolean = false): Promise<Article[]> {
  const query = `
    query getLastSixArticles($preview: Boolean!) {
      knowledgeArticleCollection(limit: 6, preview: $preview, order: date_DESC) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query, isDraftMode, { preview: isDraftMode });
  return extractArticleEntries(response);
}

export async function getLastSevenArticles(isDraftMode: boolean = false): Promise<Article[]> {
  const query = `
    query getLastSevenArticles($preview: Boolean!) {
      knowledgeArticleCollection(limit: 9, preview: $preview, order: date_DESC) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query, isDraftMode, { preview: isDraftMode });
  return extractArticleEntries(response);
}

export async function getAllArticles(): Promise<Article[]> {
  const query = `
    query getAllArticles {
      knowledgeArticleCollection(limit: 50, order: date_DESC) {
        items {
          ${SIMPLE_ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query, false);
  return extractArticleEntries(response);
}

export async function getArticle(slug: string, isDraftMode: boolean = false): Promise<Article | undefined> {
  const query = `
    query getArticleBySlug($slug: String!, $preview: Boolean!) {
      knowledgeArticleCollection(where: { slug: $slug }, limit: 1, preview: $preview) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query, isDraftMode, { slug, preview: isDraftMode });
  return extractArticleEntries(response)[0];
}

// Consultas de categorías
export async function getCategoriesWithCount(): Promise<{ name: string; count: number }[]> {
  const query = `
    query GetCategoriesWithCount {
      knowledgeArticleCollection {
        items {
          categoryName
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query);
  const articles = extractArticleEntries(response);

  const categoryCounts = articles.reduce((acc, article) => {
    const category = article.categoryName || "Uncategorized";
    acc[category] = (acc[category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return Object.entries(categoryCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);
}

// Consultas de autores
export async function getArticlesByAuthorName(
  authorName: string,
  limit: number = 10 // Límite por defecto
): Promise<Article[]> {
  const query = `
    query getArticlesByAuthorName($authorName: String!, $limit: Int!) {
      knowledgeArticleCollection(where: { author: { name: $authorName } }, limit: $limit, order: date_DESC) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query, false, { authorName, limit });
  return extractArticleEntries(response);
}

export async function getAllAuthors(): Promise<Author[]> {
  const query = `
    query GetAllAuthors {
      authorCollection {
        items {
          ${AUTHOR_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Author>(query);
  return extractAuthorEntries(response);
}

// Consulta de artículos por tag (opcional, añadida por completitud)
export async function getArticlesByTag(tag: string, limit: number = 10, skip: number = 0): Promise<Article[]> {
  const query = `
    query getArticlesByTag($tag: String!, $limit: Int!, $skip: Int!) {
      knowledgeArticleCollection(where: { tags_contains: $tag }, limit: $limit, skip: $skip, order: date_DESC) {
        items {
          ${ARTICLE_GRAPHQL_FIELDS}
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query, false, { tag, limit, skip });
  return extractArticleEntries(response);
}




export async function getTopTags(limit: number = 25): Promise<string[]> {
  const query = `
    query GetAllTags {
      knowledgeArticleCollection(limit: 100) {
        items {
          tags
        }
      }
    }
  `;
  const response = await fetchGraphQL<Article>(query);
  const articles = extractArticleEntries(response);

  // Contar la frecuencia de cada tag
  const tagCounts = articles.reduce((acc, article) => {
    if (article.tags) {
      article.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
    }
    return acc;
  }, {} as Record<string, number>);

  // Ordenar por frecuencia y tomar los primeros 'limit' tags
  const sortedTags = Object.entries(tagCounts)
    .sort(([, countA], [, countB]) => countB - countA) // Orden descendente por conteo
    .slice(0, limit)
    .map(([tag]) => tag);

  return sortedTags;
}