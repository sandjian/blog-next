import Image from "next/image";
import Link from "next/link";

export default function InstagramFeed() {
  const instagramPosts = Array.from({ length: 9 }).map((_, index) => ({
    id: index + 1,
    imageUrl: `https://picsum.photos/400/400?random=${index}`,
    caption: `Post #${index + 1}`,
  }));

  return (
    <section className="w-full max-w-7xl mx-auto py-8 px-4 ">
      <div className="my-10">
<h2 className="text-3xl font-bold text-primary dark:text-white relative mb-8">
          <span className="bg-primary dark:bg-accent mr-2 px-2 py-3 rounded-xl text-accent-foreground">Instagram</span>
          Posts
        </h2>
      </div>

      <div className="rounded-lg overflow-hidden">
        <div className="grid grid-cols-3 gap-4 p-4">
          {instagramPosts.map((post) => (
            <Link href={"https://www.instagram.com/"} key={post.id}>
              <div
              
                className="relative aspect-square rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300"
              >
                <Image
                  width={800}
                  height={800}
                  src={post.imageUrl}
                  alt={post.caption}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}