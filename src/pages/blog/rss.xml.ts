import rss from "@astrojs/rss"
import { getCollection } from "astro:content"
import type { APIContext } from "astro"

function getTags(data: {
  tag?: string | string[]
  tags?: string | string[]
}): string[] {
  const raw = data.tags ?? data.tag ?? []
  return Array.isArray(raw) ? raw : [raw]
}

export async function GET(context: APIContext) {
  const posts = await getCollection("posts")
  const sorted = posts.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  )

  return rss({
    title: "Perspectives by James Bayly",
    description: "Travel essays and photography from the road.",
    site: context.site!,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description:
        post.data.description ??
        `${post.data.title} — ${getTags(post.data).join(", ")}`,
      link: `/blog/${post.id}/`,
    })),
  })
}
