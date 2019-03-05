import React from "react";
import Display from "./display";

class Dashboard extends React.Component {
  state = {
    balls: 0,
    strikes: 0
  };
  strike = () => {
    this.setState({ strikes: this.state.strikes + 1 });
    if (this.state.strikes === 2) {
      this.setState({ strikes: 0, balls: 0 });
    }
  };
  ball = () => {
    this.setState({ balls: this.state.balls + 1 });
    if (this.state.balls === 3) {
      this.setState({ strikes: 0, balls: 0 });
    }
  };
  hit = () => {
    this.setState({ strikes: 0, balls: 0 });
  };
  foul = () => {
    if (this.state.strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 });
    }
  };

  render() {
    return (
      <div>
        <Display balls={this.state.balls} strikes={this.state.strikes} />
        <div>
          <button data-testid = 'strikeButton' onClick={this.strike}>Strike</button>
          <button data-testid = 'ballButton' onClick={this.ball}>Ball</button>
          <button data-testid = 'foulButton' onClick={this.foul}>Foul</button>
          <button data-testid = 'hitButton' onClick={this.hit}>Hit</button>
        </div>
      </div>
    );
  }
}

export default Dashboard;
