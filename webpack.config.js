
module.exports = {
    entry: {
        upset: './src/d3-upset.js',
    },
    output: {
        path: "./dist",
        filename: "[name].bundle.js",
        library: 'upset',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.json$/, exclude: /node_modules/, loader: 'json-loader'}
        ]
    },
};
