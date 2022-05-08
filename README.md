## Blogzy

#### A single platform for all your daily dose of blogs

#### Problem Statement:

These days people are very excited to know what’s going on in the present world and what is the latest trending news. Every person spends most of their day spending time on social media, browsing for the latest news etc. We are trying to make an effort to simplify the problem of browsing the news from various sources like the internet, newspaper, TV channel. We are planning to build an application using reactjs which is an open source library, in which the user can view different journals of blogs about sports, crimes, Business pages, International trending topics etc.

#### Uniqueness in the Our Project :

We implemented the normal login page for the user to access the blogs in the application as an initial update on the project. After brainstorming a few things we proposed a new authentication to the user, which provides an user friendly interface for the user to login to our application. We could successfully implement it with the help of google services, We extracted the source code from the google resources and Implemented the authentication of the user.

To obtain the latest and accurate information about the news and blogs we took the help of Gnews API, we could successfully project the news feeds extracted from the Gnews on the front-end of the page by integrating the API with the react Application which provides the user an easy to search for the news feeds all round the world.

As a latest update we even included the database which will track which blogs are accessed by the users, which type of blogs are most viewed and we even created a schema to track the user details such as google ID, mail Id, user login details etc. It helps to identify which blogs are trending all over the world and we could even implement a recommendation system which recommends the user based on his interests and also based on the trending news feeds in the internet as an upcoming update in the future.

We preferred Reactjs over the other technologies because reactjs is an open source library, which helps us to build single page applications which is more user friendly now a days, and in react the application working is very efficient because in this application which were built using react will not load the whole applications whenever it’s an event is triggered with the efficient feature provided by the react called react DOM, which helps the web application to run efficiently.

We made the front end of the application using reactjs, and the basic construct of the front end design of the application is achieved with the help of HTML and CSS and the styling of the react is also achieved with the help of CSS and other frameworks such as Material UI to beautify the application.

To make the application to display the latest news on the front-end, we used gnews API which is already a working source and we could integrate the Gnew API to the react application using the tokenization method and axios concepts in react are used to retrieve the data that is fetched from the gnews API and we projected it on the front end of the application.

To track each and every activity of the user activity and the user login, we introduced a database i.e mongoDB from which we created two schemas which are user and the card, card stores the information about the blogs details and and the contents in the blog and the object. The user schema is created to track the user activity and the user details.

<hr>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white)
![Google Cloud](https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
[![Visits Badge](https://badges.pufler.dev/visits/sahilsarin390/Blogzy)](https://badges.pufler.dev)

API Used for Articles - https://gnews.io/

<hr>

### Home Page-
![image](https://raw.githubusercontent.com/sahilsarin390/Blogzy/master/client/public/home.png)

<hr>

### Main Page-
#### Light Mode:
![image](https://raw.githubusercontent.com/sahilsarin390/Blogzy/master/client/public/blog.png)
#### Dark Mode:
![image](https://raw.githubusercontent.com/sahilsarin390/Blogzy/master/client/public/dark.png)

<hr>

### Upcoming Targets:
🔹Improve UI Design.
🔹Improve responsiveness.
🔹Add filter option.
🔹Add pagination.
🔹Feature to create your own blogs.

<hr>

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
