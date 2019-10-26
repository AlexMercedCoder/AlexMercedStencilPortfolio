import { Component, Prop, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-profile',
  styleUrl: 'app-profile.css',
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>
            Hello! My name is {this.normalize(this.match.params.name)}. Welcome to my portfolio page. I am Full Stack Developer who loves learning new technologies and improving my skills with existing ones. I have experience with languages like Javascript, Python, Ruby, C#, Kotlin, GO, Switft, Clojure, PHP,and Elixir. I have worked with frameworks like React, Angular, Jquery, Express, Django, StencilJS, Bootstrap, Materialize and more. Below you can see some of my projects.
          </p>
          <div class="cardbox">

            <proj-slider cardImage="https://i.imgur.com/aAQyVp1.jpg" cardtitle="Pet Adoption App" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
            link2="https://alexmercedcoder.github.io/petadoptionapp/" linkText2="live"></proj-slider>

            <proj-slider cardImage="https://i.imgur.com/NPV7bmk.png" cardtitle="Calculator" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
            link2="https://optimistic-lamarr-1dc751.netlify.com/" linkText2="live"></proj-slider>

            <proj-slider cardImage="https://i.imgur.com/rtY5MTr.png" cardtitle="TODO List" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
            link2="https://xenodochial-beaver-d27eca.netlify.com/" linkText2="live"></proj-slider>

            <proj-slider cardImage="https://i.imgur.com/F3mFQzR.jpg" cardtitle="Bill & Ted Tic Tac Toe" link1="https://github.com/AlexMercedCoder/GABootcampProjects" linkText1="git"
            link2="https://stoic-stonebraker-80dd15.netlify.com/" linkText2="live"></proj-slider>

          </div>
        </div>
      );
    }
  }
}
