import convertCharacters from "@/helpers/convertCharacters";
import Link from "next/link";

export default async function BlogPage() {
  const response = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/frankieshrieves.home.blog/posts/?number=100&context=display&fields=title,date,featured_image,excerpt,ID,slug"
  );
  const posts = await response.json();
  console.log(posts.posts[0]);

  function formatDate(date: string): string {
    const newDate = new Date(date);
    return `${newDate.getDate()}/${
      newDate.getMonth() + 1
    }/${newDate.getFullYear()}`;
  }
  // TODO: Build this page. Use this resource- https://dev.to/kendalmintcode/using-wordpress-as-a-headless-cms-with-next-js-2h5p
  // TODO: To get all the posts inner content use:
  //   <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

  return (
    <>
      <h1 className="mt-10">this is just a tribute</h1>
      <h2>Franks Nuggets</h2>
      <section className="flex flex-col gap-4">
        {posts.posts.map((post) => {
          return (
            <article
              className="wp_teaser p-4 flex flex-col gap-2"
              key={post.ID}
            >
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
              <Link href={`/blog/${post.slug}`}>Read more</Link>
            </article>
          );
        })}
      </section>
    </>
  );
}
