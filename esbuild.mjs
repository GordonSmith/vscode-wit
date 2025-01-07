import * as esbuild from "esbuild";
import process from "node:process";
import { problemMatcher } from "@hpcc-js/esbuild-plugins";
import tsconfigNode from "./tsconfig.json" with {"type": "json"};

const outputDirectory = "dist";
const watch = process.argv.includes("--watch");
const production = !watch && process.argv.includes("--production");

async function main(tsconfigRaw, entryPoint, platform, format, plugins = []) {
    const ctx = await esbuild.context({
        tsconfigRaw,
        entryPoints: [entryPoint],
        outdir: outputDirectory,
        bundle: true,
        format,
        minify: production,
        sourcemap: !production ? "linked" : false,
        platform,
        target: platform === "node" ? "node20" : "es2022",
        external: ["vscode", "fs", "path", "os"],
        logLevel: production ? "silent" : "info",
        plugins: [
            ...plugins,
            problemMatcher(),
        ]
    });
    if (watch) {
        await ctx.watch();
    } else {
        await ctx.rebuild();
        await ctx.dispose();
    }
}

Promise.all([
    main(tsconfigNode, "./src/extension.ts", "browser", "cjs", []),
]).catch((e) => {
    console.error(e);
    process.exit(1);
});
