# 🌍 World Capitals Quiz App

A simple quiz application that asks users questions about **countries and their capitals**.

The app is built using **Node.js**, **Express**, and **PostgreSQL**.  
Questions are fetched from a database and shown dynamically on the web page using **EJS**.

---

## ✨ Features
- Random country–capital questions  
- Score tracking  
- PostgreSQL database integration  
- Dynamic pages with EJS  
- Secure environment variable setup  

---

## 🛠 Tech Stack
- **Backend:** Node.js, Express  
- **Database:** PostgreSQL  
- **Template Engine:** EJS  
- **Tools:** dotenv, pg  

---

## 📁 Project Structure
worldCapital/
│
├── index.js
├── db.js
├── package.json
├── .env.example
├── views/
│ └── index.ejs
├── public/
│ └── css / js / images

yaml
Copy code

---

## ⚙️ How to Run the Project

1. Clone the repository
   ```bash
   git clone <repository-url>
2. nstall dependencies

bash
Copy code
npm install
3. Create a .env file using .env.example

env
Copy code
DB_USER=
DB_HOST=
DB_NAME=
DB_PASSWORD=
DB_PORT=
4. Add your PostgreSQL database details

5.  Start the server

bash
Copy code
node index.js
Open your browser and visit
http://localhost:3000