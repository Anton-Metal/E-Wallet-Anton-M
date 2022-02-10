import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddCard from "../views/AddCard.vue";

Vue.use(VueRouter);

const routes = [
  // TODO:
  //  - CSS
  //     - Allmän placering
  //        - AddCard
  //        - CardForm
  //     - CardStackGrid
  //     - CardItem



  {
    path: "/",
    component: Home
  },
  {
    path: "/addcard",
    component: AddCard
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
