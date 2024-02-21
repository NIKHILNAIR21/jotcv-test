import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({

  // server: {
  //   headers: {
  //     'Cache-Control': 'max-age=31536000, src',
  //   },
  // },
  build: {
    assetsInlineLimit: 0, // Set to 0 to always generate hashed filenames
  },
  css: {
    modules: true,
  },
  plugins: [react()],
  head: {
    title: "Jotcv",
    meta: [
      {
        name: "description",
        content:
          "The new-age Resume that gets you instantly hired. Create your Video Resume in 3 easy steps.Our resume builder is packed with expert tips to show you how to make each part of your resume.",
      },
    ],
  },
});
