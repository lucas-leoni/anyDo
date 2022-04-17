<template>
  <div class="container-fluid px-4">
    <h3 class="text-primary border-bottom border-primary pb-1 mt-5 mb-5">
      Tasks
    </h3>
    <div class="row justify-content-around">
      <div id="divisoria" class="col-8 pt-5">
        <Form />
      </div>
      <div class="col-4">
        <div class="row justify-content-center mb-5">
          <div class="col-11 pt-4">
            <h4>Checklist</h4>
          </div>
        </div>
        <div class="row justify-content-center">
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
              <tbody v-for="tarefa in tarefas" :key="tarefa.id">
                <Tasks :tarefa="tarefa" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Form from "@/components/Form.vue";
import Tasks from "@/components/Tasks.vue";
export default {
  name: "AddTarefa",
  components: {
    Form,
    Tasks,
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
<style scoped>
#divisoria {
  border-right: 2px solid #9eadba;
}
</style>
