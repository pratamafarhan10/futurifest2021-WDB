<template>
  <div>
    <section class="mt-5">
      <div class="row">
        <h1>Share your story and demand for equality now</h1>
      </div>
    </section>

    

    <!-- form -->
    <section class="mt-4">
      <create-equality-demand-form></create-equality-demand-form>
    </section>
  </div>
</template>

<script>
import CreateEqualityDemandForm from '../../components/CreateEqualityDemandForm.vue';
export default {
  components: {
    CreateEqualityDemandForm
  },
  created() {
    document.title = "Create Equality Demand";
  },
};
</script>


<style scoped>
.text-purple {
  color: #a91adc;
}
</style>