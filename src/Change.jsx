import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import About from "./about";
import Home from "./HomeScreen";
import { AnimatePresence } from "framer-motion";

const Container = () => {
  const location = useLocation();
  return (
    <AnimatePresence initial={false} exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/" children={<Home />} exact />
      </Switch>
    </AnimatePresence>
  );
};
export default Container;
