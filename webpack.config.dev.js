import webpack from "webpack";
import CleanWebpackPlugin from "clean-webpack-plugin";
import Dotenv from 'dotenv-webpack';

export default {
  entry: [
    // react-hot-loader/patch  patches all of your components to help them hot reload. it needs to load before your app
    // // activate HMR for React
    "react-hot-loader/patch",
    // order after here does not matter
    "webpack-hot-middleware/client?path=/__what",
    "./app/index"
  ],
  devtool: "inline-source-map",
  target: "web",
  output: {
    path: __dirname + "/app/dist/", // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: "/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "./app",
    historyApiFallback: {
      index: "./app/index.html"
    }
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new Dotenv({
      sample: './.env.default', 
      path: './.env'}
    )
  ],
  module: {
    rules: [{
      test: /\.js$/,
      loaders: {
        loader: "babel-loader",
        query: {
          babelrc: false,
          ignore: ["dist", "node_modules/**/*"],
          plugins: [
            "react-hot-loader/babel",
            "babel-plugin-transform-class-properties",
            "babel-plugin-transform-object-rest-spread",
            "babel-plugin-transform-decorators-legacy"
          ],
          presets: [
            "babel-preset-react", [
                "babel-preset-env", {
                  modules: false,
                  uglify: false
                }
              ]
            ]
          }
        }
      },
      { test: /(\.css)$/, use: ["style-loader", "css-loader"] },
      { test: /\.(png|svg|jpg|gif)$/, use: ["file-loader"] },
      // for fonts
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ["file-loader"] }
    ]
  }
};