import React, { Component } from "react";

export class SingleCard extends Component {
  render() {
    const { title, thumbnailUrl } = this.props.photo;
    return (
      <>
        <div className="col-lg-3">
          <div className="card" style={{ width: "100%" }}>
            <img src={thumbnailUrl} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SingleCard;
