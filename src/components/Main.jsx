import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Layout/Home";
import { Navbar, AllProjects, Blog, PostView } from "./index.js";
import NotFound from "./NotFound/NotFound";
import { langContext } from "../Context/langContext";
import Modal from "./Modal/Modal";
import MiniModal from "./Modal/MiniModal";
import { getLocalStorage, setLocalStorage, localStorageIsEmpty, } from "../utils/manageLocalStorage";


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cls: 'linkAlter',
      lang: getLocalStorage('lang'),
      display: '',
      localIsEmpty: !localStorageIsEmpty()
    };

  }


  changeColor = () => {
      this.setState({ 
          cls:  this.state.cls === 'linkAlter'
                  ? ''
                  : 'linkAlter'
      })
  }

  handleClick = (e) => {
    const { value } = e.target
      this.setState({lang: value})
      setLocalStorage(value)
      this.setState({display:'none'})
  }

  handleMiniModalClick = e => {
      (this.state.display === '') ? this.setState({display: 'none'}) : this.setState({display: ''})
  }

  componentDidMount() {
      if (localStorageIsEmpty()) {
          this.setState({ display: 'none' })
      }
  }

  render() {

         const { lang, display } = this.state

    return (
      <>
        <Router>
          <langContext.Provider value={lang}>
                {/* Navigation */}
                <Navbar/>
                {/* Button to change language */}
                <MiniModal handleClick={this.handleMiniModalClick} />
                {/* Button to select a current language */}
                <Modal handleClick={this.handleClick} display={display}/>
                <Switch>
                  <Route path="/" exact>
                      <Home></Home>
                  </Route>
                  <Route path="/allProjects">
                    <AllProjects/>
                  </Route>
                  <Route path="/blog">
                    <Blog/>
                  </Route>
                  <Route path="/postView/:id">
                    <PostView/>
                  </Route>
                  <Route path="*">
                      <NotFound/>
                  </Route>
                </Switch>
          </langContext.Provider>
        </Router>
      </>
    );
  }
}

export default Main;
