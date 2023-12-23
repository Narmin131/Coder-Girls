import React, { Component } from "react";
export class Form extends Component {
  constructor() {
    super();
    this.state = {
      query: "",
    };
  }
  submitForm = (e) => {
    e.preventDefault();
    this.props.searchUser(this.state.query);
    this.setState({ query: "" });
  };
  render() {
    return (
      <>
        <div className="container">
          <form onSubmit={this.submitForm}>
            <div className="mb-3">
              <label className="form-label">User Name</label>
              <input
                type="text"
                className="form-control"
                value={this.state.query}
                onChange={(e) => this.setState({ query: e.target.value })}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
        </div>
      </>
    );
  }
}

export default Form;
