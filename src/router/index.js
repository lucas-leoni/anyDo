import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import CriarConta from "@/views/CriarConta.vue";
import AddTarefa from "@/views/AddTarefa.vue";
import DetalhesTarefa from "@/views/DetalhesTarefa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/criar-conta",
    name: "CriarConta",
    component: CriarConta,
  },
  {
    path: "/add-tarefa",
    name: "AddTarefa",
    component: AddTarefa,
  },
  {
    path: "/tarefa/:id",
    name: "DetalhesTarefa",
    component: DetalhesTarefa,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
