# Jeopardy Sockets

3-4 player multiplayer port of the classic gameshow. Players use their mobile devices to buzz in, and one player plays as Alex Trebek, making clue selections and moderating answers.

This app uses Angular 4 on a node server and the game communication happens through sockets in the connection.service.js file

## Getting Started

To get this running on your machine make sure to npm install in the root as well as in /public for all dependencies.

to run a development server:
```
nodemon server.js
 ```
and to keep your dist folder updated:
```
ng build -w
```

This can only be played with phones if the app is deployed. Otherwise you will have to use multiple browsers.
 
 The main logic is in /public/src/apps and server.js
