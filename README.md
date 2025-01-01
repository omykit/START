

# **ChatApp** - WhatsApp Clone

**ChatApp** is a messaging application that replicates core features of WhatsApp, enabling users from around the world to connect and communicate in real time. The app offers text-based communication, multimedia sharing, and secure messaging with end-to-end encryption. Built with a global user base in mind, **ChatApp** provides a seamless chat experience with support for one-on-one and group chats.

---

## **Key Features**:
- **Real-Time Messaging**: Send and receive instant messages with low latency, including support for text and multimedia messages (images, videos, voice messages).
- **Group Chats**: Create and manage group chats to interact with multiple people at once.
- **End-to-End Encryption**: Secure messaging with encryption to protect user privacy.
- **User Profiles**: Users can set their profiles with a display name and photo.
- **Online Status**: View the status of contacts (Online/Offline) and the last seen time.
- **Push Notifications**: Receive instant push notifications for new messages even when the app is not in the foreground.
- **Global User Host**: Users from all over the world can connect via the app's server, providing a truly global communication experience.

---

## **Tech Stack**:
- **Frontend**: React.js (or React Native for mobile apps), HTML, CSS, JavaScript  
- **Backend**: Node.js with **Express.js**  
- **Database**: MongoDB (for storing user data, chat history, etc.)  
- **Real-Time Communication**: **Socket.io** for real-time chat and notifications  
- **Authentication**: JWT (JSON Web Tokens) for secure authentication  
- **Push Notifications**: Firebase Cloud Messaging (FCM) for real-time notifications  
- **Encryption**: AES (Advanced Encryption Standard) for end-to-end encryption  
- **Deployment**: Deployed on Heroku or AWS (for cloud hosting)  

---

## **Installation & Setup**:

### Prerequisites:
- Node.js and npm installed  
- MongoDB set up locally or on a cloud service (MongoDB Atlas)
- Firebase account for push notifications

### Steps to run locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/chatapp.git
   ```
   
2. **Navigate to the project folder**:
   ```bash
   cd chatapp
   ```

3. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

4. **Install frontend dependencies**:
   ```bash
   cd frontend
   npm install
   ```

5. **Set up environment variables**:
   Create a `.env` file in both the backend and frontend folders with the necessary configurations (MongoDB URI, Firebase API key, JWT secret, etc.):

   ```env
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   FIREBASE_API_KEY=your_firebase_api_key
   ```

6. **Start the backend server**:
   ```bash
   cd backend
   npm start
   ```

7. **Start the frontend server**:
   ```bash
   cd frontend
   npm start
   ```

8. **Access the app**:
   Open your browser and go to `http://localhost:3000` to use the app.

---

## **Features to be Added**:
- **Voice & Video Calls**: Enable voice and video calling functionality to replicate full WhatsApp features.
- **User Privacy Settings**: Allow users to customize their privacy settings, such as hiding their "last seen" or profile photo from certain contacts.
- **Custom Stickers and GIFs**: Implement sticker packs and GIF support for richer communication.
- **Data Backup**: Allow users to backup chat history to cloud storage for later restoration.

---

## **GitHub Repository**:
[ChatApp - GitHub](https://github.com/yourusername/chatapp)

---

### **Prototype Note**:
This application is in its prototype stage, focusing primarily on real-time chat and user authentication. Future versions will integrate additional features like multimedia sharing, voice/video calls, and better privacy control. The app is designed to support a global user base and facilitate easy communication between users worldwide.

