<template>
  <div>
    <div v-if="rotaPerfil" class="container-fluid px-4">
      <h3 class="text-primary border-bottom border-primary pb-1 mt-5 mb-3">
        Account
      </h3>
      <div class="row justify-content-evenly">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div class="row mb-3">
                <label for="name"
                  ><span class="d-flex justify-content-between">
                    <b>Name</b>
                    <small v-if="small1()" class="text-danger"
                      >Preenchimento obrigatório!</small
                    >
                  </span>
                  <input
                    @input="disabled"
                    type="text"
                    class="form-control"
                    v-model="name"
                    placeholder="Enter your name"
                    required
                  />
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="username"
                  ><span class="d-flex justify-content-between">
                    <b>Username</b>
                    <small v-if="small2()" class="text-danger"
                      >Preenchimento obrigatório!</small
                    >
                  </span>
                  <input
                    @input="disabled"
                    type="text"
                    class="form-control"
                    v-model="username"
                    placeholder="Enter your username"
                    required
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row mb-3">
            <label for="email"
              ><span class="d-flex justify-content-between">
                <b>E-mail</b>
                <small v-if="small3()" class="text-danger"
                  >Preenchimento obrigatório!</small
                >
              </span>
              <input
                @input="disabled"
                type="email"
                class="form-control"
                v-model="email"
                placeholder="Enter your e-mail"
                required
              />
            </label>
          </div>
        </div>
      </div>
      <h3 class="text-primary border-bottom border-primary pb-1 mt-5 mb-3">
        Address
      </h3>
      <div class="row justify-content-evenly">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div class="row mb-3">
                <label for="cep"
                  ><b>Cep</b>
                  <input
                    type="text"
                    class="form-control"
                    v-model="cep"
                    placeholder="Enter your zip code"
                  />
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="rua"
                  ><b>Rua</b>
                  <input
                    type="text"
                    class="form-control"
                    v-model="rua"
                    placeholder="Enter your street"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col-3">
              <div class="row mb-3">
                <label for="numero"
                  ><b>Nº</b>
                  <input
                    type="number"
                    min="0"
                    class="form-control"
                    v-model="numero"
                    placeholder="Number"
                  />
                </label>
              </div>
            </div>
            <div class="col-9">
              <div class="row mb-3">
                <label for="complemento"
                  ><b>Complemento</b>
                  <input
                    type="text"
                    class="form-control"
                    v-model="complemento"
                    placeholder="Complement"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-evenly mb-5">
        <div class="col-6">
          <div class="row">
            <div class="col">
              <div class="row mb-3">
                <label for="bairro"
                  ><b>Bairro</b>
                  <input
                    type="text"
                    class="form-control"
                    v-model="bairro"
                    placeholder="Enter your district"
                  />
                </label>
              </div>
            </div>
            <div class="col">
              <div class="row mb-3">
                <label for="cidade"
                  ><b>Cidade</b>
                  <input
                    type="text"
                    class="form-control"
                    v-model="cidade"
                    placeholder="Enter your city"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-4">
          <div class="row">
            <div class="col">
              <div class="row mb-3">
                <label for="estado"
                  ><b>Estado</b>
                  <input
                    type="text"
                    class="form-control"
                    v-model="estado"
                    placeholder="Enter your state"
                  />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-5">
          <button
            @click="cancelar()"
            id="cancelar"
            type="button"
            class="btn btn-light"
          >
            <router-link class="text-dark text-decoration-none" to="/"
              >Cancelar
            </router-link>
          </button>
        </div>
        <div class="col-5 d-flex justify-content-end">
          <button
            v-if="disabled()"
            disabled
            id="salvar"
            type="button"
            class="btn btn-primary"
          >
            <a class="text-light text-decoration-none" href="/add-tarefa"
              >Salvar</a
            >
          </button>
          <button
            v-else
            @click="salvar"
            id="salvar"
            type="button"
            class="btn btn-primary"
          >
            <a class="text-light text-decoration-none" href="/add-tarefa"
              >Salvar</a
            >
          </button>
        </div>
      </div>
    </div>

    <div v-if="rotaTarefa" class="row justify-content-around">
      <div class="col-5">
        <div class="row">
          <label for="tiulo">
            <span class="d-flex justify-content-between">
              <b>Title</b>
              <small v-if="small4()" class="text-danger"
                >Preenchimento obrigatório!</small
              >
            </span>
            <input
              id="titulo"
              type="text"
              class="form-control"
              v-model="title"
              placeholder="Add title"
            />
          </label>
        </div>
      </div>
      <div class="col-5">
        <div class="row">
          <label for="status">
            <span class="d-flex justify-content-between">
              <p class="mb-0"><b>Status</b></p>
              <small v-if="small5()" class="text-danger"
                >Preenchimento obrigatório!</small
              >
            </span>
            <select id="select" class="custom-select w-100" v-model="status">
              <option selected disabled value="Select">Select</option>
              <option selected value="ToDo">ToDo</option>
              <option value="WiP">WiP</option>
              <option value="Done">Done</option>
            </select>
          </label>
        </div>
      </div>
    </div>
    <div class="row justify-content-around mw-100">
      <div class="col-11">
        <div class="row">
          <label class="my-5" for="description">
            <span class="d-flex justify-content-between">
              <b>Description</b>
              <small v-if="small6()" class="text-danger"
                >Preenchimento obrigatório!</small
              >
            </span>
            <textarea
              class="form-control"
              id="description"
              v-model="description"
              rows="3"
              placeholder="Add descripion..."
            >
            </textarea>
          </label>
        </div>
      </div>
    </div>
    <div class="row justify-content-around mt-5 mw-100">
      <div class="col-5">
        <button
          @click="cancelar2()"
          id="cancelar2"
          type="button"
          class="btn btn-light border border-secondary"
        >
          <router-link class="text-secondary text-decoration-none" to="/"
            >Cancelar
          </router-link>
        </button>
      </div>
      <div class="col-5 d-flex justify-content-end">
        <button
          v-if="disabled2()"
          type="button"
          disabled
          class="btn btn-light border border-primary"
        >
          <router-link
            class="text-primary text-decoration-none"
            to="/add-tarefa"
            >Adicionar
          </router-link>
        </button>
        <button
          v-else
          @click="click"
          type="button"
          class="btn btn-light border border-primary"
        >
          <router-link
            class="text-primary text-decoration-none"
            to="/add-tarefa"
            >Adicionar
          </router-link>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Form",
  data() {
    return {
      name: "",
      username: "",
      email: "",
      cep: "",
      rua: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      title: "",
      status: "Select",
      description: "",
    };
  },
  computed: {
    rotaPerfil() {
      return this.$route.name === "CriarConta";
    },
    rotaTarefa() {
      return this.$route.name === "AddTarefa";
    },
  },
  methods: {
    cancelar() {
      this.name = "";
      this.username = "";
      this.email = "";
      this.cep = "";
      this.rua = "";
      this.numero = "";
      this.complemento = "";
      this.bairro = "";
      this.cidade = "";
      this.estado = "";
    },
    cancelar2() {
      this.title = "";
      this.status = "Select";
      this.description = "";
    },
    disabled() {
      return this.name === "" || this.username === "" || this.email === "";
    },
    disabled2() {
      return (
        this.title === "" || this.status === "Select" || this.description === ""
      );
    },
    small1() {
      return this.name === "";
    },
    small2() {
      return this.username === "";
    },
    small3() {
      return this.email === "";
    },
    small4() {
      return this.title === "";
    },
    small5() {
      return this.status === "Select";
    },
    small6() {
      return this.description === "";
    },
    salvar() {
      const dadosUsuario = {
        id: Math.floor(Math.random() * 1000),
        name: this.name,
        username: this.username,
        email: this.email,
        cep: this.cep,
        rua: this.rua,
        numero: this.numero,
        complemento: this.complemento,
        bairro: this.bairro,
        cidade: this.cidade,
        estado: this.estado,
      };
      localStorage.setItem("dadosUsuario", JSON.stringify(dadosUsuario));
    },
    limparForm() {
      this.title = "";
      this.status = "Select";
      this.description = "";
    },
    click() {
      /* this.salvar2(); */
      this.$emit("v-model", {
        id: Math.floor(Math.random() * 1000),
        title: this.title,
        status: this.status,
        description: this.description,
      });
      this.limparForm();
    },
  },
};
</script>
<style scoped>
#cancelar {
  background-color: #c3cfd9;
}
#select {
  height: 80%;
}
</style>
