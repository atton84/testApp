const webpack = require("webpack");
const path = require("path");

const BUILD_DIR = path.resolve(__dirname, 'public/javascripts');
const APP_DIR = path.resolve(__dirname, 'client/app');
const ADMIN_DIR = path.resolve(__dirname, 'client/admin');

const config = {
    entry: {
        app: APP_DIR + "/index.jsx",
        admin: ADMIN_DIR + "/index.jsx"
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].js"
    },
    watch: true,
    module : {
        loaders : [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ['react', 'es2015', 'stage-2']
                }
            },
        ]
    }
};

module.exports = config;
