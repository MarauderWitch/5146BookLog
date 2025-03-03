# **📚 Book Log**
*A simple book tracking app built with Vanilla JavaScript and Firebase.*

![GitHub repo size](https://img.shields.io/github/repo-size/MarauderWitch/5146BookLog)
![GitHub last commit](https://img.shields.io/github/last-commit/MarauderWitch/5146BookLog)
![GitHub license](https://img.shields.io/github/license/MarauderWitch/5146BookLog)

## **🚀 Live Demo**
[Click here to view the app](https://MarauderWitch.github.io/5146BookLog/) 🎉

---

## **📚 About the Project**
Book Log is a **lightweight web application** that allows users to:
- ✅ **Track books they've read**
- ✅ **Rate books and organize them by genre or author**
- ✅ **Persist data using Firebase**
- ✅ **Authenticate using Google Sign-In**
- ✅ **Enjoy a responsive and accessible UI (WCAG-compliant)**

This project is developed using **Vanilla JavaScript, Firebase, HTML, and CSS**, and it is **deployed via GitHub Pages**.

---

## **📂 Project Structure**
```
Book Log/
│── index.html            # Main HTML file
│── styles.css            # Styling (responsive + accessible)
│── script.js             # Main JS logic (CRUD operations)
│── firebaseConfig.js     # Firebase authentication & database
│── assets/               # Images, icons, and other assets
│── .github/workflows/    # GitHub Actions for deployment
│── database.rules.json   # Firebase security rules
│── package.json          # Dependencies & scripts
│── README.md             # This file
```

---

## **🛠️ Features**
✔ **Add, edit, delete books**  
✔ **Persistent storage with Firebase**  
✔ **Google authentication (login/logout)**  
✔ **Fully responsive & WCAG-compliant**  
✔ **Deployed on GitHub Pages**  
✔ **Secure Firebase rules to protect user data**  

---

## **📜 How to Install and Run Locally**
### **1⃣ Clone the repository**
```sh
git clone https://github.com/MarauderWitch/5146BookLog.git
cd 5146BookLog
```

### **2⃣ Install dependencies**
```sh
npm install
```

### **3⃣ Run the development server**
```sh
npm run start
```
*(This will launch the app using `live-server`.)*

### **4⃣ Deploy to GitHub Pages (optional)**
```sh
npm run deploy
```

---

## **🔥 Firebase Setup**
To run Firebase locally, follow these steps:

1. Create a **Firebase project** at [Firebase Console](https://console.firebase.google.com/).
2. Enable **Realtime Database** and **Google Authentication**.
3. Copy your **Firebase Config** into `firebaseConfig.js`:
   ```js
   const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_PROJECT.firebaseapp.com",
       databaseURL: "https://YOUR_PROJECT.firebaseio.com",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_PROJECT.appspot.com",
       messagingSenderId: "YOUR_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   firebase.initializeApp(firebaseConfig);
   ```
4. Deploy Firebase rules using:
   ```sh
   npm run firebase
   ```

---

## **🌐 Deployment on GitHub Pages**
This project is automatically deployed using **GitHub Actions**. To deploy manually, run:
```sh
npm run deploy
```
Then visit:  
🔗 **https://MarauderWitch.github.io/5146BookLog/**

---

## **🔧 Technologies Used**
- **HTML5** – Semantic structure  
- **CSS3** – Responsive & accessible styling  
- **JavaScript (ES6+)** – Core functionality  
- **Firebase** – Database & Authentication  
- **GitHub Actions** – CI/CD Pipeline  
- **GitHub Pages** – Hosting  

---

## **📝 License**
This project is licensed under the **MIT License**.

---

## **🤝 Contributing**
Want to improve the app? Feel free to fork and submit a pull request!

1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes and commit (`git commit -m "Add new feature"`)
4. Push to your fork (`git push origin feature-branch`)
5. Open a pull request

---

## **👩‍💻 Questions?**
If you have any questions or suggestions, feel free to contact me on GitHub! 😊  

---