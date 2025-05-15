import { useEffect, useState } from "react";

const User = ({ name }) => {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);


    useEffect(() => {
        //Api calls
    }, [])
    
    return (
        <div className="user-card">
            <h2>Count= {count}</h2>
            <h2>Count2= {count2}</h2>
            <h2>Name: {name}</h2>
            <h3>Location : Vizag</h3>
            <h3>Contact : neelakantamjami24@gmail.com</h3>
        </div>
    );
};

export default User;