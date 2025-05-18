import React from "react";

class UserClass extends React.Component{

    constructor(props) {
        super(props)
        this.state = {
            userInfo: {
                name: "Dummy name",
                location: "Default location",
                avatar_url:"https://dpandpics.com/images/trending-dp/trending-dp375.jpg"
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
            <div className="flex border border-gray-300 w-1/2 mx-auto rounded-lg shadow-xl items-center">
                <div className="flex m-10">
                    <img className="rounded-full w-70 shadow-xl border border-gray-600" src={avatar_url}/>
                </div>
                <div className="flex flex-col items-center font-bold">
                    <h2>{name}</h2>
                    <h3>{location?location:"India"}</h3>
                    <h3>neelakantamjami24@gmail.com</h3>
                </div>
          </div>
        )
    }
}

export default UserClass;