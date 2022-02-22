import Introduction from "./Introduction";
import Navbar from "./Navbar";
import Projects from "./Projects";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import About from "./about";
import Home from "./HomeScreen";
import { AnimatePresence } from "framer-motion";
function App() {
  const location = useLocation();
  return (
    <AnimatePresence initial={false}>
      <Switch location={location} key={location.pathname}>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" children={<Home />} exact />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
