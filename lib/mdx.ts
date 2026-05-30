import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content/work");

export type WorkFrontmatter = {
  title: string;
  slug: string;
  client: string;
  year: string;
  type: string;
  role: string;
  stack: string[];
  liveUrl: string;
  timeline: string;
  tags: string[];
  heroImage: string;
  description: string;
  order?: number;
  status?: "live" | "coming-soon";
};

function readMdxFiles(): string[] {
  if (!fs.existsSync(CONTENT_PATH)) return [];
  return fs
    .readdirSync(CONTENT_PATH)
    .filter((file) => file.endsWith(".mdx"));
}

export function getAllWork(): WorkFrontmatter[] {
  return readMdxFiles()
    .map((file) => {
      const source = fs.readFileSync(path.join(CONTENT_PATH, file), "utf8");
      const { data } = matter(source);
      return data as WorkFrontmatter;
    })
    .sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export function getWorkBySlug(
  slug: string,
): { frontmatter: WorkFrontmatter; content: string } | null {
  const filePath = path.join(CONTENT_PATH, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  return { frontmatter: data as WorkFrontmatter, content };
}

export function getWorkSlugs(): string[] {
  return readMdxFiles().map((f) => f.replace(/\.mdx$/, ""));
}
