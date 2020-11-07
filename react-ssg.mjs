import { cli } from "react-ssg/server.mjs";
import path from "path";

const dirname = path.dirname(new URL(import.meta.url).pathname);
process.on('unhandledRejection', (up) => { throw up; });

debugger;

cli({
  path: {
    root: dirname,
  },
  webpack: {
    baseConfig: {
      plugins: [],
      module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ]
      }
    },
  },
  urls: () => [
    "/", "/about/", "/blog/",
  ],
});
