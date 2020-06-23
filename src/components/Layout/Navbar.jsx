import React, { createContext } from "react";
import Toolbar from "../ToolBar/Toolbar";
import { useLocation } from "react-router-dom";

export const AppContext = createContext();

const GetLocation = ({Icon, callback}) => {
  const { pathname } = useLocation();
  
  const color = (pathname === '/')
                ? "white"
                : "black"

  return (
    <i className={`${Icon} ${color}`} 
              onClick={callback}
            ></i>
  )
}




const myThemes = {
  projects: {
    color: "rgba(0,0,0,0.8)",
  },
  home: {
    color: "#fff",
  },
  blog: {
    color: "rgba(0,0,0,0.8)",
  }
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky: "",
      mobileSticky: '',
      themes: myThemes.home,
      showUp: "d-none",
      Icon: "fas fa-bars"
    };

  }

  componentDidMount() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60 ) {
        this.setState({ sticky: "sticky", Icon: "fas fa-bars black"});
      } else {
        this.setState({ sticky: "", Icon: "fas fa-bars"});
      }
    });
  }


  displayNavToMobileDevices = () => {

        (this.state.showUp === "d-none")
        ? this.setState({ 
            showUp: "showUp", 
            Icon: "fas fa-window-close"
          })
        : this.setState({ showUp: "d-none", Icon: "fas fa-bars" })
  }

  render() {
    const { sticky, themes, showUp, Icon, mobileSticky } = this.state;

    return (
      <>
        <AppContext.Provider value={themes}>
          <nav className={sticky}>
            <Toolbar />
          </nav>
          <div className={`burger ${mobileSticky}`}>
            <GetLocation Icon={Icon} callback={this.displayNavToMobileDevices} />
            <div className={`nav_content ${showUp}`}>
              <Toolbar/>
            </div>
            {/* <Toolbar /> */}
          </div>
        </AppContext.Provider>
      </>
    );
  }
}

export default Navbar;
