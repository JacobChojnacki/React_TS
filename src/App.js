import {Route, Switch} from "react-router-dom";
import AllFilmsPage from "./pages/AllFilms";
import NewFilmPage from "./pages/NewFilm";
import ProductionPage from "./pages/Production";
import Layout from "./components/layout/Layout";

function App() {
    return (
        <Layout>
            <Switch>
                <Route path={'/'} exact>
                    <AllFilmsPage/>
                </Route>
                <Route path={'/new-film'}>
                    <NewFilmPage/>
                </Route>
                <Route path={'/production'}>
                    <ProductionPage/>
                </Route>
            </Switch>
        </Layout>
    );
}

export default App;
