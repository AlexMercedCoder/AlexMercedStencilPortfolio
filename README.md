# Portfolio Using Stencil
## by Alex Merced
### [LIVE PROJECT](https://www.AlexMercedCoder.com)
### [Portfolio Website]()
---
**SUMMARY** :
Stencil JS allows the creation of framework agnostic web components. This repo is version of my portfolio web app created using stencil to practice making reusable UI Components in Stencil.
---
## Resources Used

- Stencil JS

## Design of Functionality

The code below is the component take with properties for my card component. I originally was going to make a slider but ended up making it a card which is why it's called proj-slider.

```
<proj-slider cardImage="https://i.imgur.com/NPV7bmk.png" cardtitle="Calculator" link1="alexmercedcoder.com" linkText1="git"
link2="alexmercedcoder.com" linkText2="live"></proj-slider>
```



## Other Comments

- The cardtitle property was originally called title but being a reserve word it prevented all the properties for rendering. Thanks to the Stencil JS slack community for helping me resolve that issue.
- Always a good habit to remember in JSX all tags must close the code acts funny to that means typically open tags should be marked <img/> or <br/>, this certainly caused some bug searches while making the card component.


<!-- Image Tag: ![alt text](image.jpg) -->
<!-- Link Tag: [title](https://www.example.com) -->
<!-- https://www.markdownguide.org/cheat-sheet/ -->
