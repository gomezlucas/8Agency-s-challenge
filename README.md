#  8Agency’s technical challenge

 
 [![Javascript](https://img.shields.io/badge/-Javascript-yellow.svg)](https://www.python.org/) [![NodeJs](https://img.shields.io/badge/-NodeJS-brightgreen.svg)](https://www.python.org/) [![NodeJs](https://img.shields.io/badge/-MongoDB-green.svg)](https://www.python.org/)


The site allows to the user to subcribe to a Webinar. The form provided in the web asks for certain information where the Email cant be repeated. The Front End of the App is build with Javascript while the BackEnd is built with NodeJs (express Framework) and MongoDB as a Database(Mongoose Framework)

## Getting Started
Follow these instructions, to get a copy and run on your PC

1- Clone this repository
2- As you can see, there are 2 main folders, one for the Front End (Client) and the another for the BackEnd(Server)

# BackEnd: Run the Server 
3- Inside the Server Folder, you will find the package.json file with dependencies that you need to run the Server. In the command Line of your IDE go to the Server folder and run

   ```
   npm install
   ```


4- You will also need to set a Database. I used Mongo with Mongoose. Learn more about it in https://www.mongodb.com/ After creating the database You will need to change the credentials and changing the name of .env.example to .env. Don´t forget to change code of your database in the index.js folder.

5-  Finally run 
   ```
   npm run start
   ```
and the server will be ready and running at the port 3001


# FrontEnd: 
6- Go to the Client folder in the directory and, as you have done previously, run 
  ```
   npm install
   ```
   to download all the dependencies that the application needs to work properly. 

7- Finally to run the web aplicaciont from the front end side I installed live-server, very easy to use and efficient you just need to type in the command line
  ```
live-server
   ```

8- Web app running! 