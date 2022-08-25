import {Route, Switch} from "react-router-dom";
import NewMessage from "./containers/NewMessages/NewMessage";
import Messages from "./containers/Messages/Messages";
import Layout from "./components/UI/Layout/Layout";

const App = () => (
    <>
        <Layout>
        <Switch>
            <Route path="/" exact component={Messages}/>
            <Route path="/message/new" component={NewMessage}/>
        </Switch>
        </Layout>
    </>
);

export default App;