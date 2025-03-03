import BlogPostExcerpt from "@/components/blog/BlogPostExcerpt";
import IntroBar from "@/components/header/IntroBar";
import Link from "next/link";

interface Category {
  ID: number;
  name: string;
  slug: string;
  description: string;
  post_count: number;
  feed_url: string;
  parent: number;
  meta: object;
}

export default async function BlogPage() {
  // Fetching the categories
  const categoriesResponse = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/frankieshrieves.home.blog/categories"
  );
  const categoriesData = (await categoriesResponse.json()).categories;

  // Fetching the posts
  const postResponse = await fetch(
    "https://public-api.wordpress.com/rest/v1.1/sites/frankieshrieves.home.blog/posts/?number=100&context=display&fields=title,date,featured_image,excerpt,ID,slug"
  );
  const postData = (await postResponse.json()).posts;

  // TODO: Build this page. Use this resource- https://dev.to/kendalmintcode/using-wordpress-as-a-headless-cms-with-next-js-2h5p
  // TODO: To get all the posts inner content use:
  //   <div dangerouslySetInnerHTML={{ __html: post.content }}></div>

  return (
    <>
      <IntroBar text={"Franks Nuggets of Knowledge"} />

      <div className="flex gap-4 justify-center p-2">
        {categoriesData.map((category: Category) => {
          return (
            <Link href={`/blog/categories/${category.slug}`} key={category.ID}>
              {category.name}
            </Link>
          );
        })}
      </div>

      <p>
        A foray into different subjects and brain ramblings, from Values to live
        by, to meditative ponderings.
      </p>

      <BlogPostExcerpt postData={postData} />

      {/* <section className="flex flex-col gap-4">
        {postData.map((post: Post) => {
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
              <Link href={`/blog/post/${post.slug}`}>Read more</Link>
            </article>
          );
        })}
      </section> */}
    </>
  );
}
