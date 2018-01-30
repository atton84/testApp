const webpack = require("webpack");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV || 'development';
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
                    presets: ["react", "env"]
                }
            },
        ]
    },
    plugins:[],
};

//NODE_ENV=dev node webpack-dev-server.js
if (NODE_ENV == 'development') {
    config.entry=Object.assign(config.entry,{"dev-server":"webpack/hot/dev-server", "only-dev-server":"webpack/hot/only-dev-server"});

    // Позволяет синхронизировать с браузером при разработке (как BrowserSync)
    config.plugins.push(
        //плагин для обновления комп-в React
        new webpack.HotModuleReplacementPlugin()
    );
}

module.exports = config;
