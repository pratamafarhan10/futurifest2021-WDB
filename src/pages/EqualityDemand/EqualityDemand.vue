<template>
  <div class="mt-5">
    <!-- Feature introduction -->
    <section>
      <div class="row">
        <h1>✊Equality Demand</h1>
      </div>
      <div class="row">
        <p class="text-secondary">
          This is a platform where women can share the inequalities they
          experience in the company by providing information on how much they
          earn in salary and comparisons with male workers. They can also
          provide information about the company where they work and with this
          platform, women can demand equality in salary using public pressure.
          The women don't need to worry because the data displayed will be kept
          confidential.
        </p>
      </div>
    </section>

    <!-- Create button -->
    <section class="mt-2">
      <div class="row">
        <router-link
          class="btn btn-primary btn-purple"
          :to="{ name: 'create equality demand' }"
          >Demand For Equality</router-link
        >
      </div>
    </section>

    <!-- Submission -->
    <section class="mt-3">
      <div class="row justify-content-center" v-if="isLoading">
        <div class="spinner-border text-purple" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
      <div class="row" v-else>
        <div
          class="col-12 col-md-4 d-flex justify-content-center p-0"
          v-for="ed in equalityDemands"
          :key="ed.id"
        >
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title">
                <a href="#" class="text-dark">{{ ed.companyName }}</a>
              </h5>
              <h6 class="card-subtitle mb-2 text-muted">
                {{ ed.companyCity }}
              </h6>

              <p class="card-text">
                <font-awesome-icon icon="user-md" class="mr-2" /><b
                  >Position:</b
                >
                {{ ed.position }}
              </p>
              <p class="card-text">
                <font-awesome-icon icon="briefcase" class="mr-2" /><b
                  >Job type:</b
                >
                {{ ed.jobType }}
              </p>
              <p class="card-text">
                <font-awesome-icon icon="history" class="mr-2" /><b
                  >Years of work:</b
                >
                {{ ed.yearsOfWork }} Years
              </p>
              <p class="card-text">
                <font-awesome-icon icon="hand-rock" class="mr-2" /><b>Race:</b>
                {{ ed.race }}
              </p>
              <p class="card-text">
                <font-awesome-icon icon="money-bill" class="mr-2" /><b
                  >Salary per-year:</b
                >
                ${{ ed.salaryFrom }} - ${{ ed.salaryTo }}
              </p>
              <p class="card-text">
                <font-awesome-icon icon="money-bill" class="mr-2" /><b
                  >Salary per-year (male):</b
                >
                ${{ ed.maleSalaryFrom }} - ${{ ed.maleSalaryTo }}
              </p>
              <p class="card-text">{{ ed.description.slice(0, 150) }}...</p>
              <a :href="ed.companySocmed.instagram" class="card-link"
                >Instagram</a
              >
              <a :href="ed.companySocmed.twitter" class="card-link">Twitter</a>
              <a :href="ed.companySocmed.linkedin" class="card-link"
                >Linkedin</a
              >
              <a :href="ed.companySocmed.facebook" class="card-link"
                >Facebook</a
              >
            </div>
            <div class="card-footer">
              <!-- Button trigger modal -->
              <button
                type="button"
                class="btn btn-primary btn-detail w-100"
                data-toggle="modal"
                :data-target="`#exampleModal${ed.id}`"
              >
                Detail
              </button>
              <!-- Modal -->
              <div
                class="modal fade"
                :id="`exampleModal${ed.id}`"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-scrollable">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">
                        {{ ed.companyName }}
                        <span class="text-purple">{{ ed.companyCity }}</span>
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
                      <p>
                        <font-awesome-icon
                          icon="map-marker-alt"
                          class="mr-2"
                        /><b>Company Address:</b>
                        {{ ed.companyAddress }}
                      </p>
                      <p>
                        <font-awesome-icon icon="user-md" class="mr-2" /><b
                          >Position:</b
                        >
                        {{ ed.position }}
                      </p>
                      <p>
                        <font-awesome-icon icon="briefcase" class="mr-2" /><b
                          >Job type:</b
                        >
                        {{ ed.jobType }}
                      </p>
                      <p>
                        <font-awesome-icon icon="history" class="mr-2" /><b
                          >Years of work:</b
                        >
                        {{ ed.yearsOfWork }} Years
                      </p>
                      <p>
                        <font-awesome-icon icon="hand-rock" class="mr-2" /><b
                          >Race:</b
                        >
                        {{ ed.race }}
                      </p>
                      <p>
                        <font-awesome-icon icon="money-bill" class="mr-2" /><b
                          >Salary per-year:</b
                        >
                        ${{ ed.salaryFrom }} - ${{ ed.salaryTo }}
                      </p>
                      <p>
                        <font-awesome-icon icon="money-bill" class="mr-2" /><b
                          >Salary per-year (male):</b
                        >
                        ${{ ed.maleSalaryFrom }} - ${{ ed.maleSalaryTo }}
                      </p>
                      <p>
                        {{ ed.description }}
                      </p>
                      <a :href="ed.companySocmed.instagram" class="card-link"
                        >Instagram</a
                      >
                      <a :href="ed.companySocmed.twitter" class="card-link"
                        >Twitter</a
                      >
                      <a :href="ed.companySocmed.linkedin" class="card-link"
                        >Linkedin</a
                      >
                      <a :href="ed.companySocmed.facebook" class="card-link"
                        >Facebook</a
                      >
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
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

<script>
export default {
  data() {
    return {
      equalityDemands: [],
      isLoading: false,
    };
  },
  methods: {
    async loadEqualityDemands() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("equalityDemand/getEqualityDemand");
        this.equalityDemands = await this.$store.getters[
          "equalityDemand/equalityDemands"
        ];
        this.isLoading = false;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    document.title = "Equality Demand";
    this.loadEqualityDemands();
  },
};
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

.btn-detail {
  background-color: white;
  color: black;
  border-color: #b000ee;
}

.btn-detail:hover {
  background-color: #b000ee;
  color: white;
}

.btn-detail:focus {
  background-color: #b000ff !important;
  color: white;
}
</style>