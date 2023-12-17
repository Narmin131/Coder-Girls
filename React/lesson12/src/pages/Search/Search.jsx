import React, { Component } from "react";
import Form from "../Search/Form/index";
import Users from "../Search/Users/index";
import axios from 'axios'
export class Search extends Component {
  constructor() {
    super();
    this.state = {
      githubUsers: [],
    };
  }

  searchUser = (userName) => {
    axios.get(`https://api.github.com/search/users?q=${userName}`)
    .then(res =>{
        console.log(res.data.items);
        this.setState({githubUsers : res.data.items})
        console.log(this.state.githubUsers);
    })
  };

  render() {
    return (
      <>
        <Form searchUser={this.searchUser}/>
        <Users githubUsers={this.state.githubUsers}/>
      </>
    );
  }
}

export default Search;
