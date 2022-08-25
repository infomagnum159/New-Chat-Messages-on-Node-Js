import React from 'react';
import Layout from "./components/Layout/Layout";
import {Switch, Route} from "react-router-dom";
import Messages from "./containers/Messages/Messages";
import NewMessages from "./containers/NewMessage/NewMessages";

const App = () => (
    <Layout>
      <Switch>
        <Route path="/" exact component={Messages}/>
        <Route path="/add-post" exact component={NewMessages}/>
        <Route render={() => <h1>404 Not Found</h1>}/>
      </Switch>
    </Layout>
);

export default App;