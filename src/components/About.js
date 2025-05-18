import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div className="text-center">
        <h1 className="font-bold my-6 text-3xl ">About Us</h1>
        <UserClass />
      </div>
    );
  }
}

export default About;