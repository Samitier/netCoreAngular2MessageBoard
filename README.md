# Welcome to a .NET Core & Angular2 experiment

This application is just an excuse to test some features I found very interesting about this 2 brand new frameworks. You can find the final result [here](http://samitier.azurewebsites.net/).

## This application consists of:

*   Angular2 app for the client side.
*   .Net Core Web API for the server side.

## Run & Deploy

You have to build both the front-end (client) & the back end (server) of the project. For this we need to install node and ASP.NET Core first.

### Building the client

Head to the client folder with:
`cd client`

To build the client you have to first install the dependencies with:
`npm install`

Then, build the app with:
`webpack`

You can also get a minified version of the app with:
`webpack --minimize`

And watch for changes in development with:
`webpack --watch`

### Building the server
Head to the server folder with:
`cd server`

Download dependencies with:
`dotnet restore`

Make sure you add an appsetings.json with all the environments you need.

Build and run the app with:
`dotnet run`
