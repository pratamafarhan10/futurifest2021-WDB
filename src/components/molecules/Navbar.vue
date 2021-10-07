<template>
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-white">
    <div class="container">
      <a class="navbar-brand" href="/">
        <img src="../../assets/logo.png" alt="Logo" width="250" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/equality-demand"
              >Equality Demand</router-link
            >
          </li>
          <!-- <li class="nav-item">
            <router-link class="nav-link" to="/jobs-for-women"
              >Jobs for Women</router-link
            >
          </li> -->
        </ul>
        <a href="#" class="btn btn-outline-success my-2 my-sm-0">Login</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
a.active {
  border-bottom: solid;
  border-bottom-color: #bd02ff;
  font-weight: bold;
}
</style>
