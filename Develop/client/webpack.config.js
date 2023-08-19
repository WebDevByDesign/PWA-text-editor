const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifest = require("webpack-pwa-manifest");
const path = require("path");
const { InjectManifest } = require("workbox-webpack-plugin");



module.exports = () => {
  return {
    mode: "development",
    entry: {
      main: "./client/src/js/index.js",
      install: "./client/src/js/install.js",
    },
    output: {
      filename: "[name].bundle.js",
      path: path.resolve(__dirname, "dist"),
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "../src/index.html",
        filename: "index.html",
      }),

      new WebpackPwaManifest({
        name: "PWA Text Editor",
        short_name: "PWATE",
        description: "Text Editor",
        theme_color: "#ffffff",
        background_color: "#ffffff",
        icons: [
          {
            src: path.resolve('./client/src/assets/icons/icon_96x96.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new InjectManifest({
      swSrc: './server/src/js/sr-sw.js',
      swDest: 'service-worker.js',
    }),
  ],
        module: {
          rules: [
            {
              test: /\.css$/,
              use: ["style-loader", "css-loader"],
            },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              use: ["babel-loader"],
            },
          ],
        },
      };
}
