<template>
  <form @submit.prevent="submitJob">
    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="companyName">Company name</label>
        <input
          type="text"
          class="form-control"
          id="companyName"
          v-model="companyName"
          required
        />
      </div>
      <div class="form-group col-md-6">
        <label for="position">Position</label>
        <input
          type="text"
          class="form-control"
          id="position"
          v-model="position"
          required
        />
        <small id="emailHelp" class="form-text text-muted"
          >eg: Head of product, software engineer, etc</small
        >
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-4">
        <label for="companyWebsite">Company website</label>
        <input
          type="text"
          class="form-control"
          id="companyWebsite"
          rows="3"
          v-model="companyWebsite"
          required
        />
      </div>
      <div class="form-group col-md-4">
        <label for="companyCity">Company city</label>
        <input
          type="text"
          class="form-control"
          id="companyCity"
          v-model="companyCity"
          required
        />
      </div>
      <div class="form-group col-md-4">
        <label for="applyUrl">Apply URL</label>
        <input
          type="text"
          class="form-control"
          id="applyUrl"
          v-model="applyUrl"
          required
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-6">
        <label for="jobType">Job type</label>
        <select class="form-control" id="jobType" v-model="jobType" required>
          <option value="Full time">Full time</option>
          <option value="Part time">Part time</option>
        </select>
      </div>
      <div class="form-group col-md-6">
        <label for="role">Role</label>
        <input
          type="text"
          class="form-control"
          id="role"
          v-model="role"
          required
        />
      </div>
    </div>

    <div class="form-row">
      <div class="form-group col-md-3">
        <label for="salaryFrom">Salary per year (from)</label>
        <input
          type="number"
          class="form-control"
          id="salaryFrom"
          v-model="salaryFrom"
          required
        />
        <small id="emailHelp" class="form-text text-muted"
          >Please use $USD currency</small
        >
      </div>
      <div class="form-group col-md-3">
        <label for="salaryTo">Salary per year (to)</label>
        <input
          type="number"
          class="form-control"
          id="salaryTo"
          v-model="salaryTo"
          required
        />
      </div>
      <div class="form-group col-md-3">
        <label for="maleSalaryFrom">Salary per year male worker (from)</label>
        <input
          type="number"
          class="form-control"
          id="maleSalaryFrom"
          v-model="maleSalaryFrom"
          required
        />
      </div>
      <div class="form-group col-md-3">
        <label for="maleSalaryTo">Salary per year male worker (to)</label>
        <input
          type="number"
          class="form-control"
          id="maleSalaryTo"
          v-model="maleSalaryTo"
          required
        />
      </div>
    </div>

    <div class="form-group">
      <label for="jobDesc">Job description</label>
      <textarea
        type="text"
        class="form-control"
        id="jobDesc"
        rows="3"
        v-model="jobDesc"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="responsibility">Responsibility</label>
      <textarea
        type="text"
        class="form-control"
        id="responsibility"
        rows="3"
        v-model="responsibility"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="lookingFor">Looking For</label>
      <textarea
        type="text"
        class="form-control"
        id="lookingFor"
        rows="3"
        v-model="lookingFor"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="bonusPoint">Bonus Point</label>
      <textarea
        type="text"
        class="form-control"
        id="bonusPoint"
        rows="3"
        v-model="bonusPoint"
        required
      ></textarea>
    </div>

    <div class="form-group">
      <label for="offering">Offering</label>
      <textarea
        type="text"
        class="form-control"
        id="offering"
        rows="3"
        v-model="offering"
        required
      ></textarea>
    </div>

    <div class="form-group d-flex justify-content-center">
      <router-link
        class="btn btn-danger"
        style="width: 200px"
        to="/equality-demand"
        >Cancel</router-link
      >
      <button type="submit" class="btn btn-primary ml-2" style="width: 200px">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      position: "",
      companyName: "",
      companyCity: "",
      companyWebsite: "",
      applyUrl: "",
      jobType: "",
      experienceLevel: "",
      role: "",
      jobDesc: "",
      responsibility: "",
      lookingFor: "",
      bonusPoint: "",
      offering: "",
      salaryFrom: 0,
      salaryTo: 0,
      maleSalaryFrom: 0,
      maleSalaryTo: 0,
      formIsInvalid: false,
      errorMessage: "",
    };
  },
  methods: {
    async submitJob() {
      this.formIsInvalid = false;
      if (
        this.position == "" &&
        this.companyName == "" &&
        this.companyCity == "" &&
        this.companyWebsite == "" &&
        this.applyUrl == "" &&
        this.jobType == "" &&
        this.experienceLevel == "" &&
        this.role == "" &&
        this.jobDesc == "" &&
        this.responsibility == "" &&
        this.lookingFor == "" &&
        this.bonusPoint == "" &&
        this.offering == "" &&
        this.salaryFrom == 0 &&
        this.salaryTo == 0 &&
        this.maleSalaryFrom == 0 &&
        this.maleSalaryTo == 0
      ) {
        this.formIsInvalid = true;
      } else {
        try {
          await this.$store.dispatch({
            type: "jobs/storeJobs",
            position: this.position,
            companyName: this.companyName,
            companyCity: this.companyCity,
            companyWebsite: this.companyWebsite,
            applyUrl: this.applyUrl,
            jobType: this.jobType,
            experienceLevel: this.experienceLevel,
            role: this.role,
            jobDesc: this.jobDesc,
            responsibility: this.responsibility,
            lookingFor: this.lookingFor,
            bonusPoint: this.bonusPoint,
            offering: this.offering,
            salaryFrom: this.salaryFrom,
            salaryTo: this.salaryTo,
            maleSalaryFrom: this.maleSalaryFrom,
            maleSalaryTo: this.maleSalaryTo,
          });
          this.$router.push({ name: "jobs index" });
        } catch (error) {
          this.errorMessage = error.message;
          this.formIsInvalid = true;
        }
      }
    },
  },
};
</script>