module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [
            "@babel/preset-typescript",
            "@babel/preset-react",
            "@emotion/babel-preset-css-prop"
          ]
        }
      }
    ]
  })
  config.resolve.extensions.push(".ts", ".tsx")
  return config
}
