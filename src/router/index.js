import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Watch from "../views/Watch.vue";
import Search from "../views/Search.vue";
import Trending from "../views/Trending.vue";
import Subscriptions from "../views/Subscriptions.vue";
import Library from "../views/Library.vue";
import Playlist from "../views/Playlist.vue";
import History from "../views/History.vue";
import Channel from "../views/Channel.vue";
import Premium from "../views/Premium.vue";
import Movies from "../views/Movies.vue";
import Gaming from "../views/Gaming.vue";
import Live from "../views/Live.vue";
import FashionAndBeauty from "../views/FashionAndBeauty.vue";
import Learning from "../views/Learning.vue";
import Sports from "../views/Sports.vue";
import Setting from "../views/Setting.vue";
import Studio from "../views/Studio.vue";
import ChannelGameProfile from "../views/ChannelGameProfile.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/watch/:id",
    name: "Watch",
    component: Watch
  },
  {
    path: "/search",
    name: "Search",
    component: Search
  },
  {
    path: "/trending",
    name: "Trending",
    component: Trending
  },
  {
    path: "/subscriptions",
    name: "Subscriptions",
    component: Subscriptions
  },
  {
    path: "/library",
    name: "Library",
    component: Library
  },
  {
    path: "/playlist/:id",
    name: "Playlist",
    component: Playlist
  },
  {
    path: "/history",
    name: "History",
    component: History
  },
  {
    path: "/channel/:id",
    name: "Channel",
    component: Channel
  },
  {
    path: "/premium",
    name: "Premium",
    component: Premium
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies
  },
  {
    path: "/gaming",
    name: "Gaming",
    component: Gaming
  },
  {
    path: "/gaming/:id",
    name: "ChannelGameProfile",
    component: ChannelGameProfile
  },
  {
    path: "/live",
    name: "Live",
    component: Live
  },
  {
    path: "/fashion",
    name: "Fashion",
    component: FashionAndBeauty
  },
  {
    path: "/learning",
    name: "Learning",
    component: Learning
  },
  {
    path: "/sports",
    name: "Sports",
    component: Sports
  },
  {
    path: "/setting",
    name: "Setting",
    component: Setting
  },
  {
    path: "/studio",
    name: "Studio",
    component: Studio
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
