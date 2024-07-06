# 🌍 Places - Backend

Welcome to the Places backend repository. This project is a travel website backend built with Express and Node.js that handles user authentication, photo uploads, and CRUD operations for places.

## ✨ Features

- **User Authentication**: Secure authentication using JWT tokens.
- **CRUD Operations**: Handles creating, reading, updating, and deleting places.
- **Image Upload**: Supports image upload using file-picker local storage with comprehensive error handling on both the server and client sides.
- **Geolocation**: Integrates with Google Maps Geolocation API to convert manually written addresses to coordinates.

## 🛠 Technologies Used

- 🚀 Express
- 🌐 Node.js
- 🗄 MongoDB
- 🔐 JWT for authentication
- 📍 Google Maps Geolocation API

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later)
- [MongoDB](https://www.mongodb.com/) (version 4.x or later)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/RayLikesAnime/Places_Backend.git
   cd Places_Backend
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Set up Environment Variables**
   ```bash
   MONGODB_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
4. **Run the Development Server**
   ```bash
   npm start
   ```

## 🌐Live Demo
Check out the live demo of the project https://places-d2w7.onrender.com/

## 🤝 Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or new features.

## 📜 License
This project is licensed under the MIT License.
