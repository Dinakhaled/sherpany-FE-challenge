import React from "react";
import { Router } from "react-router-dom";
import history from "../routes/History";
import Routes from "../routes/Routes";
import { ThemeProvider } from "@material-ui/core/styles";
import Theme from "../utils/Theme";
import Layout from "../components/Layout";
// ========== General styles ==========
import "./App.scss";

const App = () => {
  return (
    <ThemeProvider theme={Theme}>
      <Router history={history}>
        <Layout>{Routes}</Layout>
      </Router>
    </ThemeProvider>
  );
};

export default App;
