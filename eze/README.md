# Eze Frontend

## Project Overview

Eze is a simple fullstack challenge to screen prospective developers that will come onboard the Eze Development Team.
See the deployed product at

[eazechallenge.herokuapp.com](https://eazechallenge.herokuapp.com).

# Sole Contributor

Oladimeji Ojo

# Table of Contents

## How to run this application

To run this project, you'll need to have Node installed on your machine. It accepts the usual scripts for a [create-react-app](https://github.com/facebook/create-react-app). You'll also need to create an environment variable for the server URL, see below for how to do this.

```
git clone https://github.com/ojokure/ezefrontend.git
cd eze
npm i
npm start // starts the app on port :3000

"API_URL='https://eaze.herokuapp.com/?page=1&limit=20'" >

```

Other scripts:

```
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
```

## Tech-Stack

This project was bootstrapped with Create-React-App and its UI was built primarily with React, with Axios for API calls, For styling I used CSS-in-JS, primarily styled-components but with some help with Antd Design. Deployed with Heroku.

## Backend

For information on the backend of the app, please see [here](https://github.com/ojokure/ezebackend.git).

## Directory structure

src
├───components
│ ├───DeviceCard
│ ├───Devices
│ ├───Footer
│ ├───Header
│ ├───ImageArray
│ ├───LoadMore
│ ├───Sidebar
│ ├───Spinner
│
│
├───Hooks
│ ├───UseStateFetch
├───Img
├───Tests
│ ├───devices.test
├───Utils
├───devices

## Coding Style

I made use of the [AirBNB Javascript style guide](https://github.com/airbnb/javascript). Its rules are enforced by ESLint, so you can ensure the code is consistent with the style by checking the console for ESLint warnings.
