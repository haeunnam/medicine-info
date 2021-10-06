import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PrivateRoute from "./PrivateRoute";
import theme from "./styles/theme";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/user/Signup";
import SignIn from "./pages/user/SignIn";
import MedicineInfo from "./pages/medicines/MedicineInfo";
import UserEdit from "./pages/user/UserEdit";
import MyPage from "./pages/user/MyPage";
import DurPage from './pages/DurPage';
import MyMedi from "./pages/user/MyMedi";
import Review from "./pages/medicines/Review";
import SearchMedicine from "./pages/medicines/SearchMedicine";
import CategoryMedicine from "./pages/medicines/CategoryMedicine";

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/" component={SearchMedicine} />
          <Route
            exact
            path="/medicines/category"
            component={CategoryMedicine}
          />
          <Route exact path="/medicines/:id" component={MedicineInfo} />
          <Route exact path="/medicines/:id/review" component={Review} />
          <PrivateRoute exact path="/mypage/" component={MyPage} />
          <PrivateRoute exact path="/mypage/edit" component={UserEdit} />
          <PrivateRoute exact path="/dur" component={DurPage} />
          <PrivateRoute exact path="/mymedi" component={MyMedi} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default AppRouter;
