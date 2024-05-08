<img src="src/assets/logo/w2w-logo.png" alt="W2W Logo" width="220">


# What to Watch - Streamline Your Entertaiment

This is a web application built in React that allows users to view and search for the top 10 rated movies and TV shows using TheMovieDB API. It also provides a detailed view of individual movies and TV shows.

## Installation

To run the application locally, please follow the steps below:

1. Clone the repository from GitHub:

   ```
   git clone git@github.com:vascabarkapa/what-to-watch.git
   ```

2. Navigate to the project directory:

   ```
   cd what-to-watch
   ```

3. Install the dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your API key obtained from TheMovieDB API:

   ```
   REACT_APP_TMDB_KEY=your_the_movie_db_key
   ```

5. Start the development server:

   ```
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to access the application.

## Features

- Display top 10 rated movies and TV shows.
- Search functionality for movies and TV shows.
- Live search with debounce functionality.
- Detailed view of individual movies and TV shows.
- Responsive design for different screen sizes.

## Live Demo

Check out how application looks live! You can test all the functionalities [**here**](https://w2w-entertaiment.netlify.app/).

## Technologies Used

- React 18.2+
- React Router
- React Redux
- Axios
- Typescript

## Additional Notes

- The application follows a modular and component-based architecture.
- The application has been designed to be responsive and compatible with different screen sizes.
- CSS styling has been implemented without using any CSS frameworks.

## Licence

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.