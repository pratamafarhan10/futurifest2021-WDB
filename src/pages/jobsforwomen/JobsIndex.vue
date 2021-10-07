<template>
  <div class="mt-5">
    <!-- Feature introduction -->
    <section>
      <div class="row">
        <h1>💼Jobs For Women</h1>
      </div>
      <div class="row">
        <p class="text-secondary">
          This is a feature where women can post jobs for women
        </p>
      </div>
      <div class="row">
        <router-link
          class="btn btn-primary btn-purple"
          :to="{ name: 'post jobs' }"
          >Post jobs for women</router-link
        >
      </div>
    </section>

    <!-- Jobs -->
    <section class="mt-2">
      <div class="row">
        <div class="col-12 col-md-6 d-flex justify-content-center p-0">
          <div class="card w-100" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Senior Full-Stack Developer</h5>
              <h6 class="card-subtitle mb-2">
                <a href="#">Amazon</a> -
                <span class="text-muted">San Francisco</span>
              </h6>
              <p class="card-subtitle mb-2">
                Salary per year:
                <span class="text-success font-weight-bold">$30k - $40k</span>
              </p>
              <p class="card-subtitle mb-2">
                Salary per year (male):
                <span class="text-success font-weight-bold">$30k - $40k</span>
              </p>
              <p class="card-text">Job type: <b>Full-time</b></p>
              <p class="card-text">Experience level: <b>Senior, Lead</b></p>
              <p class="card-text">
                Role: <b>Frontend Developer, Full Stack Developer</b>
              </p>

              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary btn-purple"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                Detail
              </button>

              <!-- Modal -->
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable modal-lg">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        Senior Full-Stack Developer -
                        <a href="#">Amazon</a> -
                        <span class="text-muted">San Francisco</span>
                      </h5>
                      <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      <h5>About this job</h5>
                      <p>
                        Salary per year:
                        <span class="text-success font-weight-bold"
                          >$30k - $40k</span
                        >
                      </p>
                      <p>
                        Salary per year (male):
                        <span class="text-success font-weight-bold"
                          >$30k - $40k</span
                        >
                      </p>
                      <p>Job type: <b>Full-time</b></p>
                      <p>Experience level: <b>Senior, Lead</b></p>
                      <p>
                        Role: <b>Frontend Developer, Full Stack Developer</b>
                      </p>
                      <h5>Job Description</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae nisi eius sunt a sequi alias, magni delectus
                        fuga voluptatibus facilis pariatur dicta rem magnam
                        optio nihil accusamus earum perferendis beatae.
                      </p>
                      <h5>What you'll be resonsible for</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae nisi eius sunt a sequi alias, magni delectus
                        fuga voluptatibus facilis pariatur dicta rem magnam
                        optio nihil accusamus earum perferendis beatae.
                      </p>
                      <h5>What we're looking for</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae nisi eius sunt a sequi alias, magni delectus
                        fuga voluptatibus facilis pariatur dicta rem magnam
                        optio nihil accusamus earum perferendis beatae.
                      </p>
                      <h5>Bonus points for</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae nisi eius sunt a sequi alias, magni delectus
                        fuga voluptatibus facilis pariatur dicta rem magnam
                        optio nihil accusamus earum perferendis beatae.
                      </p>
                      <h5>What we're offering</h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Quae nisi eius sunt a sequi alias, magni delectus
                        fuga voluptatibus facilis pariatur dicta rem magnam
                        optio nihil accusamus earum perferendis beatae.
                      </p>
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                      <a
                        class="btn btn-primary"
                        href="https://www.jobstreet.co.id/"
                      >
                        Apply
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.btn-purple {
  border: none;
  background-color: #a91adc;
}

.text-purple {
  color: #b000ee;
}

.btn-purple:hover {
  background-color: #b000ee;
}
</style>