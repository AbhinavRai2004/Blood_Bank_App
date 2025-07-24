# MERN Stack Blood Bank Project

## Introduction

The MERN Stack Blood Bank Project is a web application that leverages MongoDB, Express.js, React.js, and Node.js to facilitate blood donation and management. It includes features such as donor registration, blood requests, inventory management, user authentication, and search functionality. The project aims to provide a seamless user experience and efficient blood inventory management for blood banks and donors.

## Features

- **Donor Registration:** Form for donors to input personal details and medical history, with data validation and storage in MongoDB.
- **Blood Requests:** Interface for hospitals or individuals to request blood, with real-time tracking and notifications.
- **Inventory Management:** Dashboard for managing available blood units, tracking blood types and expiration dates.
- **User Authentication:** Secure login and registration system, role-based access control using JWT.
- **Search Functionality:** Search bar for finding blood types and donor locations, with filter options and optimized queries.

## Tech Stack

- **Frontend:** React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)

## Installation

1. Clone the repository:
    ```sh
    https://github.com/AbhinavRai2004/Blood_Bank_App.git
    ```

2. Navigate to the project directory:
    ```sh
    cd Blood_Bank_App
    ```

3. Install backend dependencies:
    ```sh
    npm install
    ```

4. Install frontend dependencies:
    ```sh
    cd client
    npm install
    ```

## Configuration

1. Create a `.env` file in the `root` directory and add the following environment variables:
    ```env
    PORT = 8080
    DEV_MADE = development
    MONGO_URI = your_mongodb_connection_string
    JWT_SECRET = your_jwt_secret
    ```

2. Create a `.env` file in the `client` directory and add the following environment variables if needed:
    ```env
    REACT_APP_BASEURL = your_backend_baseurl
    ```

## Running the Application

1. Start the backend server:
    ```sh
    npm start
    ```

2. Start the frontend development server:
    ```sh
    cd client
    npm start
    ```

3. Open your browser and navigate to `http://localhost:8080`.

## Project Structure

```plaintext
Blood_Bank_App/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── routes/
│   ├── client/
│   ├── .env
│   ├── server.js
│   └── package.json

├── client/
│   ├── public/
│   ├── src/
│   ├── .env
│   ├── package.json
│   └── README.md
│
└── README.md
