<template>
  <div id="app">
    <Header />
    <router-view :tarefa="tarefas" />
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      tarefas: [],
    };
  },
  methods: {
    exibirLocalStorage() {
      let tarefasStorage = JSON.parse(localStorage.getItem("dadosTarefa"));
      this.tarefas = this.tarefas.concat(tarefasStorage);
    },
  },
  beforeMount() {
    if (localStorage.getItem("dadosTarefa")) {
      this.exibirLocalStorage();
    }
  },
};
</script>
