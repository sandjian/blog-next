import Post from "@/interfaces/post";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

type Props = {
  posts: Post[];
};

export default function EntradasCards({ posts }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {posts.map((post, index) => (
        <Card
          key={index}
          className="rounded-2xl p-2 overflow-hidden shadow-lg hover:shadow-2xl bg-[url(/06.png)] dark:hover:shadow-slate-600 transition-shadow"
        >
          <div className="relative h-48 w-full">
            
            <Link href={`/entradas/${post.fields.slug}`}>
              {post.fields.image ? (
                <Image
                  src={`https:${post.fields.image.fields.file.url}`}
                  alt={post.fields.image.fields.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              ) : (
                <div className="h-full w-full bg-zinc-400 flex items-center justify-center">
                  <span>Imagen no disponible</span>
                </div>
              )}
            </Link>
            
          </div>
          <div >
          <CardHeader>
            <CardTitle>{post.fields.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{post.fields.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Link href={`/entradas/${post.fields.slug}`} passHref>
              <Button  variant="default">Leer más</Button>
            </Link>
          </CardFooter>

          </div>
        </Card>
      ))}
    </div>
  );
}


