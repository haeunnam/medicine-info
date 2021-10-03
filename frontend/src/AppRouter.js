import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/user/Signup";
import SignIn from "./pages/user/SignIn";
import MedicineInfo from "./pages/medicines/MedicineInfo";

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/medicines" component={MedicineInfo} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRouter;
