## 🎮 Chill Gamer (Game Review Website)  

Chill Gamer is designed for **game enthusiasts** to:  
✅ Browse and search for games  
✅ Write reviews and rate games  
✅ Securely log in and manage their profiles  

Built with **modern web technologies**, the website offers a **fast, responsive, and visually appealing** user experience.  

## 🛠️ Technologies Used  

### Frontend:
✅ **React.js** – Frontend framework for building UI  
✅ **React Router** – Navigation between pages  
✅ **Tailwind CSS** – Modern & responsive styling  
✅ **Firebase Authentication** – Secure user login & registration  
✅ **Firebase Hosting** – Fast and scalable deployment  

### Backend:
✅ **Node.js** – JavaScript runtime for server-side development  
✅ **Express.js** – Web framework for handling routes and requests  
✅ **MongoDB** – NoSQL database for storing application data  

## 🚀 key Features

### Protected Routes
Certain pages (such as adding reviews, viewing personal reviews, and managing the game watchlist) are protected and accessible only to logged-in users.

### Add Review Page
- Allows users to submit a new review with game details, including the title, description, rating, genres, and publishing year.
- This is a **protected route**, requiring users to be logged in to access.

### Review Details Page
- Displays detailed information about a specific review, including the game cover image, title, description, rating, genre, reviewer’s name, and email.
- Includes an **“Add to Watchlist”** button for logged-in users.

### All Reviews Page
- Lists all the reviews added by users.
- Each review is displayed in a card format, and an **“Explore Details”** button links to the review details page.

### My Reviews Page
- A **protected route** where users can view all the reviews they have submitted.
- Users can only access their own reviews and have the option to **update** or **delete** them.

### Update Review Page
- A **protected route** where users can edit their previously submitted reviews.
- All fields from the "Add Review Page" are pre-filled with the current review data, and the **user email and name** remain read-only.

### CRUD Operations
Full Create, Read, Update, and Delete functionality is provided for managing reviews and game watchlist items. Users can add new reviews, edit their existing reviews, delete them, and view their own watchlist.

### MongoDB Integration
Reviews, user data, and watchlist items are stored and retrieved from a MongoDB database, allowing for efficient data management and retrieval.
```

## 📦 Dependencies  

```json
"dependencies": {
  "react": "^18.x.x",
  "react-router-dom": "^6.x.x",
  "tailwindcss": "^3.x.x",
  "firebase": "^9.x.x",
  "react-icons": "^4.x.x"
}
```

---

## 🚀 How to Run the Project Locally  

### 1️⃣ Clone the repository  
```sh
git clone https://github.com/Bristyakter25/chill-gamer.git
```

### 2️⃣ Navigate into the project directory  
```sh
cd chill-gamer
```

### 3️⃣ Install dependencies  
```sh
npm install
```

### 4️⃣ Start the development server  
```sh
npm start
```

### 5️⃣ Open the browser and visit  
🔗 **[http://localhost:5000](http://localhost:5000)**  

---

## 🌐 Live Demo  
🔗 **[Live Demo]: https://chill-gamer-3b17d.web.app/ ** 

## 📂 GitHub Repositories  
- **Client (Frontend)**: https://github.com/Bristyakter25/chill-gamer
- **Server (Backend)**: https://github.com/Bristyakter25/chill-gamer-server





