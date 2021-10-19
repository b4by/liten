import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from "react-router";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { Home } from "./pages/home";
import { Info } from "./pages/info";
import { Info1 } from "./pages/info/info_1";
import { Info2 } from "./pages/info/info_2";
import { Info3 } from "./pages/info/info_3";
import { Info4 } from "./pages/info/info_4";
import { Info5 } from "./pages/info/info_5";
import { Start } from "./pages/start";
import { Task } from "./pages/task";
import { Task1 } from "./pages/task/task_1";
import { Task2 } from "./pages/task/task_2";
import { Task3 } from "./pages/task/task_3";
import { Task4 } from "./pages/task/task_4";
import { useStore } from "./store";
import { Submit } from "./pages/submit";
import { Share } from "./pages/share";
import { Music } from "./components/music";
import { Task5 } from "./pages/task/task_5";

function App() {
  const { game } = useStore();
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <Music />
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/start">
              <Start />
            </Route>
            <Route exact path="/info/1">
              <Info>
                <Info1 />
              </Info>
            </Route>
            <Route exact path="/info/2">
              <Info>
                <Info2 />
              </Info>
            </Route>
            <Route exact path="/info/3">
              <Info>
                <Info3 />
              </Info>
            </Route>
            <Route exact path="/info/4">
              <Info>
                <Info4 />
              </Info>
            </Route>
            <Route exact path="/info/5">
              <Info>
                <Info5 />
              </Info>
            </Route>
            <Route exact path="/task/1/:id">
              <Task1 />
            </Route>
            <Route exact path="/task/2">
              <Task>
                <Task2 />
              </Task>
            </Route>
            <Route exact path="/task/3">
              <Task>
                <Task3 />
              </Task>
            </Route>
            <Route exact path="/task/4">
              <Task4 />
            </Route>
            <Route exact path="/task/5">
              <Task5 />
            </Route>
            <Route exact path="/submit">
              <Submit />
            </Route>
            <Route exact path="/shares">
              <Share />
            </Route>
            <Redirect to="/" />
          </Switch>
        </Router>
      </DndProvider>
    </>
  );
}

export default App;
