


const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3003/",
  },
  module: {},
  plugins: [
    new ModuleFederationPlugin({
      name: "bookevent",
      filename: "remoteEntry.js",
      remotes: {},
      exposes: {
        "./OutdoorEvent": "./src/OutdoorEvent.tsx"
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
  ],
};
