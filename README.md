🔥 Firebase File Upload Project
📌 Overview
This project is a simple file upload web application using Firebase Storage. It allows users to select a file, upload it, and track the upload progress with a dynamic progress bar.

📢 Important Note:
This project was originally developed in 2023, but as of 2024, Firebase now requires an upgraded billing plan to use Cloud Storage, which might cause issues if you're on the free Spark Plan. Be aware that without upgrading, uploads may not work.

🛠️ Features
✅ Upload files to Firebase Storage
✅ Display upload progress
✅ Uses Firebase SDK (No backend required)

🚀 Technologies Used
HTML – Structure of the webpage
CSS – Styling for a modern look
JavaScript – Handling file uploads
Firebase – Storing uploaded files



📂 Project Structure
/firebase-file-upload
│── index.html       # Main UI with upload form
│── styles.css       # Styling for UI
│── firebase.js      # Firebase configuration & upload logic
│── README.md        # Project documentation



🔧 Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/yourusername/firebase-file-upload.git
cd firebase-file-upload

2️⃣ Create a Firebase Project
Go to Firebase Console
Create a new project
Enable Firebase Storage
Get your Firebase Config Object (API keys)


3️⃣ Configure Firebase
Open firebase.js and replace with your Firebase config:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};


4️⃣ Run the Project
Simply open index.html in a browser.

🔥 Firebase Storage Rules
To allow file uploads, update Storage Rules in Firebase:
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write;
    }
  }
}
📌 Warning: This makes your storage public. Use authentication for security.

🎯 How It Works?
The user selects a file.
The file is uploaded to Firebase Storage.
A progress bar updates dynamically.
Once uploaded, the file is stored securely.

🤝 Contributing
Want to improve this project? Fork it and submit a pull request!
