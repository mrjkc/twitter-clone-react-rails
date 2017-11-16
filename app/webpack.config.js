module.exports = {
    entry: __dirname + "/assets/frontend/components/main.jsx",

    resolve: {
      extensions: ['.js', '.jsx']
    },

    output: {
        path: __dirname + "/app/assets/javascripts",
        filename: "bundle.js"
    },

    module: {
        loaders: [
            { test: /\.jsx$/, loader: "babel-loader" }
        ]
    }
};
