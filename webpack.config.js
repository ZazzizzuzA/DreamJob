const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    imagesloaded = require("imagesloaded"),
    SWPrecacheWebpackPlugin = require("sw-precache-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js", ".json", ".scss", ".css"],
        alias: {
            src: path.join(__dirname, "src"),
        },
    },
    watch: true,
    module: {
        rules: [{
                test: /\.css$/,
                loader: "css-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: "file-loader"
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                options: {
                    limit: 8000
                },
                loader: "url-loader"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery'
        }),
        new SWPrecacheWebpackPlugin({
            cacheId: "me-watch-" + Math.random(),
            filename: "service-worker.js",
            staticFileGlobs: [ "dist/*.{js,html,css}"],
            stripPrefix: "dist/"
        })
    ]
}