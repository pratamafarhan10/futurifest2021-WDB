<template>
  <div>
    <section class="mt-5">
      <div class="row">
        <h1>Share your jobs for women around the world</h1>
      </div>
    </section>
    <hr />

    <div class="alert alert-danger" role="alert" v-if="formIsInvalid">
      {{ errorMessage == "" ? "Form is invalid" : errorMessage }}
    </div>

    <!-- form -->
    <section class="mt-4">
      <create-jobs-form></create-jobs-form>
    </section>
  </div>
</template>

<script>
import CreateJobsForm from '../../components/CreateJobsForm.vue';

export default {
  components: {
    CreateJobsForm
  },
  created() {
    document.title = "Create Jobs For Women";
  },
};
</script>