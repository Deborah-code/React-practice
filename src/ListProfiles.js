import React, { Component } from "react";

export default class ListProfiles extends Component {
  render() {
    
    return (
      <div>
      		{this.props.profiles.map(profile => {
            const userName = this.props.users[profile.userID].name;
            const favMovieName =this.props.movies[profile.favoriteMovieID].name;

            return (
              
              <li key={profile.id}>
                <p>{`${userName}\'s favorite movie is "${favMovieName}."`}</p>
              </li>
            );
          })}
</div>

    );
  }
}
