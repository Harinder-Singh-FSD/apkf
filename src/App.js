import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Donation from "./pages/Donation";
import Home from "./pages/Home";
import JoinUsPage from "./pages/JoinUsPage";
import Completed from "./pages/Projects/Completed";
import NeverEnding from "./pages/Projects/NeverEnding";
import Ongoing from "./pages/Projects/Ongoing";
import { Route, Switch } from "react-router-dom";
import DonationPay from "./pages/DonationPay";
function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about_us">
          <AboutUs />
        </Route>
        <Route path="/projects/ongoing">
          <Ongoing />
        </Route>
        <Route path="/projects/completed">
          <Completed />
        </Route>
        <Route path="/projects/never_ending">
          <NeverEnding />
        </Route>
        <Route path="/contact_us">
          <ContactUs />
        </Route>
        <Route path="/join_us">
          <JoinUsPage />
        </Route>
        <Route exact path="/donation">
          <Donation />
        </Route>
        <Route exact path="/donation/donate">
          <DonationPay />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
