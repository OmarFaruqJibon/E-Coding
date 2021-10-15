import './App.css';
import Header from './components/Header/Header';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AllCourses from './components/AllCourses/AllCourses';
import Banner from './components/Banner/Banner';
import AboutUs from './components/AboutUs/AboutUs';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import ContactUs from './components/ContactUs/ContactUs';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      {/* Routering */}
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Banner></Banner>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Banner></Banner>
            <Home></Home>
            <Footer></Footer>
          </Route>
          <Route path="/courses">
            <Header></Header>
            <AllCourses></AllCourses>
            <Footer></Footer>
          </Route>
          <Route path="/aboutUs">
            <Header></Header>
            <AboutUs></AboutUs>
            <Footer></Footer>
          </Route>
          <Route path="/ContactUs">
            <Header></Header>
            <ContactUs></ContactUs>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <Header></Header>
            <NotFound></NotFound>
            <Footer></Footer>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
