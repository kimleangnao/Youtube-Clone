import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const apiClientUser = axios.create({
  baseURL: "http://localhost:4444",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const apiClientMovies = axios.create({
  baseURL: "http://localhost:5555",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const apiClientLiveGames = axios.create({
  baseURL: "http://localhost:1234",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const apiClientLiveStream = axios.create({
  baseURL: "http://localhost:1111",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const apiClientFashion = axios.create({
  baseURL: "http://localhost:6655",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const apiClientLearning = axios.create({
  baseURL: "http://localhost:4040",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});
const apiClientSports = axios.create({
  baseURL: "http://localhost:7766",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getVideos() {
    return apiClient.get("/youtube");
  },
  getVideoId(id) {
    return apiClient.get("/youtube/" + id);
  },
  postCommentToVideoId(id, comment) {
    return apiClient.put("/youtube/" + id, comment);
  },
  putVideoId(id, newChange) {
    return apiClient.put("/youtube/" + id, newChange);
  },
  getUsers() {
    return apiClientUser.get("/users");
  },
  getUser(id) {
    return apiClientUser.get("/users/" + id);
  },
  putUser(id, newUser) {
    return apiClientUser.put("/users/" + id, newUser);
  },
  getMovies() {
    return apiClientMovies.get("/movies");
  },
  getMovieId(id) {
    return apiClientMovies.get("/movies/" + id);
  },
  getLiveGames() {
    return apiClientLiveGames.get("/games");
  },
  getLiveGameId(id) {
    return apiClientLiveGames.get("/games/" + id);
  },
  getLiveStreams() {
    return apiClientLiveStream.get("/livestreams");
  },
  getFashion() {
    return apiClientFashion.get("/fashion");
  },
  getLearning() {
    return apiClientLearning.get("/learning");
  },
  getSports() {
    return apiClientSports.get("/sports");
  }
};
