// import logo from "./logo.svg";
import "./App.css";
import MainPageComponent from "./main";
import UploadPage from "./upload";
import ProductPage from "./product";
import { Switch, Route } from "react-router-dom";
function App() {
  return (
    // <MainPageComponent></MainPageComponent>
    <div>
      <Switch>
        <Route exact={true} path={"/"}>
          <MainPageComponent />
        </Route>
        <Route exact={true} path="/upload">
          <UploadPage />
        </Route>
        <Route exact={true} path="/products/:id">
          <ProductPage />
        </Route>
      </Switch>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
