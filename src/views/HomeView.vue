<template>
  <div class="container-fluid px-4">
    <h3 class="text-primary border-bottom border-primary pb-1 mt-5">Tasks</h3>
    <div class="py-5">
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
</template>

<script>
export default {
  name: "HomeView",
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
      return localStorage.hasOwnProperty("dadosUsuario");
    },
  },
};
</script>
