//imports dependencies and files
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import donut from "./donut.json";
import "./App.css";

//sets state to 0 or empty
class App extends Component {
  state = {
    donut,
    clickedDonut: [],
    score: 0
  };

//when you click on a card ... the donut is taken out of the array
  imageClick = event => {
    const currentDonut = event.target.alt;
    const DonutAlreadyClicked =
      this.state.clickedDonut.indexOf(currentDonut) > -1;

//if you click on a donut that has already been selected, the game is reset and cards reordered
    if (DonutAlreadyClicked) {
      this.setState({
        donut: this.state.donut.sort(function(a, b) {
          return 0.5 - Math.random();
        }),
        clickedDonut: [],
        score: 0
      });
        alert("You lose. Play again?");

//if you click on an available donut, your score is increased and cards reordered
    } else {
      this.setState(
        {
          donut: this.state.donut.sort(function(a, b) {
            return 0.5 - Math.random();
          }),
          clickedDonut: this.state.clickedDonut.concat(
            currentDonut
          ),
          score: this.state.score + 1
        },
//if you get all 12 donuts correct you get a congrats message and the game resets        
        () => {
          if (this.state.score === 12) {
            alert("Yay! You Win!");
            this.setState({
              donut: this.state.donut.sort(function(a, b) {
                return 0.5 - Math.random();
              }),
              clickedDonut: [],
              score: 0
            });
          }
        }
      );
    }
  };

//the order of components to be rendered: navbar, jumbotron, friendcard, footer 
  render() {
    return (
      <div>
        <Navbar 
          score={this.state.score}
        />
        <Jumbotron />
        <div className="wrapper">
          {this.state.donut.map(donut => (
            <FriendCard
              imageClick={this.imageClick}
              id={donut.id}
              key={donut.id}
              image={donut.image}
            />
          ))}
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;