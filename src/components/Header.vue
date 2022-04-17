<template>
  <div>
    <nav id="border" class="navbar navbar-light py-3">
      <div class="container-fluid justify-content-evenly">
        <div id="border" class="col-1 d-flex justify-content-center py-3">
          <router-link class="navbar-brand text-dark m-0" to="/">
            <i class="bi bi-image-fill" style="font-size: 2rem"></i>
          </router-link>
        </div>
        <div class="col-9">
          <a class="navbar-brand text-dark m-0" href="/">
            <router-link class="navbar-brand text-dark m-0" to="/">
              <b>Any Do</b>
            </router-link>
          </a>
        </div>
        <div class="col-1 d-flex justify-content-end">
          <a class="navbar-brand text-dark m-0">
            <b v-if="usuario()" class="text-primary">Hello, {{ nome() }}!</b>
            <router-link
              v-else
              class="navbar-brand text-primary m-0"
              to="/criar-conta"
            >
              <b>Hello, Visitors!</b>
            </router-link>
          </a>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    usuario() {
      return localStorage.hasOwnProperty("dadosUsuario");
    },
    nome() {
      let name = localStorage.getItem("dadosUsuario");
      name = JSON.parse(name);
      return name.name;
    },
  },
};
</script>

<style>
.navbar {
  background-color: #dfe6ed;
}
#border {
  border: 2px solid #9eadba;
}
</style>
