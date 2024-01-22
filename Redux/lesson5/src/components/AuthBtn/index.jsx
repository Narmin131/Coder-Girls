import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import Avatar from "@mui/material/Avatar";
// import Stack from "@mui/material/Stack";
// import { deepOrange, deepPurple } from "@mui/material/colors";

import { Avatar, Button } from "antd";
const Auth = () => {
  const [myUser, setMyUser] = useState({
    name: "Narmin",
    email: "mnermin064@gmail.com",
    pass: "1123",
  });
  localStorage.setItem("User", JSON.stringify(myUser));

  const signOut = () => {
    localStorage.removeItem("User");
    window.location.reload();
  };

  const checkUser = () => {
    let user = JSON.parse(localStorage.getItem("User"));
    if (user !== null) {
      return (
        <>
          <div className="dropdown">
            <Avatar
              style={{
                backgroundColor: "red",
                verticalAlign: "middle",
              }}
              size="large"
              gap={4}
            >
              {user.name.slice(0,1)}
            </Avatar>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {/* <Stack direction="row" spacing={2}>
                <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
              </Stack> */}
              {/* {user.name} */}
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" onClick={signOut}>
                  Log out
                </a>
              </li>
              <li>
                <NavLink className="dropdown-item" to="/admin">
                  Admin
                </NavLink>
              </li>
            </ul>
          </div>
        </>
      );
    } else {
      return (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      );
    }
  };

  return <>{checkUser()}</>;
};

export default Auth;
