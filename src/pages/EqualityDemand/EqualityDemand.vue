<template>
  <!-- Feature introduction -->
  <section class="mt-5">
    <div class="row">
      <h1>Equality Demand</h1>
      <p class="text-secondary">
        This is a platform where women can share the inequalities they
        experience in the company by providing information on how much they earn
        in salary and comparisons with male workers. They can also provide
        information about the company where they work and with this platform,
        women can demand equality in salary using public pressure. The women
        don't need to worry because the data displayed will be kept
        confidential.
      </p>
    </div>
  </section>

  <!-- Create button -->
  <section class="mt-2">
    <div class="row">
      <router-link class="btn btn-primary btn-purple" :to="{name : 'create equality demand'}">Demand For Equality</router-link>
    </div>
  </section>

  <!-- Submission -->
  <section class="mt-3">
    <div class="row">
      <div class="col-12 col-md-4 d-flex justify-content-center p-0">
        <div class="card w-100">
          <div class="card-body">
            <h5 class="card-title">
              <a href="#" class="text-dark">Company A</a>
            </h5>
            <h6 class="card-subtitle mb-2 text-muted">Jakarta</h6>
            <p class="card-text">
              <font-awesome-icon icon="user-md" class="mr-2" /><b>Position:</b>
              Head of product
            </p>
            <p class="card-text">
              <font-awesome-icon icon="briefcase" class="mr-2" /><b
                >Job type:</b
              >
              Fulltime
            </p>
            <p class="card-text">
              <font-awesome-icon icon="history" class="mr-2" /><b
                >Years of work:</b
              >
              2 Years
            </p>
            <p class="card-text">
              <font-awesome-icon icon="hand-rock" class="mr-2" /><b>Race:</b>
              Asian
            </p>
            <p class="card-text">
              <font-awesome-icon icon="money-bill" class="mr-2" /><b
                >Salary per-year:</b
              >
              $16.000 - $20.000
            </p>
            <p class="card-text">
              <font-awesome-icon icon="money-bill" class="mr-2" /><b
                >Salary per-year (male):</b
              >
              $25.000 - $30.000
            </p>
            <p class="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
              excepturi velit, explicabo eos sunt fugit voluptate sapiente
              tenetur voluptatum quis quia. Iste et, animi architecto veniam
              libero explicabo officiis magni.
            </p>
            <a href="#" class="card-link">Instagram</a>
            <a href="#" class="card-link">Twitter</a>
            <a href="#" class="card-link">Linkedin</a>
            <a href="#" class="card-link">Facebook</a>
          </div>
          <div class="card-footer">
              <a href="#" class="btn btn-primary btn-detail w-100">Detail</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.btn-purple {
  border: none;
  background-color: #a91adc;
}

.btn-purple:hover {
  background-color: #b000ee;
}

.btn-detail {
  background-color: white;
  color: black;
  border-color: #b000ee;
}

.btn-detail:hover {
  background-color: #b000ee;
  color: white;
}
</style>