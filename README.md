# YouTube Video Listing App

This project is a **YouTube Video Listing App** that fetches and displays a list of YouTube videos based on a predefined query (`javascript`). It allows users to:

- **Search videos** dynamically using the search bar.
- **Load more videos** on demand.
- **Display video details** such as title, channel name, and description.

---

## 🚀 Features

- **Dynamic Video Fetching:** Videos are loaded via an API and displayed in a grid format.
- **Live Search Filter:** Users can filter videos by title in real-time.
- **Load More Button:** Fetches additional videos on user request.
- **Loading Indicator:** Shows a spinner while fetching data.
- **Tailwind CSS & DaisyUI:** Provides a responsive and modern UI.

---

## 📂 Project Structure

```
/
│── index.html      # Main HTML file
│── script.js       # JavaScript logic for fetching and displaying videos
│── styles.css      # Additional styling (if any)
│── readme.md       # Documentation file (this file)
```

---

## 📌 How to Use

### 1️⃣ Clone the Repository

```sh
$ git clone https://github.com/abhay-sharma13/cohort-youtube-listing-page.git
$ cd cohort-youtube-listing-page
```

### 2️⃣ Open `index.html`

You can open the file directly in a browser or use a local server for better performance:

```sh
$ live-server
```

### 3️⃣ Search for Videos

- Type a keyword in the search bar to **filter videos by title**.
- The list updates **instantly** as you type.

### 4️⃣ Load More Videos

- Click the **'Load More'** button to fetch and display more videos.
- New videos are added to the existing list.

---

## 🔧 Technologies Used

- **HTML5** for structure
- **Tailwind CSS & DaisyUI** for styling
- **JavaScript (ES6+)** for logic
- **Fetch API** for getting video data

---

## 🛠️ API Used

We use the [FreeAPI YouTube Video API](https://api.freeapi.app/) to fetch video data. The API query parameters include:

- **Page:** Used for pagination.
- **Limit:** Number of videos per request.
- **Query:** The search term (`javascript`).
- **SortBy:** Sorting method (e.g., `mostLiked`, `mostViewed`).

---

## 📌 Improvements & Future Updates

- ✅ Implement better error handling for API failures.
- ✅ Add a **better UX/UI** with smooth transitions.
- ✅ Allow users to search for **custom queries** instead of a fixed keyword.
- ✅ Optimize the performance by debouncing the search input.

---

## 📝 Author

Developed by **Abhay Sharma**  
Feel free to contribute and enhance this project! 🚀
