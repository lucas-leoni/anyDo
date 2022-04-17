<template>
  <tr>
    <td class="text-center">
      <router-link class="text-decoration-none" v-bind:to="url()">
        {{ tarefa.id }}
      </router-link>
    </td>
    <td>{{ tarefa.title }}</td>
    <td>{{ tarefa.description }}</td>
    <td class="text-center">
      <span
        v-if="tarefa.status === 'ToDo'"
        class="badge badge-primary bg-primary"
      >
        {{ tarefa.status }}
      </span>
      <span
        v-else-if="tarefa.status === 'WiP'"
        class="badge badge-warning bg-warning text-dark"
        >{{ tarefa.status }}</span
      >
      <span v-else class="badge badge-success bg-success">{{
        tarefa.status
      }}</span>
    </td>
    <td class="text-center">
      <button type="button" class="btn text-danger p-0 border-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
          ></path>
        </svg>
      </button>
    </td>
  </tr>
</template>
<script>
export default {
  name: "Tasks",
  props: {
    tarefa: {
      type: Object,
      required: true,
    },
  },
  methods: {
    url() {
      return "/tarefa/" + this.tarefa.id;
    },
  },
};
</script>
