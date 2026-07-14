# 🌍 Wanderlust Web Project Installation Guide

Welcome! 🚀 This guide will help you set up the **Wanderlust** web project on your local machine.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

* 🟢 Node.js (v18 recommended)
* 🍃 MongoDB
* ⚡ Nodemon (installed globally)

---

## 🚀 Installation Steps

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/pritu-dev/wanderlust
```

---

### 2️⃣ Configure the Database

Create a `.env` file in the project's root directory and add:

```env
ATLASDB_URL=your_mongodb_atlas_connection_string
```

---

### 3️⃣ Set Up Cloudinary ☁️

* 🌐 Create a free account on **Cloudinary**.
* 🔑 Copy your **Cloud Name**, **API Key**, and **API Secret**.
* ✍️ Add them to your `.env` file:

```env
CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret
```

---

### 4️⃣ Add the Secret Key 🔒

Add the following to your `.env` file:

```env
SECRET=your_secret_key
```

Use a strong and secure secret key for better security. 🛡️

---

### 5️⃣ Install Dependencies 📦

```bash
npm install
```

---

### 6️⃣ Run the Application ▶️

```bash
nodemon app.js
```

---

### 7️⃣ Open the Project 🌐

Once the server starts successfully, open your browser and visit:

```
http://localhost:8080
```

🎉 Your **Wanderlust** application is now running locally!

---

## 💡 Need Help?

If you encounter any issues during installation, feel free to connect with me on LinkedIn. I will help you! 😊
Connect on Linedin : https://www.linkedin.com/in/priti-joshi1

