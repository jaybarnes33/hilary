import "./styles/bootstrap.min.css";
import "./styles/App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from "./screens/Menu";
import Travel from "./screens/Travel";

const App = () => {
  return (
    <Router>
      <Route path="/" component={Menu} exact />
      <Route path="/travel" component={Travel} exact />
    </Router>
  );
};

export default App;
