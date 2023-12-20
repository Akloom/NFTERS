const isProd = process.argv.includes("build");
const isDev = !isProd;
import * as news from "../data/news-data.js";

export default {
  isProd,

  pug: {
    pretty: isDev,
    data: {
      news,
    },
  },

  sass: {
    includePaths: ["node_modules"],
  },

  fonter: {
    formats: ["woff", "ttf"],
  },

  webpack: {
    mode: isProd ? "production" : "development",
  },

  // imageminPlugins: [
  //   imageminGiflossy({
  //     optimizationLevel: 3,
  //     optimize: 3,
  //     lossy: 2,
  //   }),
  //   imageminPngquant({
  //     speed: 5,
  //     quality: [0.6, 0.8],
  //   }),
  //   imageminZopfli({
  //     more: true,
  //   }),
  //   imageminMozjpeg({
  //     progressive: true,
  //     quality: 70,
  //   }),
  //   // svgo({
  //   //   plugins: [
  //   //     { removeViewBox: false },
  //   //     { removeUnusedNS: false },
  //   //     { removeUselessStrokeAndFill: false },
  //   //     { cleanupIDs: false },
  //   //     { removeComments: true },
  //   //     { removeEmptyAttrs: true },
  //   //     { removeEmptyText: true },
  //   //     { collapseGroups: true },
  //   //   ],
  //   // }),
  // ],

  imagemin: {
    verbose: true,
  },

  replace: {
    html: {
      from: /@img\//g,
      to: "img/",
    },
    sass: {
      from: /@img\//g,
      to: "../img/",
    },
  },
  sprite: {
    templates: [`default-svg`],
  },
};
