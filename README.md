# Said Hi — AI-Powered Real-Time Chat Application

<p align="center">
  <img 
    src="https://res.cloudinary.com/ddivlvrkv/image/upload/r_100/v1795674408/said_hi_logo_rjr2h1.png" 
    alt="Said Hi Logo" 
    width="250" 
  />
</p>

<p align="center">
  A modern, AI-powered messaging platform designed to make conversations smarter, faster, and more interactive.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white" />
  <img src="https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white" />
  <img src="https://img.shields.io/badge/Socket.IO-010101?style=for-the-badge&logo=socket.io&logoColor=white" />
  <img src="https://img.shields.io/badge/Google_Gemini-8E75B2?style=for-the-badge&logo=google&logoColor=white" />
</p>

---

## 🌐 Overview

**Said Hi** is a full-stack, AI-powered messaging application built to provide a seamless real-time communication experience.

Unlike conventional messaging applications, Said Hi combines real-time communication with AI-assisted messaging, allowing users to communicate more efficiently through intelligent text predictions and contextual smart replies.

Built using React, Node.js, Express, MySQL, and Socket.IO, the application provides a scalable architecture for direct messaging, group conversations, media sharing, and real-time user interactions.

The platform also incorporates automated message archiving to maintain database efficiency while preserving historical conversations.

**Live Demo:** [Visit Said Hi](https://said-hi-ai-powered-group-chat.vercel.app/)

---

## ✨ Features

### ⚡ Real-Time Messaging
- Instant message delivery using Socket.IO.
- Dedicated personal and conversation-based socket rooms.
- Real-time message broadcasting without page refreshes.
- Live typing indicators.
- Online/offline presence tracking.
- Multi-tab user presence management.
- Message delivery and read receipts.

### 🤖 AI-Powered Messaging
- Google Gemini integration for intelligent messaging assistance.
- AI-powered text autocomplete and predictive suggestions.
- Context-aware smart replies based on conversation history.
- Quick reply selection for faster communication.
- Keyboard-assisted suggestion completion.

### 👥 Direct & Group Conversations
- One-to-one private conversations.
- Create and manage group conversations.
- Add and remove group members.
- Admin and member role management.
- Update group names and profile images.
- Discover users and initiate new conversations.

### 📎 Media & File Sharing
- Share images and videos.
- Upload and share documents.
- Support for PDF, Word, ZIP, and other supported file formats.
- Cloudinary integration for media storage.
- Image and video previews within conversations.
- Downloadable document attachments.

### 🔐 Authentication & Account Security
- JWT-based authentication.
- Secure password hashing using bcrypt.
- Login using email or phone number.
- Forgot password functionality.
- Single-use password reset tokens.
- Email-based password recovery using Brevo.

### 🗄️ Automated Message Archiving
- Scheduled background archiving using Node-Cron.
- Automatically archive messages older than 24 hours.
- Archive associated message attachments.
- Transaction-based database operations.
- Preserve historical conversations while keeping active tables optimized.

---

## 🛠️ Technology Stack

| Category | Technologies |
|---|---|
| Frontend | React 19, Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| State Management | React Context API |
| Backend | Node.js, Express.js |
| Real-Time Communication | Socket.IO |
| Database | MySQL |
| ORM | Sequelize |
| Authentication | JWT, bcrypt |
| Validation | Zod |
| AI Integration | Google Gemini |
| Media Storage | Cloudinary |
| Email Service | Brevo |
| Background Jobs | Node-Cron |
| Deployment | Vercel, Render |

---

## 🏗️ Application Architecture

Said Hi follows a modular full-stack architecture that separates frontend responsibilities, backend business logic, real-time communication, and external service integrations.

### Backend Architecture

```text
                 React Frontend
                       |
             HTTP Requests / Socket.IO
                       |
                Express Server
                       |
          +------------+------------+
          |                         |
     REST API Layer           Socket.IO Layer
          |                         |
     Controllers              Socket Handlers
          |                         |
          +------------+------------+
                       |
                Service Layer
                       |
          +------------+------------+
          |            |            |
       Gemini       Cloudinary     Brevo
          |            |            |
          +------------+------------+
                       |
                  Sequelize ORM
                       |
                   MySQL DB
```

### Real-Time Communication

Socket.IO handles real-time communication between connected clients.

The application uses dedicated socket rooms for personal notifications and conversation-based messaging.

Key real-time operations include:

- Message broadcasting.
- Typing and stop-typing events.
- Online user tracking.
- Delivery notifications.
- Read receipt updates.
- Real-time conversation updates.

### Database Design

The application uses Sequelize ORM with MySQL for relational data management.

Core database models include:

| Model | Responsibility |
|---|---|
| User | Stores user accounts and profile information. |
| Conversation | Represents direct and group conversations. |
| ConversationMember | Manages conversation membership and roles. |
| Message | Stores conversation messages. |
| Attachment | Stores message attachment metadata. |
| MessageReceipt | Tracks message delivery and read status. |
| ArchivedMessage | Stores archived messages. |
| ArchivedAttachment | Stores archived attachment metadata. |

---

## 📸 Screenshots

Screenshots showcasing the application's interface and functionality will be added here.

### Landing Page

<p align="center">
  <img width="1424" height="783" alt="said hi landingpage" src="https://github.com/user-attachments/assets/20efb8bd-beec-4f1d-98a9-3bee79f05334" />
</p>

### Authentication
<p align="center">
    <img width="1440" height="785" alt="authentication page" src="https://github.com/user-attachments/assets/fcfd49b6-be31-4c6e-ba1c-9a055de1f446" />

</p>

### Real-Time Chat Interface

<p align="center">
   <img width="1424" height="784" alt="chat interface" src="https://github.com/user-attachments/assets/be980ebd-674e-4e12-9060-d4dcb6d900b3" />

</p>

### AI-Powered Messaging

<p align="center">
  <img width="959" height="134" alt="ai suggestions" src="https://github.com/user-attachments/assets/d49d3fd0-7ef4-41cf-a40a-71aaa72eb501" />

</p>

### Group Conversations

<p align="center">
  <img width="1436" height="783" alt="group chat ui" src="https://github.com/user-attachments/assets/90eaa714-b2f2-4f16-aee8-4607dee6457e" />

</p>

### Group Management

<p align="center">
  <img width="1394" height="765" alt="group chat settings" src="https://github.com/user-attachments/assets/23900f12-2847-44c1-bf57-9c54bb2a9325" />

</p>

---

## 🚀 Getting Started

Follow these instructions to run Said Hi locally.

### Prerequisites

Make sure you have the following installed:

- Node.js
- npm
- MySQL
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/chaitanyamore003/said-hi-ai-chat-app.git

cd said-hi-ai-chat-app
```

### 2. Backend Setup

Navigate to the backend directory:

```bash
cd backend
npm install
```

Create a `.env` file inside the backend directory.

**Backend Environment Variables**

```env
PORT=5000
NODE_ENV=development

# Database Configuration
DB_NAME=your_database_name
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_HOST=localhost
DB_PORT=3306

# Authentication
JWT_SECRET=your_jwt_secret

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Google Gemini
GEMINI_API_KEY=your_gemini_api_key

# Brevo Email Service
BREVO_API_KEY=your_brevo_api_key
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open another terminal and navigate to the frontend directory:

```bash
cd frontend
npm install
```

Create a `.env` file inside the frontend directory.

**Frontend Environment Variables**

```env
VITE_API_URL=http://localhost:5000/api

VITE_CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name

VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```

Start the frontend development server:

```bash
npm run dev
```

### 4. Access the Application

Once both servers are running, open:

```text
http://localhost:5173
```

The application should now be accessible locally.

---

## ☁️ Deployment

The application uses the following deployment architecture:

| Component | Platform |
|---|---|
| Frontend | Vercel |
| Backend | Render |
| Database | MySQL |
| Media Storage | Cloudinary |
| AI Services | Google Gemini |
| Email Services | Brevo |

### Deployment Considerations

- Configure all required environment variables in the respective deployment dashboards.
- Configure frontend API URLs to point to the deployed backend.
- Configure CORS to allow requests from the deployed frontend.
- Configure Socket.IO to support the deployed frontend origin.
- Ensure the Cloudinary upload preset supports the required file types.
- Never commit `.env` files or expose secret API credentials.

---

## 🔮 Future Enhancements

Potential improvements for future versions include:

- Voice and video calling.
- Message editing and deletion.
- Message reactions and replies.
- Advanced conversation search.
- Push notifications.
- Enhanced AI conversation assistance.
- End-to-end encryption.
- Improved mobile experience.

---

## 👨‍💻 Author

**Chaitanya More**

Full-Stack Developer

- **GitHub:** [@chaitanyamore003](https://github.com/chaitanyamore003)
- **LinkedIn:** [Chaitanya More](https://www.linkedin.com/in/chaitanya-more-472203244/)

---

## 📄 License

This project is licensed under the MIT License.

Created for educational and portfolio purposes.

---

<p align="center">
  <b>Made with ❤️ by Chaitanya More</b>
  <br />
  <i>Said Hi — Making Every Conversation Smarter.</i>
</p>
