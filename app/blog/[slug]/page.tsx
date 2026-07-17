import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogPostArticle } from "@/components/blog/BlogPostArticle";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { NewsletterSection } from "@/components/NewsletterSection";
import { SiteAtmosphere } from "@/components/SiteAtmosphere";
import { blogPostsData, getPostBySlug } from "@/lib/blog";

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return blogPostsData.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: `${post.title} | Techifort Blog`,
      description: post.excerpt,
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <SiteAtmosphere>
          <BlogPostArticle post={post} />
          <NewsletterSection />
          <Footer />
        </SiteAtmosphere>
      </main>
      <FloatingCTA />
    </>
  );
}
