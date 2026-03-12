# CineScope

CineScope is a movie discovery web application built with **React and TypeScript** that allows users to search for movies, explore trending titles, and watch trailers directly inside the app.

The project focuses on building a modern frontend interface with **API-driven data, interactive UI components, and responsive design**.

---

## Live Demo

https://04-react-query-six-psi.vercel.app/

---

## Features

* Search for movies using the TMDB API
* Browse paginated movie results
* Watch movie trailers in an interactive modal using the YouTube player
* View movie descriptions and details
* Close the modal via **Escape key** or overlay click
* Prevent background scrolling while the modal is open
* Track trending search analytics using **Appwrite**
* Responsive UI built with **Tailwind CSS**

---

## Tech Stack

**Frontend**

* React
* TypeScript
* TanStack Query
* Tailwind CSS

**Backend / Services**

* Appwrite
* TMDB API

**Tools**

* Vite
* Git
* Vercel (deployment)

---

## Project Overview

CineScope was built to practise creating **API-driven interfaces and interactive UI components** in React.

The application fetches movie data from the TMDB API and displays results with pagination. Users can click a movie to open a modal with a trailer and description. Trending search queries are stored using Appwrite to demonstrate integration with external backend services.

---
## Screenshots

### Search Results
![Search](public/cinescope-demo.png)

### Trailer Modal
![Trailer](public/modal.png)

### Pagination
![Pagination](public/pagination.png)

---

## Running the Project Locally

Clone the repository:

git clone https://github.com/MarinaHurricane/cinescope.git

Navigate to the project directory:

cd cinescope

Install dependencies:

npm install

Start the development server:

npm run dev

---

## Environment Variables

Create a `.env` file and add the required configuration values for:

* TMDB API key
* Appwrite project configuration

---

## Future Improvements

Possible enhancements for the project:

* Add a favourites or watchlist feature
* Filter movies by genre or rating



---

## Author

Maryna Ishchenko  
Software Developer focused on JavaScript, React, Next.js, and TypeScript.
