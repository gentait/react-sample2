import React from "react";
import axios from "axios";

interface Props {}
interface State {}
class MainContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/products")
      .then(results => {
        console.log(results);
        this.setState({ products: results.data });
      })
      .catch(data => {
        console.log(data);
      });
  }

  render() {
    return <div className="app-main"></div>;
  }
}

export default MainContainer;
