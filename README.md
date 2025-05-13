# Live Chat Room

A real-time chat application built with HTML, CSS, and JavaScript, using Firebase as the backend for storing messages.

## 🔧 Technologies Used

- **HTML5 / CSS3 / JavaScript**
- **Firebase Firestore** (for data persistence)
- **Bootstrap 5** (for responsive layout)
- **Date-fns** (for date formatting)

## 🎯 Features

- Choose between multiple chat rooms (`#general`, `#gaming`, `#crocheting`, `#music`)
- Send real-time messages with a custom username
- Responsive UI with light/dark theme toggle
- Relative time feedback ("a few seconds ago", etc.)

## 🚀 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/camilammoreira/chat-room.git
   cd chat-room
   ```

2. Open the `index.html` file in your browser:
   - Double-click the `index.html` file
   - Or use a live server extension in your code editor (e.g., VS Code)

3. **NOTE**: This project uses a Firebase API key embedded in the HTML which may no longer be active.
   - Create your own account at [Firebase](https://firebase.google.com/)
   - Create a project and enable **Firestore Database**
   - Replace the Firebase config block in `index.html` with your own:

```js
var config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_DOMAIN.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  ...
};
firebase.initializeApp(config);
const db = firebase.firestore();
```

## 📁 Project Structure

```
/
├── index.html         # Main HTML file
├── style.css          # Visual styles
├── app.js             # Initializes components and logic
├── chat.js            # Manages chat logic and rooms
├── ui.js              # Manages the chat UI
└── README.md          # This file
```

## 📄 License

This project is intended for educational purposes. Feel free to use and modify it.
