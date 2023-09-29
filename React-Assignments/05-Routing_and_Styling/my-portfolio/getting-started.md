# Portfolio App with React

This tutorial will guide you through the process of creating a portfolio app using Vite and React.

## Prerequisites

Before you begin, ensure you have the following prerequisites installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/) if you prefer)

## Step 1: Creating a new Vite project

```bash
# Create a new Vite project with the React template
npm create vite@latest my-portfolio-app
cd my-portfolio-app
```

## Step 2: Install dependencies

```bash
# Install project dependencies
npm install
```

```bash
npm i react-router-dom react-easy-emoji react-headroom react-lottie react-reveal sass typewriter-effect
```

## Step 3: Start the development server

```bash
npm run dev
```

## Structure

```
src/
|-- assets/
|   |-- fonts/
|       |-- Agustina.woff
|       |-- Montserrat-Regular.ttf
|   |-- images/
|       |-- artifact-dark.svg
|       |-- artifact.svg
|       |-- contactMailDark.svg
|       |-- developerActivity.svg
|   |-- lottie/
|       |-- codingPerson.json
|       |-- contact.json
|       |-- email.json
|       |-- splashAnimation.json
|   |-- react.svg
|-- components/
|   |-- BackgroundImage/
|       |-- Background.jsx
|       |-- Background.scss
|   |-- Button/
|       |-- Button.jsx
|       |-- Button.scss
|   |-- DisplayLottie/
|       |-- DisplayLottie.jsx
|   |-- Navbar/
|       |-- Navbar.jsx
|       |-- Navbar.scss
|   |-- SocialMedia/
|       |-- SocialMedia.jsx
|       |-- SocialMedia.scss
|   |-- SoftwareSkills/
|       |-- SoftwareSkills.jsx
|       |-- SoftwareSkills.scss
|   |-- SplashScreen/
|       |-- SplashScreen.jsx
|       |-- SplashScreen.scss
|   |-- ToggleSwitch/
|       |-- ToggleSwitch.jsx
|       |-- ToggleSwitch.scss
|-- context/
|   |-- ThemeContext.jsx
|-- hooks/
|   |-- useLocalStorage.js
|-- pages/
|   |-- Contact/
|       |-- Contact.jsx
|       |-- Contact.scss
|   |-- Home/
|       |-- Home.jsx
|       |-- Home.scss
|   |-- Loading/
|       |-- Loading.jsx
|       |-- Loading.scss
|   |-- Projects/
        |-- Projects.jsx
        |-- Projects.scss
|   |-- Skills/
|       |-- Skills.jsx
|       |-- Skills.scss
|-- _globalColor.scss
|-- App.jsx
|-- App.scss
|-- index.css
|-- main.jsx
|-- portfolio.js

```

## JS

| No. | JS files                     |
| --- | ---------------------------- |
| 1   | [portfolio.js](#portfoliojs) |

## CSS code for different components

| No. | SCSS files                                 |
| --- | ------------------------------------------ |
| 1   | [\_globalColor.scss](#globalcolorscss)     |
| 2   | [index.css](#indexcss)                     |
| 3   | [App.scss](#appscss)                       |
| 4   | [Navbar.scss](#navbarscss)                 |
| 5   | [Background.scss](#backgroundscss)         |
| 6   | [ToggleSwitch.scss](#toggleswitchscss)     |
| 7   | [SplashScreen.scss](#splashscreenscss)     |
| 8   | [Home.scss](#homescss)                     |
| 9   | [SocialMedia.scss](#socialmediascss)       |
| 10  | [Button.scss](#buttonscss)                 |
| 11  | [Loading.scss](#loadingscss)               |
| 12  | [Skills.scss](#skillsscss)                 |
| 13  | [SoftwareSkills.scss](#softwareskillsscss) |
| 14  | [Project.scss](#projectscss)               |
| 15  | [Contact.scss](#contactscss)               |

## portfolio.js

```js
/* eslint-disable no-undef */
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation.json";

const greeting = {
  username: "Manish Tiwari", // rename it with your name
  title: "Hi there, ",
  prefix: " I'm",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/15gYg7n4eV3aeQc-fc3c_MPMe2hzPnqxn/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const socialMediaLinks = {
  github: "https://github.com/manishtmtmt",
  linkedin: "https://www.linkedin.com/in/wdmanisht/",
  gmail: "manisht.mt.mt@gmail.com",
  youtube: "https://www.youtube.com/@webdevyt",
  twitter: "twitter.com/manisht_mt",
  instagram: "https://www.instagram.com/manishtmtmt/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true, // Set true to display this section, defaults to false
};

const illustration = {
  animated: true, // Set to false to use static SVG
};

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm",
    },
    {
      skillName: "mongo-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const projects = {
  title: "Projects",
  subtitle: "SOME OF MY PROJECTS THAT I WORKED UPON",
  projects: [
    {
      image:
        "https://user-images.githubusercontent.com/46663132/262534431-9a05224e-3d3d-4672-8c76-01bdf5915769.png",
      projectName: "Genius",
      projectDesc:
        "Genius is an AI-based application that offers various functionalities, including AI chat, image generation, video generation, music generation, and code generation.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://genius-two.vercel.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/ai-saas",
        },
        //  you can add extra buttons here.
      ],
    },
    {
      image:
        "https://user-images.githubusercontent.com/46663132/202083172-3ed644aa-ebdf-428f-9dd4-8c865fe640e6.png",
      projectName: "Chat-Wave",
      projectDesc:
        "Chat App is a real-time chat application where you can do group chatting with people.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://chat-app-15798.web.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/chat-app",
        },
      ],
    },
    {
      image:
        "https://user-images.githubusercontent.com/46663132/262546451-153f404d-c23c-49c3-9636-0c66710f4b92.jpeg",
      projectName: "Alan AI News App",
      projectDesc:
        "The Alan AI News App is a platform that leverages AI technology to provide users with quick access to news from various categories.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://alanainewsappmt.netlify.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/alan_ai_news_app",
        },
      ],
    },
    {
      image:
        "https://user-images.githubusercontent.com/46663132/221346560-809836ed-a83f-4e5e-9dc7-06261853981f.png",
      projectName: "FS Blog App",
      projectDesc:
        "Welcome to my blog app project, developed using React, React Native, and Node.js! This project provides an intuitive and customizable platform for users to create and manage their own blog posts.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://my-fs-blog-admin.vercel.app/",
        },
        {
          name: "Github",
          url: "https://github.com/manishtmtmt/fs-blog-app",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "manisht.mt.mt@gmail.com",
};

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

export {
  greeting,
  socialMediaLinks,
  illustration,
  skillsSection,
  projects,
  contactInfo,
  splashScreen,
};
```

**[⬆ Back to Top](#js)**

## globalColor.scss

```css
/* Change colors in this file to style to your needs on a global level. 
Certain colors are used for different and multiply types of elements. 
For greater control over colors visit each components .scss file. */

// button colors
$buttonColor: #55198b;
$buttonHover: #8c43ce;
$topButtonHover: #000;

// text colors light theme
$titleColor: #000000;
$textColor: #000000;
$subTitle: #868e96;
$cardSubtitle: #666666;
$talkCardSubTitle: #7f8287;
$blogCardTitleColor: #262626;

// text color dark theme
$textColorDark: #ffffff;

// toggle switch colors
$toggleCheck: #2196f3;
$toggleSwitchSliderBG: #ccc;

// githubRepo specific colors
$githubRepoCardLanguageColorBG: #0000ff;
$githubRepoCardColor: rgb(88, 96, 105);
$githubRepoCardRepoCardStatsColor: rgb(106, 115, 125);
$githubRepoCardRepoNameColor: rgb(36, 41, 46);
$githubProfileCardLocationTS: #ffebcd;
$githubProfileCardBorder: #6c63ff;

// light background colors
$lightBackground1: #fff;
$lightBackground2: rgb(255, 255, 255);
$lightBackground3: #f5f2f4;
$blogCardContainerColor: #586069;
// dark background colors
$darkBackground: #171c28;

// light theme box shadows
$lightBoxShadowDark: rgba(0, 0, 0, 0.2);
$lightBoxShadow: rgba(0, 0, 0, 0.1);
$lightBoxShadowDarker: rgba(0, 0, 0, 0.3);

// dark theme box shadows
$darkBoxShadow: #d9dbdf;
$darkBoxShadow2: #ffffff;

// linear gradients
$experienceCardBlurredDivLG: linear-gradient(
  rgba(0, 0, 0, 0.4),
  rgba(0, 0, 0, 0.2)
);
$experienceCardBannerLG: linear-gradient(
  rgba(0, 0, 0, 0.7),
  rgba(0, 0, 0, 0.5)
);

// borders
$progressBarBackground: rgb(243, 239, 239);
$lightBorder1: rgba(211, 211, 211, 0.397);
$educationCardBorder: #a9a7f9;

// hovers
$achievementCertificateCardHoverDark: rgba(255, 255, 255, 0.2);
$blogCardHoverSmallColor: rgba(255, 255, 255, 0.8);
$headerHoverBG: #f4f4f4;
$contactDetailHoverTS: #b5b5b5;

// misc backgrounds
$progressBarSpanBG: #aaa5ff;
$iconBackground: #333;
$appHeaderBG: #282c34;

// misc colors
$skillsColor: #645beb;
$appLink: #09d3ac;

// social media icons
$faceBook: #3b5998;
$linkedin: #0e76a8;
$github: #333;
$gitlab: #fca326;
$google: #ea4335;
$twitter: #1da1f2;
$medium: #000;
$stackoverflow: #f48024;
$instagram: #c13584;
$kaggle: #20beff;
$youtube: #f00;
```

**[⬆ Back to Top](#js)**

## index.css

```css
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,200;0,300;1,300&family=Outfit:wght@300&display=swap");

@font-face {
  font-family: "Agustina Regular";
  font-style: normal;
  font-weight: normal;
  src: local("Agustina Regular"),
    url("./assets/fonts/Agustina.woff") format("woff");
  font-display: swap;
}
@font-face {
  font-family: "Montserrat";
  src: local("Montserrat"),
    url("./assets/fonts/Montserrat-Regular.ttf") format("woff");
  font-display: swap;
}

* {
  margin: 0;
  padding: 0;
}

:root {
  font-family: "Josefin Sans", Inter, system-ui, Avenir, Helvetica, Arial,
    sans-serif;
  font-weight: 700;
  font-size: large;
  letter-spacing: 0.1em;
}
```

**[⬆ Back to Top](#js)**

## App.scss

```css
@import "./globalColor";

.dark {
  background-color: $darkBackground;
  height: 100vh;
  width: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -10;
}
```

**[⬆ Back to Top](#js)**

## Navbar.scss

```css
@import "../../_globalColor";

/*React-headroom*/
.headroom-wrapper {
  max-height: 100px;
}

/* header */

.dark-menu {
  background-color: $darkBackground !important;
  color: $textColorDark;
}

.dark-menu a {
  color: $textColorDark !important;
}

.dark-menu li a:hover {
  background-color: $buttonColor !important;
}

.header {
  background-color: $lightBackground1;
  max-width: 100%;
  padding: 15px 20px;
  margin: 0px auto;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
}

.grey-color {
  color: $subTitle;
}

.header li a {
  display: block;
  padding: 15px 20px;
  color: $textColor;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: $headerHoverBG;
}

.header .logo {
  display: block;
  flex: none;
  float: left;
  font-size: 1.5em;
  text-decoration: none;
  margin-top: 10px;
  line-height: normal;
}

.header .logo-name {
  font-family: "Agustina Regular";
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 10px;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: inline-block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: $iconBackground;
  display: block;
  height: 2px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon-dark {
  background: $textColorDark;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: $iconBackground;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon-dark:before,
.header .menu-icon .navicon-dark:after {
  background: $textColorDark !important;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 486px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent !important;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

/* 48em = 768px */

@media (min-width: 48em) {
  .header li {
    float: left;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .header .menu {
    max-height: none;
  }

  .header .menu-icon {
    display: none;
  }
}

@media (max-width: 960px) and (min-width: 768px) {
  .header {
    font-size: 12px;
  }
}

@media (max-width: 48em) {
  .header .logo {
    font-size: 1.3em;
  }
}
```

**[⬆ Back to Top](#js)**

## Background.scss

```css
.bodyHeroAsset {
  height: 100vh;
  width: auto;
  position: fixed;
  // z-index: -1;
  left: 0;
  top: 10;
  // object-fit: fill;
}
```

**[⬆ Back to Top](#js)**

## ToggleSwitch.scss

```css
@import "../../_globalColor";

.switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 26px;
}

/* Fix visible slider checkbox */
input {
  transform: scale(0.5);
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: $toggleSwitchSliderBG;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider::before {
  position: absolute;
  content: "";
  height: 26px;
  width: 28px;
  left: 0;
  bottom: 0;
  background-color: $textColorDark;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider {
  background-color: $toggleCheck;
}

input:focus+.slider {
  box-shadow: $toggleCheck;
}

input:checked+.slider::before,
input:checked+.slider>.emoji {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
  display: flex;
  align-items: center;
}

.slider.round::before {
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.slider::after {
  display: inline;
  position: absolute;
  right: 9.3%;
  bottom: 17.5%;
}

input:checked+.slider::after {
  display: inline;
  position: absolute;
  right: 56.3%;
  bottom: 14.5%;
}

.emoji {
  z-index: 10;
  display: flex;
  align-items: center;
  margin-left: 2px;
}

@media all and (max-width: 786px) and (min-width: 425px) {
  input:checked+.slider::after {
    right: 60.3%;
    bottom: 20.5%;
  }

  .slider::after {
    right: 15.3%;
    bottom: 22.5%;
  }
}

@media all and (max-width: 2560px) and (min-width: 1552px) {
  .slider::after {
    bottom: 12.5% !important;
  }
}

@media all and (max-width: 1552px) and (min-width: 1440px) {
  .slider::after {
    bottom: 7.5% !important;
  }
}
```

**[⬆ Back to Top](#js)**

## SplashScreen.scss

```css
.splash-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.splash-animation-container {
  height: 50vh;
}

.splash-title-container {
  font-size: 2.5rem;
  text-decoration: none;
}
.splash-title {
  font-family: "Agustina Regular", cursive;
  font-weight: bold;
  font-variant-ligatures: no-common-ligatures;
  -webkit-font-variant-ligatures: no-common-ligatures;
  padding: 0 20px;
}
```

**[⬆ Back to Top](#js)**

## Home.scss

```css
@import "../../_globalColor";

.main {
  width: 90%;
  padding: 20px 10px;
  margin: 0px auto;
  margin-top: 4rem;
}

.greet-main {
  width: 100%;
  height: 90vh;
  // padding: 10px 10px;
  margin: 0px auto;
  display: flex;
  align-items: center;
}

.greeting-main {
  width: 65%;
  margin: auto;
  display: flex;
  align-items: center;
}

.greeting-main > * {
  flex: 1;
}

.greeting-text {
  font-size: 40px;
  line-height: 1.1;
  color: $textColor;
}

.wave-emoji {
  animation-duration: 1.8s;
  animation-iteration-count: infinite;
  animation-name: wave;
  display: inline-block;
  transform-origin: 70% 70%;
}

.dark-mode {
  background-color: transparent;
  color: white;
  transition: "0.1s";
}

.greeting-text-p {
  font-size: 20px;
  line-height: 1.5em !important;
}

.subTitle {
  color: $textColor !important;
}

.button-greeting-div {
  display: flex;
  margin-top: 10px;
}

@keyframes wave {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(-10deg);
  }
  20% {
    transform: rotate(12deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  40% {
    transform: rotate(9deg);
  }
  50% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

/* Media Query */
@media (max-width: 1380px) {
  .greeting-text {
    font-size: 50px;
  }
  .greeting-text-p {
    font-size: 20px;
  }
}
@media (max-width: 768px) {
  .button-greeting-div {
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
  }

  .greeting-text {
    font-size: 30px;
    text-align: center;
  }

  .greeting-text-p {
    font-size: 16px;
    line-height: normal;
    text-align: center;
  }

  .greeting-main {
    display: block;
    width: 90%;
  }

  .greeting-image-div {
    height: 256px;
    margin-top: 20px;
  }

  .greet-main {
    width: auto;
    margin-top: 1rem;
  }
}
```

**[⬆ Back to Top](#js)**

## SocialMedia.scss

```css
@import "../../_globalColor";

.social-media-div {
  font-size: 2em;
  margin-top: 1rem;
}

.icon-button {
  margin-bottom: 10px;
}

.icon-button i {
  color: $textColorDark;
  border-radius: 2.6rem;
  cursor: pointer;
  display: inline-block;
  font-size: 1.3rem;
  height: 2.6rem;
  line-height: 2.6rem;
  margin: 0 5px;
  position: relative;
  text-align: center;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 2.6rem;
  margin-bottom: 10px;
  transition: 0.2s ease-in;
}

.github i {
  background-color: $github;
}

.linkedin i {
  background-color: $linkedin;
}

.google i {
  background-color: $google;
}

.twitter i {
  background-color: $twitter;
}

.instagram i {
  background-color: $instagram;
}

.youtube i {
  background-color: $youtube;
}

/* Hover Transition */
.twitter i:hover,
.google i:hover,
.github i:hover,
.linkedin i:hover,
.instagram i:hover,
.youtube i:hover {
  background-color: $textColor;
} 

/* Media Query */
@media (max-width: 768px) {
  .social-media-div {
    text-align: center;
  }
}

@media (max-width: 48em) {
  .icon-button i {
    margin: 0 3px;
  }
}

```

**[⬆ Back to Top](#js)**

## Button.scss

```css
@import "../../_globalColor";

.main-button {
  background-color: $buttonColor;
  border: solid 1px $buttonColor;
  color: $textColorDark;
  font-weight: 700;
  width: max-content;
  padding: 13px 22px;
  margin-right: 50px;
  text-transform: uppercase;
  border-radius: 6px;
  text-align: center;
  text-decoration: none;
  display: block;
  margin-top: 20px;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out 0s;
}
.main-button:hover {
  background-color: $darkBoxShadow2;
  color: $buttonColor;
  transition: all 0.3s ease 0s;
  transform: translateY(-3px);
}
.project-button {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
.project-button > .main-button {
  margin-right: 0 !important;
}
/* Media Query */
@media (max-width: 768px) {
  .main-button {
    font-size: 0.938rem;
    padding: 12px 18px;
    margin-right: 0px;
  }
}
@media (max-width: 320px) {
  .main-button {
    font-size: 0.75rem;
  }
}
```

**[⬆ Back to Top](#js)**

## Loading.scss

```css
@import "../../_globalColor";

.sk-circle {
  margin: 100px auto;
  width: 40px;
  height: 40px;
  position: relative;
}
.sk-circle .sk-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.sk-circle .sk-child:before {
  content: "";
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: $iconBackground;
  border-radius: 100%;
  -webkit-animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
  animation: sk-circleBounceDelay 1.2s infinite ease-in-out both;
}
.sk-circle .sk-circle2 {
  -webkit-transform: rotate(30deg);
  -ms-transform: rotate(30deg);
  transform: rotate(30deg);
}
.sk-circle .sk-circle3 {
  -webkit-transform: rotate(60deg);
  -ms-transform: rotate(60deg);
  transform: rotate(60deg);
}
.sk-circle .sk-circle4 {
  -webkit-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  transform: rotate(90deg);
}
.sk-circle .sk-circle5 {
  -webkit-transform: rotate(120deg);
  -ms-transform: rotate(120deg);
  transform: rotate(120deg);
}
.sk-circle .sk-circle6 {
  -webkit-transform: rotate(150deg);
  -ms-transform: rotate(150deg);
  transform: rotate(150deg);
}
.sk-circle .sk-circle7 {
  -webkit-transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  transform: rotate(180deg);
}
.sk-circle .sk-circle8 {
  -webkit-transform: rotate(210deg);
  -ms-transform: rotate(210deg);
  transform: rotate(210deg);
}
.sk-circle .sk-circle9 {
  -webkit-transform: rotate(240deg);
  -ms-transform: rotate(240deg);
  transform: rotate(240deg);
}
.sk-circle .sk-circle10 {
  -webkit-transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  transform: rotate(270deg);
}
.sk-circle .sk-circle11 {
  -webkit-transform: rotate(300deg);
  -ms-transform: rotate(300deg);
  transform: rotate(300deg);
}
.sk-circle .sk-circle12 {
  -webkit-transform: rotate(330deg);
  -ms-transform: rotate(330deg);
  transform: rotate(330deg);
}
.sk-circle .sk-circle2:before {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
.sk-circle .sk-circle3:before {
  -webkit-animation-delay: -1s;
  animation-delay: -1s;
}
.sk-circle .sk-circle4:before {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
.sk-circle .sk-circle5:before {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
.sk-circle .sk-circle6:before {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
.sk-circle .sk-circle7:before {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
.sk-circle .sk-circle8:before {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.sk-circle .sk-circle9:before {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
.sk-circle .sk-circle10:before {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
.sk-circle .sk-circle11:before {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
.sk-circle .sk-circle12:before {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}

@-webkit-keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

@keyframes sk-circleBounceDelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}

```

**[⬆ Back to Top](#js)**

## Skills.css

```css
@import "../../_globalColor";

.main {
  width: 100%;
  margin: 0px auto;
  padding: 0;
}

.skills-main-div {
  display: flex;
  width: 100%;
  overflow: hidden;
}

.skills-text-div {
  // margin-left: 50px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  line-height: 1.1;
}

.skills-text-container {
  line-height: 1.5;
}

.skills-main-div > * {
  flex: 1;
  margin-bottom: 30px;
}

.skills-image-div > img {
  max-width: 100%;
  height: auto;
}

.skills-heading {
  font-size: 56px;
  font-weight: 400;
}
.subTitle {
  color: $subTitle;
}

.dark-mode {
  background-color: transparent;
  color: white;
  transition: "0.1s";
}

/* Media Query */
@media (max-width: 1380px) {
  .skills-heading {
    font-size: 40px;
  }
}
@media (max-width: 768px) {
  .skills-heading {
    font-size: 30px;
    text-align: center;
  }

  .greeting-text-p {
    font-size: 16px;
    line-height: normal;
  }

  .skills-main-div {
    flex-direction: column;
  }

  .skills-text-div {
    margin-left: 0px;
  }

  .skills-text {
    font-size: 16px;
  }

  .skills-text-subtitle {
    font-size: 16px;
    text-align: center;
  }

  .skills-image-div {
    /* display: none; */
    order: 2;
  }
}
```

**[⬆ Back to Top](#js)**

## SoftwareSkills.scss

```css
@import "../../_globalColor";

.dev-icons {
  padding-left: 0;
  list-style: none;
  font-size: 3rem;
  margin-bottom: 0px;
  margin-top: 0px;
  text-align: center;
}

.software-skill-inline {
  display: inline-block;
  margin-right: 20px;
  margin-bottom: 20px;
}

.software-skill-inline > i {
  color: $subTitle;
}

.software-skill-inline > i:hover {
  color: $skillsColor;
}
.software-skill-inline > p {
  color: $subTitle;
  font-size: 10px;
}
.software-skill-inline > i:hover ~ p {
  color: $skillsColor;
}
```

**[⬆ Back to Top](#js)**

## Project.scss

```css
@import "../../_globalColor";

.main {
  width: 80%;
  margin: auto;
  padding: 12px 16px; 
}

.skills-heading {
  line-height: 1.1;
  text-align: center;
}

.card-image {
  max-width: 100%;
  height: auto;
  width: 100%;
}

.card-title {
  color: $titleColor;
  font-size: 22px;
  line-height: 24px;
  font-weight: 700;
  margin: 15px 0 0 0;
}

.card-subtitle {
  color: $cardSubtitle;
  font-size: 17px;
  line-height: 1.5rem;
  margin-bottom: 0.5rem;
}

.project-card {
  display: flex;
  flex-direction: column;
  background-color: $lightBackground2;
  padding: 1.5rem;
  border-radius: 10px;
  border: 1px solid $lightBorder1;
  justify-content: center;
}

.projects-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 1rem 1rem;
  margin-top: 20px;
}

.project-card-dark {
  box-shadow: 0px 10px 30px -15px $darkBoxShadow;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.25s ease;
}

.project-card-light {
  box-shadow: $lightBoxShadowDark 0px 10px 30px -15px;
  -webkit-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.project-card-light:hover {
  box-shadow: $lightBoxShadowDark 0px 20px 30px -10px;
}

.project-card-dark:hover {
  box-shadow: 0px 20px 30px -10px $darkBoxShadow;
}

.project-image {
  position: relative;
  height: 250px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

}

.project-image img {
  transition: transform 1s, filter 2s ease-in-out;
  filter: blur(1.5px);
  transform: scale(1.2);
}

.project-image:hover img {
  filter: blur(0);
  transform: scale(1);
}

.project-detail {
  text-align: center;
}

.project-card-footer span.project-tag {
  background: $buttonColor;
  color: $lightBackground3;
  vertical-align: middle;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  font-size: 0.75rem;
  height: 2em;
  justify-content: center;
  white-space: nowrap;
  line-height: 1.5;
  margin: 0 0.5rem 0 0;
  padding: 0 0.75em;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.5s ease-in-out;
}

.project-card-footer span.project-tag:hover {
  transform: scale(1.1);
}

.project-subtitle {
  text-align: center;
}

@media (max-width: 768px) {
  .project-subtitle {
    font-size: 16px;
  }

  .projects-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }

  .card-subtitle {
    line-height: 1.1rem;
  }

  .project-card {
    padding: 1rem;
  }
}
```

**[⬆ Back to Top](#js)**

## Contact.scss

```scss
@import "../../_globalColor";

.contact-div-main {
  // width: 90%;
  margin: auto;
  display: flex;
  align-items: center;
}

.dark-mode a {
  color: $textColorDark;
}

.contact-div-main > * {
  flex: 1;
}

.contact-title {
  font-size: 65px;
  font-weight: 400;
}

.contact-detail,
.contact-detail-email {
  margin-top: 20px;
  font-size: 40px;
  font-weight: 400;
  color: $subTitle;
  text-decoration: none;
}

.contact-detail:hover,
.contact-detail-email:hover {
  color: $textColor;
  text-shadow: 2px 1px 2px $contactDetailHoverTS;
  transition: all 0.3s;
}

.contact-subtitle {
  text-transform: uppercase;
}

.contact-text-div {
  margin-top: 1.5rem;
}

.contact-margin-top {
  margin-top: 3rem;
}

.contact-image-div > img {
  max-width: 100%;
  height: auto;
  margin-left: 1.5rem;
  margin-top: -4rem;
}

/* Media Query */
@media (max-width: 1380px), (max-width: 768px) {
  .main {
    margin: auto;
    width: 90%;
    display: flex;
    align-items: center;
  }

  .contact-title {
    font-size: 56px;
    font-weight: 400;
    text-align: center;
  }

  .contact-title {
    font-size: 40px;
    text-align: center;
  }

  .contact-subtitle {
    font-size: 16px;
    line-height: normal;
    text-align: center;
  }

  .contact-text-div {
    text-align: center;
    margin-top: 1.5rem;
  }

  .contact-detail,
  .contact-detail-email {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .contact-div-main {
    flex-direction: column;
    margin-top: 10px;
  }
}
```
 