// @ts-check

import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import { satteri } from "@astrojs/markdown-satteri"
import sitemap from "@astrojs/sitemap"
import { defineHastPlugin } from "satteri"

const imageFigure = defineHastPlugin({
  name: "image-figure",
  element: {
    filter: ["Image"],
    visit(node, ctx) {
      const caption = node.properties?.alt
      if (!caption) return // no alt? leave the <img> as-is

      ctx.replaceNode(node, {
        type: "element",
        tagName: "figure",
        properties: { className: ["essay-figure"] },
        children: [
          node,
          {
            type: "element",
            tagName: "figcaption",
            properties: {},
            children: [{ type: "text", value: caption }],
          },
        ],
      })
    },
  },
})

// https://astro.build/config
export default defineConfig({
  site: "https://bayly.xyz",
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), sitemap()],
  markdown: {
    processor: satteri({
      hastPlugins: [imageFigure],
    }),
  },
})
