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
      <loading-spinner  v-if="isLoading"></loading-spinner>
      <div class="row" v-else>
        <equality-demands-card v-for="ed in equalityDemands"
          :key="ed.id" :ed="ed"></equality-demands-card>
      </div>
    </section>
  </div>
</template>

<script>
import EqualityDemandsCard from '../../components/EqualityDemandsCard.vue';
export default {
  components: {
    EqualityDemandsCard
  },
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

.btn-purple:hover {
  background-color: #b000ee;
}
</style>