import React from "react";
import {AppContainer} from "react-hot-loader";
import ReactDOM from "react-dom";
import Main from "./main.jsx";

//__webpack_public_path__ = "http://localhost:3000/";
/*let div = document.getElementById("app");
console.log(div);*/
const renderApp = (Component) => {
    ReactDOM.render(<AppContainer><Component /></AppContainer>, document.getElementById("app"));
}

renderApp(Main);

if(module && module.hot){
    module.hot.accept(/*"./main.jsx", () => {
        renderApp(Main);
    }*/);
}