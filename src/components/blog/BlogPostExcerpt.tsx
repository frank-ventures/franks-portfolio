import convertCharacters from "@/helpers/convertCharacters";
import Link from "next/link";

interface Post {
  ID: number;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
  featured_image: string;
}

export default function BlogPostExcerpt({ postData }: { postData: Post[] }) {
  function formatDate(date: string): string {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  }

  return (
    <section className="flex flex-col gap-4">
      {postData.map((post: Post) => {
        return (
          <article className="wp_teaser p-4 flex flex-col gap-2" key={post.ID}>
            <h3 className="wp_teaser_title p-2 font-bold bg-slate-950 text-slate-200 w-full">
              {convertCharacters(post.title)}
            </h3>

            <h2 className="wp_teaser_date italic">{formatDate(post.date)}</h2>
            {post.featured_image && (
              <div className="wp_teaser_image max-w-[500px] self-center">
                <img
                  src={post.featured_image}
                  alt={`The featured image for the blog post ${convertCharacters(
                    post.title
                  )}`}
                />
              </div>
            )}
            <div className="wp_teaser_excerpt_container">
              <p dangerouslySetInnerHTML={{ __html: post.excerpt }}></p>
            </div>
            <Link href={`/blog/post/${post.slug}`}>Read more</Link>
          </article>
        );
      })}
    </section>
  );
}
