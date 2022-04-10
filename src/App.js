import Headers from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home.jsx";
import NotFound from "./pages/NotFound.jsx";
import Category from "./pages/Category";
import Recipe from "./pages/Recipe";

function App() {
  return (
    <div>
      <Headers />
      <main className="container content">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/category/:name" component={Category} />
          <Route path="/meal/:id" component={Recipe} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
