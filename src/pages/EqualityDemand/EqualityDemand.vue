<template>
  <div>
    <!-- Feature introduction -->
    <section class="mt-5">
      <div class="row">
        <h1>Equality Demand</h1>
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
      <div class="row">
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
              <a href="#" class="btn btn-primary btn-detail w-100">Detail</a>
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
    };
  },
  methods: {
    async loadEqualityDemands() {
      try {
        await this.$store.dispatch("equalityDemand/getEqualityDemand");
        this.equalityDemands = await this.$store.getters[
          "equalityDemand/equalityDemands"
        ];
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    document.title = 'Equality Demand';
    this.loadEqualityDemands();
  },
};
</script>

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