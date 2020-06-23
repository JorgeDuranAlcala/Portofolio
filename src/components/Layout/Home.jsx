import * as React from "react";
import SecArr from "./Sections/index";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showUp: false,
    };
  }

  componentDidMount() {
    this.onScrollEffect();
  }

  onScrollEffect() {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1600) {
        this.setState({ showUp: true });
      } else {
        this.setState({ showUp: false });
      }
    });
  }

  render() {
    const { showUp } = this.state;

    return ( <> { SecArr.map( (Section, i) => <Section key={i} showUp={showUp} />) } </> );

  }
}

export default Home;
