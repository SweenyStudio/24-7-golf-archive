import {defineConfig} from "astro/config";
import icon from "astro-icon";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  output: "server",
  adapter: vercel({
    imageService: true,
  }),
  buildOptions: {
    // Specify the output directory for your build files
    outDir: './dist',
  },


});
