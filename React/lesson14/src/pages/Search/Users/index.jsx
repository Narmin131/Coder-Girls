import React, { Component } from "react";
import UserCard from "../UserCard";

export class Users extends Component {
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {this.props.githubUsers.map((item) => {
              return <UserCard user={item} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default Users;
