// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { mcpPlugin } from "@lovable.dev/mcp-js/stacks/tanstack/vite";

const VERCEL_WORKERS_SHIM = "\0virtual:vercel-cloudflare-workers";

// mcp-js reads Cloudflare bindings through `cloudflare:workers` when it runs on
// Workers. Vercel uses process.env instead, but Nitro still has to resolve the
// optional dynamic import while bundling. Replace only that import on Vercel;
// Cloudflare builds continue to use the native module.
const vercelCloudflareWorkersShim = {
  name: "vercel-cloudflare-workers-shim",
  enforce: "pre" as const,
  resolveId(id: string) {
    if (process.env.VERCEL === "1" && id === "cloudflare:workers") {
      return VERCEL_WORKERS_SHIM;
    }
  },
  load(id: string) {
    if (id === VERCEL_WORKERS_SHIM) {
      return "export const env = process.env;";
    }
  },
};

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [vercelCloudflareWorkersShim, mcpPlugin()],
  },
});
