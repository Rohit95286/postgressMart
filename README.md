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

Here’s a compiled version of all the notes you requested:

---

## 🚀 **Sequelize DataTypes Table** 📊

| **🆔 Data Type**             | **📌 Description**                                    | **🔍 Example**                  |
| ---------------------------- | ----------------------------------------------------- | ------------------------------- |
| 🔤 **STRING(255)**           | Stores text (e.g., usernames, emails)                 | `"john_doe"`, `"user@mail.com"` |
| 🔢 **INTEGER** / **DECIMAL** | Stores whole & decimal numbers (e.g., prices, counts) | `100`, `999.99`                 |
| ✅ **BOOLEAN**               | Stores `true` ✅ or `false` ❌ values                 | `true`, `false`                 |
| 🎭 **ENUM('A', 'B')**        | Stores predefined values (e.g., order status)         | `"Pending"`, `"Shipped"`        |
| 📅 **DATEONLY**              | Stores only the date (without time)                   | `"2025-03-08"`                  |
| 🗄 **JSON**                   | Stores structured data (key-value format)             | `{"key": "value"}`              |
| 🔗 **FOREIGN KEY**           | Establishes relationships between tables              | `userId → Users(id)`            |

🔥 **Use this table as a quick reference for Sequelize data types & relationships!** 🚀

---

## 🛠 **Sequelize Table Properties** 📌

| **🔧 Property**        | **📌 Description**                                                         | **🔍 Example Value** |
| ---------------------- | -------------------------------------------------------------------------- | -------------------- |
| 📄 **tableName**       | Defines the table name explicitly instead of using the model name.         | `"users"`            |
| ❄️ **freezeTableName** | Prevents Sequelize from automatically pluralizing table names.             | `true`               |
| ⏳ **timestamps**      | Adds `createdAt` & `updatedAt` columns automatically for tracking changes. | `true`               |

🔥 **These properties help control how Sequelize interacts with your database tables!** 🚀

---

## ✅ **Column Validation in Sequelize**

| **🔧 Validation** | **📌 Description**                    | **🔍 Example**        |
| ----------------- | ------------------------------------- | --------------------- |
| **notEmpty**      | Ensures the field is not empty        | `true`                |
| **len**           | Sets a min & max length               | `[3, 50]`             |
| **isEmail**       | Validates an email format             | `true`                |
| **isInt**         | Ensures the value is an integer       | `true`                |
| **isAlpha**       | Allows only alphabetic characters     | `true`                |
| **isIn**          | Restricts values to a predefined list | `[["admin", "user"]]` |

🔥 **Use validations to maintain clean and structured data!** 🚀

---

## ✅ **Regex Validation in Sequelize** 📌

| **🔧 Property** | **📌 Description**                                 | **🔍 Regex Pattern**     | **🔎 Example Value**      |
| --------------- | -------------------------------------------------- | ------------------------ | ------------------------- |
| **`is`**        | Ensures the value matches a specific regex pattern | `/^[a-zA-Z0-9_]{3,15}$/` | `"user_123"`, `"JohnDoe"` |

🔥 **Use regex validation to enforce strict input formats and maintain data integrity!** 🚀

---

Let me know if you need any changes or additional details! 🚀
