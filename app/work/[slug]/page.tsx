import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import { CaseStudyLayout } from "@/components/case-study-layout";
import { getWorkBySlug, getWorkSlugs } from "@/lib/mdx";

export async function generateStaticParams() {
  return getWorkSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) return { title: "Case Study Not Found" };

  return {
    title: `${work.frontmatter.title}, Case Study | Godbless Uduak`,
    description: work.frontmatter.description,
    openGraph: {
      title: `${work.frontmatter.title}, Case Study`,
      description: work.frontmatter.description,
      images: work.frontmatter.heroImage
        ? [{ url: work.frontmatter.heroImage }]
        : undefined,
    },
  };
}

export default async function WorkPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const work = getWorkBySlug(slug);
  if (!work) notFound();

  return (
    <CaseStudyLayout frontmatter={work.frontmatter}>
      <MDXRemote source={work.content} />
    </CaseStudyLayout>
  );
}
