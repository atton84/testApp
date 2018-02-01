const webpack = require("webpack");
const path = require("path");

const NODE_ENV = process.env.NODE_ENV || 'dev';
const BUILD_DIR = path.resolve(__dirname, 'public/javascripts');
const APP_DIR = path.resolve(__dirname, 'client/app');
const ADMIN_DIR = path.resolve(__dirname, 'client/admin');

const config = {
    context: ADMIN_DIR,
    entry: {
        app: [APP_DIR + "/index.jsx"],
        admin: [ADMIN_DIR + "/index.jsx"]
    },
    output: {
        path: BUILD_DIR,
        filename: "[name].js",
        publicPath: "/javascripts/",
        /*hotUpdateChunkFilename: 'hot/hot-update.js',
        hotUpdateMainFilename: 'hot/hot-update.json'*/
    },
    watch: true,
    resolve:{
      extensions: ['.js', '.jsx']
    },
    module : {
        loaders : [
            {
                test: /\.js(x)?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react", "env"],
                    //plugins: ["react-hot-loader/babel"]
                }
            },
        ]
    },
    plugins:[]
};

//NODE_ENV=dev node webpack-dev-server.js
if (NODE_ENV == 'dev') {
    config.entry.admin.splice(0,0, "react-hot-loader/patch");
    config.entry.app.splice(0,0, "react-hot-loader/patch");

    config.devServer= {
        hot:true,
        contentBase: path.resolve(__dirname,""),
        publicPath: "/javascripts/",
        port:3000,
        proxy: {
            "/admin": "http://localhost:5000"
        }
    };
    // Позволяет синхронизировать с браузером при разработке (как BrowserSync)
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    );
}


module.exports = config;
