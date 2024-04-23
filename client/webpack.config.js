const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./src/js/index.js",
      install: "./src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HTMLWebpackPlugin({
        template: "./index.html",
        tite: "J.A.T.E",
      }),
      new InjectManifest({
        swSrc: "./src.sw,js",
        swDest: "sw.js",
      }),
      new WebpackPwaManifest({
        fingerprints: false,
        inject: true,
        name: "J.A.T.E",
        short_name: "J.A.T.E",
        description:
          "Take some super sweet notes using JavaScript syntax highlighting!",
        background_color: "#01579b",
        theme_color: "#01579b",
        start_url: "/",
        icons: [
          {
            src: path.resolve("src/assets/icons/icon-512x512.png"),
            sizes: [96, 128, 192, 256, 384, 512],
            destination: path.join("assets", "icons"),
          },
        ],
      }),
    ],

    module: {
      rules: [],
    },
  };
};
