import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [friends, setfriends] = useState([]);
  useEffect(() => {
    axios.get("http://localhost/friends").then((Response) => {
      setfriends(Response.data);
    })

    .catch((error)=>{
      console.log(error)
    })
  });
  return (
    <div>
      <h1>hi baby kaise frontend aur backend ko add krte hai </h1>
      <p>There are : {friends.length}</p>
      {
      friends.map((friend, index) => (
        <div key={friend.id}>
          <h3>{friend.Name}</h3>
          <p>{friend.Home}</p>
        </div>
      ))}
    </div>
  );
};

export default App;
