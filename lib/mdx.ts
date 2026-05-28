import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content/work");

export type ProjectFrontmatter = {
  title: string;
  slug: string;
  client?: string;
  year?: string;
  type?: string;
  role?: string;
  stack?: string[];
  liveUrl?: string;
  timeline?: string;
  tags?: string[];
  heroImage?: string;
  description?: string;
};

export function getAllProjects(): ProjectFrontmatter[] {
  if (!fs.existsSync(CONTENT_PATH)) return [];

  const files = fs.readdirSync(CONTENT_PATH);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const source = fs.readFileSync(path.join(CONTENT_PATH, file), "utf8");
      const { data } = matter(source);
      return { slug, ...(data as Omit<ProjectFrontmatter, "slug">) };
    });
}

export function getProject(
  slug: string,
): (ProjectFrontmatter & { content: string }) | null {
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return {
    slug,
    ...(data as Omit<ProjectFrontmatter, "slug">),
    content,
  };
}
