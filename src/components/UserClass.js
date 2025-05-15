import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Default location",
                avatar_url:"https://dummy.png"
            }
        };
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/Neelakantam-Jami");
        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    render() {

        const { name, location, avatar_url} = this.state.userInfo;
        
        return (
            <div className="user-card">
                <img src={avatar_url} alt="" />
                <h2>Name: {name}</h2>
                <h3>Location : {location?location:"India"}</h3>
                <h3>Contact : neelakantamjami24@gmail.com</h3>
          </div>
        )
    }
}

export default UserClass;