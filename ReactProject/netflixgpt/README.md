# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### Created the react app using CRA

created react app form cli, to get all the things beforehand, comprising of webpack i.e., bundlr and babel as a transpiler, and other things like RTL/jest etc.

# Features

-Login/Sign up
-Sign In/ Sign Up form
-redirect to browser page
-Browse (after authentication)
-Header
-Main Movie
-Trailer running in background
-title & description
-Movie Suggestion
-MovieList \* n
-NetflixGPT
-Search Bar
-Movie Suggestion

# Notes:

- i am using sign in form as sign up form, by adding a toggle option, which will use a state variable to toggle for sign in and sign up form to show for user.

# form-validation:

for form validation i am going to use useRef() hook, i will put the validation function in a separate function as its an utility function.

# form-authentication

we are using Google Firebase for user authentication. Its a backend tool, we can use nodeJS also

# deployed to production

we deployed our app to production using firebase.

# Store

we are using redux toolkit for storing data.

# TMDB API

we will be using TMDB API for movies, we are not using netflix API as its not public (we'll need authentication) and it changes often so we'll be using TMBD instead as it doesn't change often.

# Notes:

-we have used unsubscribe method to clean up our onAuthStateChanged after component unmounts.
-we have directed our user if logged in from login page to browse page and if he's not logged in and he tries to access browse page then he navigates to login page.
-add all the hardcoded string values into a constant files.
-we can see that our API calls are made twice and some more things are happening twice, because of React strictMode. React StrictMode checks for any inconsistency by doing multiplte renders. If we remove it, it will do everything for once, but if we keep it also it will do multiple renders only for my local, when we push it for development it will not do there.
-In fetch we have to manually parse data as JSON but in axios we don't have to parse data as json, as it takes from contentType.
