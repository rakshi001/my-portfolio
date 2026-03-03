import BlurFade from "@/components/magicui/blur-fade";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "My thoughts on AI, systems, and engineering — published on Medium.",
  openGraph: {
    title: "Blog",
    description: "My thoughts on AI, systems, and engineering — published on Medium.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog",
    description: "My thoughts on AI, systems, and engineering — published on Medium.",
  },
};

const BLUR_FADE_DELAY = 0.04;
// every medium article is present in this array , u can append at last to make it appear in the blog page
const articles = [
  {
    title: "All About PCA",
    description:
      "A deep dive into Principal Component Analysis — the intuition, the math, and why it matters.",
    href: "https://medium.com/@rakshithml/all-about-pca-1fc63e841191",
  },
  {
    title: "The Shift from REST to gRPC",
    description:
      "How modern systems really communicate — comparing REST and gRPC and when to pick which.",
    href: "https://medium.com/@rakshithml/the-shift-from-rest-to-grpc-how-modern-systems-really-communicate-d32ba28e33d0",
  },
  {
    title: "The Big Illusion of Deletion",
    description:
      "Where do files really go when you hit delete? Spoiler: they don't disappear.",
    href: "https://medium.com/@rakshithml/the-big-illusion-of-deletion-where-do-files-really-go-65e2d7299f04",
  },
];

export default function BlogPage() {
  return (
    <section id="blog">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="text-2xl font-semibold tracking-tight mb-2">
          Blog{" "}
          <span className="ml-1 bg-card border border-border rounded-md px-2 py-1 text-muted-foreground text-sm">
            {articles.length} articles
          </span>
        </h1>
        <p className="text-sm text-muted-foreground mb-8">
          I write on Medium and here are my latest articles.
        </p>
      </BlurFade>

      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <div className="flex flex-col gap-4">
          {articles.map((article, i) => (
            <BlurFade delay={BLUR_FADE_DELAY * 3 + i * 0.05} key={article.href}>
              <a
                href={article.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-x-3 rounded-xl border border-border p-4 transition-colors hover:bg-accent/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                {/* Medium icon */}
                <svg
                  className="mt-0.5 size-5 flex-none text-muted-foreground"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12Zm7.42 0c0 3.54-1.51 6.42-3.38 6.42s-3.39-2.88-3.39-6.42 1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42ZM24 12c0 3.17-.53 5.75-1.19 5.75S21.62 15.17 21.62 12s.53-5.75 1.19-5.75S24 8.83 24 12Z" />
                </svg>

                <div className="flex flex-col gap-y-1 flex-1 min-w-0">
                  <p className="tracking-tight text-lg font-medium leading-snug">
                    <span className="group-hover:text-foreground transition-colors">
                      {article.title}
                      <ArrowUpRight
                        className="ml-1 inline-block size-4 stroke-[2.5] text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0"
                        aria-hidden
                      />
                    </span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {article.description}
                  </p>
                </div>
              </a>
            </BlurFade>
          ))}
        </div>
      </BlurFade>
    </section>
  );
}
