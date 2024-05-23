import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import tsconfigPaths from "vite-tsconfig-paths";
import fg from "fast-glob";

const entryPoints = ["./src/**/*.ts", "./src/**/*.tsx"];

const files = fg.sync(entryPoints);

const filesToExpose = Object.fromEntries(
  files.map((filePath) => [
    filePath
      .replace("./src/", "./")
      .replace(".tsx", "")
      .replace(".ts", ""),
    filePath,
  ])
);

console.log(filesToExpose);

// https://vitejs.dev/config/
export default ({ mode }: { mode: string }) => {
console.log('mode', mode);
  return defineConfig({
    plugins: [
      react(),
      federation({
        name: "remote_app",
        filename: "remoteEntry.js",
        exposes: {
          ...filesToExpose,
          // add any custom entries here
        },
        remotes: {
          "@mf-app/store": (mode === 'development' || mode === 'local-prod') ? 'http://localhost:4000/mf-app-store/assets/remoteEntry.js' : 'https://dmifsud.github.io/mf-app-store/mf-app-store/assets/remoteEntry.js',
        },
        shared: ["react", "react-dom", "lit", "zustand"],
      }),
      tsconfigPaths(),
    ],
    preview: {
      host: "localhost",
      port: 5000,
      strictPort: true,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    },
    build: {
      target: "esnext",
      assetsDir: 'mf-app-react-remote/assets',
      minify: false,
      cssCodeSplit: false,
    },
  });

} 

  
