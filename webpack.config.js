const path = require("path"),
    webpack = require("webpack"),
    HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        main: path.resolve(__dirname, "src", "index.js"),
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
    resolve: {
        extensions: [".js", ".json", ".scss"],
        alias: {
            src: path.join(__dirname, "src"),
            img: path.join(__dirname, "assets", "img")
        }
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
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: "./index.html" })
    ]
}