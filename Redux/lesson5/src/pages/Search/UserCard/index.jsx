import React, { Component } from "react";

export class UserCard extends Component {
  render() {
    const { avatar_url, login } = this.props.user;
    return (
      <>
        <div className="card" style={{ width: "18rem" }}>
          <img src={avatar_url} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{login}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default UserCard;
