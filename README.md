# 📌 CRUD Application – Spring Boot + MySQL

A simple and clean **CRUD (Create, Read, Update, Delete)** web application built using **Spring Boot, Spring Data JPA, Hibernate, and MySQL**, along with a **HTML, CSS, and JavaScript UI**.

It allows users to add, update, view, and delete records through a responsive and user-friendly web interface.

---

## 📸 Application Preview

<p align="center">
  <img src="Crud Page.png" width="600">
</p>

> 

---

## 🚀 Features

✔ Add new records  
✔ Display stored records in a dynamic table  
✔ Edit and update existing records  
✔ Delete individual records  
✔ Form validations & clean UI  
✔ Fully connected with MySQL using Spring Data JPA  

---

## 🛠 Technologies Used

| Layer | Technology |
|-------|------------|
| Backend | Spring Boot |
| ORM | Hibernate + Spring Data JPA |
| Database | MySQL |
| Frontend UI | **HTML, CSS, JavaScript** |
| Build Tool | Maven |
| IDE | IntelliJ |

---

## 📂 Project Structure

```
Crud_Operations-main
 ┣ src
 ┃ ┣ main
 ┃ ┃ ┣ java/com/example/crud
 ┃ ┃ ┃ ┣ controller
 ┃ ┃ ┃ ┣ entity
 ┃ ┃ ┃ ┣ repository
 ┃ ┃ ┃ ┗ service
 ┃ ┃ ┣ resources
 ┃ ┃ ┃ ┣ static (HTML, CSS, JS files)
 ┃ ┃ ┃ ┗ application.properties
 ┣ pom.xml
 ┗ README.md
```

---

## ⚙️ Setup & Installation

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/PavanTsappati/Crud_Operations-main.git
cd Crud_Operations-main
```

### 2️⃣ Create MySQL Database

```sql
CREATE DATABASE crud_app;
```

### 3️⃣ Update Database Credentials

In `application.properties`:

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/crud_app
spring.datasource.username=root
spring.datasource.password=YOUR_PASSWORD
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
```

### 4️⃣ Run the Project

```sh
mvn spring-boot:run
```

Or run from your IDE.

---

## ▶️ How to Use

| Action | How |
|--------|-----|
| Add Data | Fill form → Click **Add** |
| Edit Data | Click **Edit** next to record |
| Save Update | Modify fields → Click **Update** |
| Delete | Click **Delete** |

---

## 🎯 Future Improvements

🔹 Authentication (Login system)  
🔹 Pagination & Search filter  
🔹 Deploy online (Render/Railway/AWS)  
🔹 Upgrade UI to React or Angular  

---

### ⭐ Support

If this project helped you, please **⭐ star the repository**!

---

