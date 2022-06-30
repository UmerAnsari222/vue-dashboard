import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Strategies from "../views/Strategies.vue";
import Draft from "../views/Draft.vue";
import CreatePreset from "../components/CreatePreset.vue";
import Drafts from "../components/Drafts.vue";
import NoRiskPreset from "../components/NoRiskPreset.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/strategies",
    name: "Strategies",
    component: Strategies,
  },
  {
    path: "/drafts/filter",
    name: "FilterDrafts",
    component: Drafts,
  },
  {
    path: "/drafts/add/backtest",
    name: "AddDrafts",
    component: NoRiskPreset,
  },
  {
    path: "/drafts",
    name: "Drafts",
    component: Draft,
  },
  {
    path: "/create",
    name: "Create",
    component: CreatePreset,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

export default router;
