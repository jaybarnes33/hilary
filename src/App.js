import "./styles/bootstrap.min.css";
import "./styles/App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./screens/Menu";
import Travel from "./screens/Travel";
import Contact from "./screens/Contact";
import Symptoms from "./screens/Symptoms";
import NextSteps from "./screens/NextSteps";
import Resources from "./screens/Resources";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Menu} exact />
      <Route path="/travel" component={Travel} exact />
      <Route path="/contact" component={Contact} exact />
      <Route path="/symptoms" component={Symptoms} exact />
      <Route path="/what-to-do" component={NextSteps} exact />
      <Route path="/resources" component={Resources} exact />
    </Router>
  );
};

export default App;
