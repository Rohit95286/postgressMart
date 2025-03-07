

# 🌟✨ PGCommerce – PostgreSQL eCommerce Project

## 🌍💡 What’s This?
Welcome to the **coolest** 🕶️ **E-Commerce API** out there!  
This backend powers **users** 🧑‍💻, **products** 🏷️, **carts** 🛒, and **orders** 📦 like a **champ** 🏆!  

### 🛠️💥 Tech Stack
🔹 **Node.js** (Backend superhero 🦸‍♂️)  
🔹 **Express.js** (Our ultra-fast highway 🚀)  
🔹 **PostgreSQL** (Data powerhouse 🐘)  
🔹 **Sequelize** (Database wizard 🧙‍♂️)  
🔹 **JWT** (Security ninja 🔐)  
🔹 **Bcrypt** (Passwords on steroids 💪)  

---

## 🔥💨 Features  
✅ **User Authentication** (Signup/Login like a boss 🔑)  
🛍️ **Product Management** (CRUD magic 📝)  
🛒 **Cart System** (Shop till you drop! 🛍️)  
📦 **Order Processing** (Click, Confirm, Done! 📜)  

---

## 🏗️⚙️ Setup in 6 Easy Steps!  

1️⃣ **Clone this masterpiece:**  
   ```sh
   git clone https://github.com/your-repo-name.git
   ```
2️⃣ **Go inside:**  
   ```sh
   cd e-commerce-api
   ```
3️⃣ **Install the magic potions:**  
   ```sh
   npm install
   ```
4️⃣ **Set up the PostgreSQL database & .env file 📝**  

5️⃣**Start the API engine:**  
   ```sh
   npm start
   ```

---

## 📡💥 API Endpoints (Ready to Fire! 🚀)  

### 👤 **User Routes**  
🆕 `POST /api/auth/register` – New users, join the club! 🎉  
🔑 `POST /api/auth/login` – Access granted! 🔐  

### 🏷️ **Product Routes**  
➕ `POST /api/products` – Add new product (Admin only) 🛍️  
📜 `GET /api/products` – Browse all products 🧐  
🔎 `GET /api/products/:id` – View product details 🏷️  
✏️ `PUT /api/products/:id` – Update a product (Admin only) 🔄  
🗑️ `DELETE /api/products/:id` – Remove a product (Admin only) ❌  

### 🛒 **Cart Routes**  
🛍️ `POST /api/cart` – Add to cart 🛒  
📦 `GET /api/cart/:userId` – View your cart 🛍️  
🚫 `DELETE /api/cart/:id` – Remove item from cart 🗑️  

### 📦 **Order Routes**  
✅ `POST /api/orders` – Place an order 📜  
📋 `GET /api/orders/:userId` – View orders 🔎  
🔄 `PUT /api/orders/:id` – Update order (Admin only) ✅  

