import BlogArticlesContent from "@/components/content/blog/blogArticlesContent/BlogArticlesContent";
import BlogIntroContent from "@cc/blog/blogIntroContent/BlogIntroContent";
import BlogMainContent from "@cc/blog/blogMainContent/BlogMainContent";

export default function Blog(){
    return(
        <>
            <BlogMainContent/>
            <BlogIntroContent/>
            <BlogArticlesContent/>
        </>
    )
}