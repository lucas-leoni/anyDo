<template>
  <div class="container-fluid px-4">
    <div
      class="border-bottom border-primary d-flex justify-content-between align-items-center"
    >
      <h3 class="text-primary pb-1 mt-5">Tasks</h3>
      <span>
        <button v-if="mostrar()" type="button" class="btn btn-primary">
          <router-link class="text-light text-decoration-none" to="/add-tarefa"
            >Adicionar
          </router-link>
        </button>
      </span>
    </div>
    <div v-if="esconder()" class="py-5">
      <div class="form-check py-1" v-for="task in tasks" :key="task.id">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="defaultCheck1"
        />
        <label class="form-check-label" for="defaultCheck1">
          {{ task.title }}, {{ task.description }}
        </label>
      </div>
    </div>

    <div v-show="mostrar()" class="row justify-content-center mt-5 pt-5">
      <div class="col-11">
        <table class="table table-bordered">
          <thead class="text-center">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col">Ação</th>
            </tr>
          </thead>
          <tbody v-for="tarefa in tarefa" :key="tarefa.id">
            <Tasks :tarefa="tarefa" />
          </tbody>
        </table>
      </div>
    </div>

    <div v-if="esconder()">
      <button
        v-if="disabled()"
        disabled
        type="button"
        class="btn border border-primary"
      >
        <a class="navbar-brand text-primary m-0"> Adicionar </a>
      </button>
      <button v-else type="button" class="btn border border-primary">
        <router-link class="navbar-brand text-primary m-0" to="/criar-conta">
          Adicionar
        </router-link>
      </button>
    </div>
  </div>
</template>

<script>
import Tasks from "@/components/Tasks.vue";
export default {
  name: "HomeView",
  props: {
    tarefa: {
      type: Array,
      required: true,
    },
  },
  components: {
    Tasks,
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          title: "Supermercado",
          description: "fazer compras...",
        },
        {
          id: 2,
          title: "Casa",
          description: "arrumar mudança",
        },
        {
          id: 3,
          title: "Computador",
          description: "organizar SO",
        },
      ],
    };
  },
  methods: {
    disabled() {
      if (localStorage.hasOwnProperty("dadosUsuario")) {
        return true;
      } else return false;
    },
    esconder() {
      if (localStorage.hasOwnProperty("dadosTarefa")) {
        return false;
      } else return true;
    },
    mostrar() {
      if (localStorage.hasOwnProperty("dadosTarefa")) {
        return true;
      } else return false;
    },
    beforeMount() {
      this.disabled();
      this.esconder();
      this.mostrar();
    },
  },
};
</script>
