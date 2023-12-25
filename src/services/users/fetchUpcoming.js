import axios from "axios";
const prefixUrl = `${process.env.API_URL ? process.env.API_URL : ""}/`;

// Passing configuration object to axios
export const fetchMovies = async () => {
  const configurationObject = {
    method: "get",
    url: `${prefixUrl}/3/movie/upcoming`,
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MzVhZDllYWU0MDhiZTIyM2UwMjBjZjNiOGZkODkwOSIsInN1YiI6IjY1ODg3YzIxZmFkOGU5NWRjYThkZDZmYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z0nNb6fZNO7u0VANYUweI6QljcdloHOzH-muiXhKNmk",
    },
  };
  const response = await axios(configurationObject);
  return response;
};
