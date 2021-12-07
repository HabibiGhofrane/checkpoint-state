import React from 'react';
import "./App.css"
class Profile extends React.Component {
constructor(props){
super(props);
this.state= {Person : { fullName: "habibi ghofrane",bio: "This is my bio",profession: "student"
} }}


render() {
    return (
    <div>
    <img style={{width:"400px"}} 
       src="https://static.vecteezy.com/ti/vecteur-libre/t2/1993889-belle-femme-latine-avatar-icone-personnage-gratuit-vectoriel.jpg"
alt="photo de Profil">       
</img>                  
<h1>{this.state.Person.fullName}</h1>
<h1>{this.state.Person.bio} ......</h1>
<h1>{this.state.Person.profession}</h1>
    </div>
    ) }
}

export default Profile;