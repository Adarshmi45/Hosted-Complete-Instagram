# Instagram Clone

This is an Instagram clone project built using React for the frontend and Node.js with Express.js for the backend. The project aims to replicate some of the core features of Instagram, such as user authentication, posting images, liking posts, commenting on posts, and following other users. This README provides an overview of both the frontend and backend, along with instructions for setting up and running the application.

## Backend

The backend code is responsible for handling data storage, authentication, and API endpoints. It is built using Node.js, Express.js, and MongoDB as the database. Below are the steps to set up and run the backend server:

### Installation

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the backend directory: `cd backend`
3. Install the dependencies: `npm install`

### Configuration

1. Create a `keys.js` file in the root directory.
2. Inside `keys.js`, define the following key-value pairs:
   - `mongourl`: MongoDB connection URL
   - `Jwt_secret`: Secret key for JSON Web Token (JWT) authentication

### Starting the Server

Run the following command to start the server:

```
npm start
```

The server will run on `http://localhost:5000`.

## Frontend

The frontend code is responsible for the user interface and interaction with the backend API. It is built using React.js and communicates with the backend endpoints to fetch and update data. Below are the steps to set up and run the frontend application:

### Installation

1. Navigate to the frontend directory: `cd frontend`
2. Install the dependencies: `npm install`

### Starting the Application

Run the following command to start the application:

```
npm start
```

The application will run on `http://localhost:3000`.

## Features

The Instagram clone project includes the following features:

- User registration and login
- User authentication using JSON Web Tokens (JWT)
- Posting images with captions
- Liking and unliking posts
- Adding and deleting comments on posts
- Following and unfollowing other users
- Viewing user profiles and their posts
- Real-time updates for likes and comments

Please note that the full functionality of the application requires both the backend and frontend to be set up and running simultaneously.

## Contributing

Contributions to this project are welcome. If you find any issues or have suggestions for improvements, please create a pull request or open an issue in the repository.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Thank you for checking out this Instagram clone project! If you have any questions or need further assistance, please feel free to reach out to the project maintainers.