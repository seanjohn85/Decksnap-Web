# Decksnap card Game based on Top Trumps build using Node, Express and Socket.io

The following application is a real time web based card game with a similar concept to Top Trumps playing cards. The application allows a user to log in (a username can only be used by one user, this is handled by the server app) and challenge other users logged in to a card game. When a user excepts a challenge a game object will be created on the server side and the game will start on both client web browsers. The game will allocate 15 cards to each user and each user will have consecutive turns to pick an attribute on their card with the corresponding value on the other client's card. All of this logic happens on the server side. To put the game in its simplest form the client and server send text data to each other and events are triggered on the based of the data.



## Starting the server application (Mac based instructions)

If you haven't already install Node on your machine.

Navigate to the project directory using the terminal.

Before started the server application please ensure to use NPM to download and install any library dependencies before starting the server application. This can be done using the NPM in the terminal.

The server app that needs to run is server.js. 

This can be run by simply typing node server into the terminal on the project directory.

The server will start and log Listening on *3000 to indicate the port no of the server app.

### Running on the client device

Once the server is running, open a web browser and type localhost:3000. This will connect to the Node server application and the server will serve the index.html web page. When the page loads you are good to go and the client and server setup is successful. Repeat this process to open multiple clients as the game needs more than one user.

If you navigate back to your terminal you will see a message indicating a new client has connected.


#### Using the application
1. log in
2. click any user to challenge the user to a game 
3. play the game and enjoy 😀
