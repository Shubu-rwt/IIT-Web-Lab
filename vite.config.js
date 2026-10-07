// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import tailwindcss from "@tailwindcss/vite";

// export default defineConfig({
//   // Relative assets allow the same build to work from the IIT subdirectory
//   // and from a normal domain root.
//   base: "/~bmz228461/",
//   plugins: [react(), tailwindcss()],
// });



import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/~bmz228461/",

  plugins: [
    react(),
    tailwindcss(),
  ],
});