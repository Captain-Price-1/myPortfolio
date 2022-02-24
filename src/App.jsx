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
import Container from "./Change";
import Contact from "./Contact";
function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({ top: 0 });
          }
        }}
      >
        <Switch location={location} key={location.pathname}>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/" children={<Home />} />
        </Switch>
      </AnimatePresence>
    </>
  );
}

export default App;
