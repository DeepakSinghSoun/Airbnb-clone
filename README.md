🏡 Airbnb Clone

A full-stack web application inspired by Airbnb, built using Node.js, Express.js, MongoDB (Mongoose), EJS, and Passport.js.
This project demonstrates CRUD operations, authentication, image uploads, and cloud storage integration — providing a complete learning experience for building scalable web apps.


🚀 Features
🔑 User Authentication (Signup/Login) with Passport.js
💬 Flash messages for user feedback
📝 Create, Read, Update, Delete (CRUD) listings
🖼️ Image uploads with Multer + Cloudinary
🎨 Responsive UI using Bootstrap 5 & Font Awesome icons
✅ Data validation with Joi
🗂️ Session handling using express-session


🛠️ Tech Stack
Backend: Node.js, Express.js
Frontend: EJS, Bootstrap 5, Font Awesome
Database: MongoDB with Mongoose ODM
Authentication: Passport.js (passport-local, passport-local-mongoose)
File Uploads: Multer, Multer-Storage-Cloudinary, Cloudinary
Utilities: dotenv, connect-flash, method-override, ejs-mate


⚙️ Installation & Setup
# Clone the repository
git clone https://github.com/your-username/airbnb-clone.git
# Navigate to project folder
cd airbnb-clone
# Initialize package.json
npm init -y
# Install dependencies
npm install express ejs mongoose method-override ejs-mate \
express-session connect-flash passport passport-local \
passport-local-mongoose multer dotenv cloudinary \
multer-storage-cloudinary joi

🗄️ Database Setup (MongoDB)
1-Install MongoDB locally or use MongoDB Atlas.
2-Update your .env file with MongoDB URI and Cloudinary credentials:
DB_URL=mongodb://127.0.0.1:27017/airbnb-clone
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_KEY=your_key
CLOUDINARY_SECRET=your_secret
SECRET=your_session_secret

▶️ Run the Project
nodemon app.js
