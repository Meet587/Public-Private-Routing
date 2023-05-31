import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { Route, Routes } from "react-router";
import { publicRoute, routes } from "./Routes/routes";
import AuthRoute from "./Routes/AuthRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* public route */}
        {publicRoute.map((route, id) => {
          return <Route key={id} path={route.path} element={route.element} />;
        })}

        {/* private route */}
        <Route element={<AuthRoute />}>
          {routes.map((route, id) => {
            return <Route key={id} path={route.path} element={route.element} />;
          })}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
