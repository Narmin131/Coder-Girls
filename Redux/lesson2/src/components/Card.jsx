import React, { Component } from "react";

export class Card extends Component {
  // style="width: 18rem;"
  // style={{color:"red"}}
  render() {
    return (
      <>
        <div class="card" style={{ color: "red" }}>
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Card;

// Reactda 2 cur komponent movcuddur
// Class (class metoduynan) ve function (Es5, Es6) komponent
