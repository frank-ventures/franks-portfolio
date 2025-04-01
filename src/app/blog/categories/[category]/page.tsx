import BlogPostExcerpt from "@/components/blog/BlogPostExcerpt";
import IntroBar from "@/components/header/IntroBar";

type PageProps = Promise<{ category: string }>;

export default async function BlogCategoryPage({
  params,
}: {
  params: PageProps;
}) {
  const currentCategory = (await params).category;
  console.log(currentCategory);

  const postResponse = await fetch(
    `https://public-api.wordpress.com/rest/v1.1/sites/frankieshrieves.home.blog/posts/?number=100&context=display&fields=title,date,featured_image,excerpt,ID,slug&category=${currentCategory}`
  );
  const postData = (await postResponse.json()).posts;

  return (
    <>
      <IntroBar text={currentCategory} />
      <BlogPostExcerpt postData={postData} />
    </>
  );
}
