import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import PrivateRoute from "./lib/PrivateRoute";
import theme from "./styles/theme";
import PageNotFound from "./pages/PageNotFound";
import Signup from "./pages/user/Signup";
import SignIn from "./pages/user/SignIn";
import MedicineInfo from "./pages/medicines/MedicineInfo";
import UserEdit from "./pages/user/UserEdit";
import MyPage from "./pages/user/MyPage";
import DurPage from "./pages/DurPage";
import MyMedi from "./pages/user/MyMedi";
import Review from "./pages/medicines/Review";
import SearchMedicine from "./pages/medicines/SearchMedicine";
import CategoryMedicine from "./pages/medicines/CategoryMedicine";
import MyReview from "./pages/user/MyReview";
import Deactivate from './pages/user/Deactivate';
import PublicRoute from "./lib/PublicRoute";
import ToastMessage from "./components/molecules/ToastMessage";

function AppRouter() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <PublicRoute exact path="/signup" component={Signup} />
          <PublicRoute exact path="/signin" component={SignIn} />
          <PrivateRoute exact path="/" component={SearchMedicine} />
          <PrivateRoute
            exact
            path="/medicines/category"
            component={CategoryMedicine}
          />
          <PrivateRoute exact path="/medicines/:id" component={MedicineInfo} />
          <PrivateRoute exact path="/medicines/:id/review" component={Review} />
          <PrivateRoute exact path="/mypage/" component={MyPage} />
          <PrivateRoute exact path="/mypage/edit" component={UserEdit} />
          <PrivateRoute exact path="/dur" component={DurPage} />
          <PrivateRoute exact path="/mymedi" component={MyMedi} />
          <PrivateRoute exact path="/myreview" component={MyReview} />
          <PrivateRoute exact path="/signout" component={Deactivate} />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
      <ToastMessage/>
    </ThemeProvider>
  );
}

export default AppRouter;
