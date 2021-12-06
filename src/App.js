import React, { useState } from 'react';
import "./App.css"
import profileImage from './profileImage.jng'
  
class App extends React.Component {
  state = {
    Person: {
      fullName: "habibi ghofrane",
      bio: "This is my bio",
      imgSrc: {profileImage},
      profession: "student"
    },
    show: true
  };

  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  };
  

  render() {
    return (
      <>
        {this.state.show && (
          <>
          <img style={{width:"400px"}}
            //src={this.state.Person.imgSrc} 
            src="https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg"
            alt="Photo de profil">

            </img>
            <h1>{this.state.Person.fullName}</h1>
            <h1>{this.state.Person.bio} ......</h1>
            <h1>{this.state.Person.profession}</h1>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click here</button>
      </>
    );
  }
}
  
export default App;