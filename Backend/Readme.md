# Matchmaker Project

## Overview
Matchmaker is a full-stack web application built to match users based on their shared interests. The project consists of two main parts:

- **Backend**: A Node.js application using Express and CORS to manage user data and find matches.
- **Client**: A React application built with Vite and Tailwind CSS that provides a user-friendly interface to enter profile details and view matches.

## Package Names & Methods

### Backend
- **Packages Used**
  - [express](https://expressjs.com/)
  - [cors](https://www.npmjs.com/package/cors)
- **Methods Used**
  - `addUser`: Accepts user data (name, age, interests) and stores it if the user does not already exist.
  - `findMatch`: Retrieves users that share at least two interests with the current user.
- **Key Files**
  - [index.js](Backend/index.js)
  - [src/controllers/user.controller.js](Backend/src/controllers/user.controller.js)
  - [src/models/user.model.js](Backend/src/models/user.model.js)
  - [src/routers/user.routes.js](Backend/src/routers/user.routes.js)

### Client
- **Packages Used**
  - [react](https://reactjs.org/)
  - [react-dom](https://reactjs.org/docs/react-dom.html)
  - [react-router-dom](https://reactrouter.com/)
  - [axios](https://axios-http.com/)
  - [vite](https://vitejs.dev/)
  - [tailwindcss](https://tailwindcss.com/)
- **Methods Used**
  - `handleForm` in [ProfileForm.jsx](client/src/components/ProfileForm.jsx): Submits the form to add a user and fetches matching profiles.
  - `handleChange` in [ProfileForm.jsx](client/src/components/ProfileForm.jsx): Updates state with user form data.
- **Key Files**
  - [src/App.jsx](client/src/App.jsx)
  - [src/components/ProfileForm.jsx](client/src/components/ProfileForm.jsx)
  - [src/components/MatchLists.jsx](client/src/components/MatchLists.jsx)

## API Endpoints

### POST /api/addUser
- **Description**: Accepts a new user profile to be added.
- **Expected Request Body**:
  ```json
  {
    "name": "User's name",
    "age": "User's age as a number",
    "interests": ["interest1", "interest2", ...]
  }
  ```
- **Response**:
  - `201`: User added successfully.
  - `400`: Invalid input.
  - `409`: Username already exists.

### GET /api/matches/:userName
- **Description**: Retrieves a list of users that share at least two interests with the provided `userName`.
- **URL Parameter**:
  - `userName`: Name of the user whose matches are to be found.
- **Response**:
  - `200`: Array of matched user objects.
  - `404`: No user found.

## Running the Project

### Backend
1. Navigate to the `Backend` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the server:
    ```sh
    npm start
    ```
   The backend server will listen on port `5000`.

### Client
1. Navigate to the `client` directory.
2. Install dependencies:
    ```sh
    npm install
    ```
3. Start the development server:
    ```sh
    npm run dev
    ```
   The client will run on the default port provided by Vite (usually port `3000` or `5173`).

## Description
The Matchmaker project allows users to create a profile with their name, age, and interests. When submitted, the user's data is stored on the backend. Then the application searches for other users with at least two matching interests. Returned matches are displayed in the client UI. This simple pairing mechanism can be extended for further personalized matching or used as a foundation for social or dating applications.
