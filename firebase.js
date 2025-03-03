// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getStorage , ref, uploadBytesResumable } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-storage.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "your api",
  authDomain: "cloud-5b300.firebaseapp.com",
  projectId: "cloud-5b300",
  storageBucket: "cloud-5b300.appspot.com",
  messagingSenderId: "812170353102",
  appId: "1:812170353102:web:21aad0ab5abb67f4e3739f",
  measurementId: "G-7CFRRFW1XN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

function Upload_file(){
  const fileInput = document.querySelector('#file');
  const file = fileInput.files[0];  // Corrected from .file[0] to .files[0]

  if(file){
    const storageRef = ref(storage, "uploads/" + file.name);
    const uploadTask = uploadBytesResumable(storageRef, file);
    const Progressbar = document.querySelector('.prgress_bar');

    uploadTask.on('state_changed', (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log("Upload " + progress + "% done");
      Progressbar.textContent = `Upload is ${progress}% done`;  // Update progress bar
    });
  } else {
    console.log("No file selected");
  }
}

const upload_btn = document.querySelector('#upload');
upload_btn.addEventListener('click', Upload_file);
