<img src="src/assets/w2w-logo.png" alt="W2W Logo" width="200">


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
   REACT_APP_API_KEY=your_api_key
   ```

5. Start the development server:

   ```
   npm start
   ```

6. Open your browser and visit `http://localhost:3000` to access the application.

## Features

- Display top 10 rated movies and TV shows
- Search functionality for movies and TV shows
- Live search with debounce functionality
- Detailed view of individual movies and TV shows
- Responsive design for different screen sizes

## Technologies Used

- React 16.8+
- React Router
- React Context
- Axios
- Typescript

## Additional Notes

- ESLint has been configured to ensure code quality and consistency.
- The application follows a modular and component-based architecture.
- Some basic tests have been written using React Testing Library to ensure the correctness of key functionalities.
- The application has been designed to be responsive and compatible with different screen sizes.
- CSS styling has been implemented without using any CSS frameworks to showcase HTML structure and CSS layout skills.

## Licence

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.