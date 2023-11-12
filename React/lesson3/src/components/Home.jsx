import axios from "axios";
import React, { Component } from "react";
import SingleCard from "./SingleCard";

export class Home extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      counter: 0,
    };
  }

  incrementCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  decrementCounter = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  //   componentDidMount() - lifecycle - heyat, yasam dongusu
  //   state, setState
  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/photos").then((res) => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
  render() {
    return (
      <>
        <span>{this.state.counter}</span>

        <button onClick={this.incrementCounter}>+</button>
        <button onClick={this.decrementCounter}>-</button>
        <button>reset</button>

        <section>
          <div className="container">
            <div className="row">
              {this.state.users.map((item, index) => {
                return (
                  // <div key={item.id}>
                  //   <span>{item.id}</span>
                  //   <h1>{item.name}</h1>
                  //   <p>{item.username}</p>
                  // </div>
                  <SingleCard photo={item} key={item.id} />
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}

// props - melumati oturur
// state - komponentin melumatini ozunde saxliyir

export default Home;
