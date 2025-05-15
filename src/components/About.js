// import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component{
  constructor(props) {
    super(props); 
  }
  render() {
    return (
      <div>
        <h1>About</h1>
        <h2>This is About Component</h2>
        {/* <User name={"Neelakantam Naidu"} /> */}
        <UserClass name={"Neelakantam Naidu"} location={ "Vizag"} />
      </div>
    );
  }
}

// const About = () => {
//     return (
//       <div>
//         <h1>About</h1>
//         <h2>This is About Component</h2>
//         {/* <User name={"Neelakantam Naidu"} /> */}
//         <UserClass name={"Neelakantam Naidu"} location={ "Vizag"} />
//       </div>
//     );
// };
  
export default About;