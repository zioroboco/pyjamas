import { Configuration } from "webpack"

const config: Configuration = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        use: {
          loader: require.resolve("babel-loader"),
          options: {
            presets: [
              "@babel/preset-typescript",
              "@babel/preset-react",
              "@emotion/babel-preset-css-prop"
            ]
          }
        }
      },
      {
        test: /\.elm$/,
        exclude: [/elm-stuff/, /node_modules/],
        use: [
          {
            loader: "elm-webpack-loader"
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".json", ".js", ".jsx", ".ts", ".tsx", ".elm"]
  }
}

export default config
