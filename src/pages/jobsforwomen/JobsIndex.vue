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
      <loading-spinner  v-if="isLoading"></loading-spinner>
      <div class="row" v-else>
        <jobs-card v-for="job in jobs" :key="job.id" :job="job"></jobs-card>
      </div>
    </section>
  </div>
</template>

<script>
import JobsCard from '../../components/JobsCard.vue';
export default {
  components: {
    JobsCard
  },
  data() {
    return {
      jobs: [],
      isLoading: false,
    };
  },
  methods: {
    async loadJobs() {
      this.isLoading = true;
      try {
        await this.$store.dispatch("jobs/getJobs");
        this.jobs = await this.$store.getters["jobs/jobs"];
        this.isLoading = false;
      } catch (error) {
        console.log(error.message);
      }
    },
  },
  created() {
    document.title = "Jobs For Women";
    this.loadJobs();
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
</style>