<template>
  <div
    class="col-12 col-md-6 d-flex justify-content-center p-0 mt-2"
  >
    <div class="card w-90">
      <div class="card-body">
        <h5 class="card-title">{{ job.position }}</h5>
        <h6 class="card-subtitle mb-2">
          <a :href="job.companyWebsite">{{ job.companyName }}</a> -
          <span class="text-muted">{{ job.companyCity }}</span>
        </h6>
        <p class="card-subtitle mb-2">
          Salary per year:
          <span class="text-success font-weight-bold"
            >${{ job.salaryFrom }} - ${{ job.salaryTo }}</span
          >
        </p>
        <p class="card-subtitle mb-2">
          Salary per year (male):
          <span class="text-success font-weight-bold"
            >${{ job.maleSalaryFrom }} - ${{ job.maleSalaryTo }}</span
          >
        </p>
        <p class="card-text">
          Job type: <b>{{ job.jobType }}</b>
        </p>
        <p class="card-text">
          Experience level: <b>{{ job.experienceLevel }}</b>
        </p>
        <p class="card-text">
          Role: <b>{{ job.role }}</b>
        </p>

        <!-- Button trigger modal -->
        <button
          type="button"
          class="btn btn-primary btn-purple"
          data-toggle="modal"
          :data-target="`#exampleModal${job.id}`"
        >
          Detail
        </button>

        <!-- Modal -->
        <div
          class="modal fade"
          :id="`exampleModal${job.id}`"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-scrollable modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  {{ job.position }} - <a href="#">{{ job.companyName }}</a> -
                  <span class="text-muted">{{ job.companyCity }}</span>
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
                    >${{ job.salaryFrom }} - ${{ job.salaryTo }}</span
                  >
                </p>
                <p>
                  Salary per year (male):
                  <span class="text-success font-weight-bold"
                    >${{ job.maleSalaryFrom }} - ${{ job.maleSalaryTo }}</span
                  >
                </p>
                <p>
                  Job type: <b>{{ job.jobType }}</b>
                </p>
                <p>
                  Experience level: <b>{{ job.experienceLevel }}</b>
                </p>
                <p>
                  Role: <b>{{ job.role }}</b>
                </p>
                <h5>Job Description</h5>
                <p>
                  {{ job.description }}
                </p>
                <h5>What you'll be resonsible for</h5>
                <p>
                  {{ job.responsibility }}
                </p>
                <h5>What we're looking for</h5>
                <p>
                  {{ job.lookingFor }}
                </p>
                <h5>Bonus points for</h5>
                <p>
                  {{ job.bonusPoint }}
                </p>
                <h5>What we're offering</h5>
                <p>
                  {{ job.offering }}
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
                <a class="btn btn-primary" :href="job.applyUrl"> Apply </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['job']
}
</script>

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

.w-90 {
  width: 90%;
}
</style>