<template>
  <section class="mt-5">
    <div class="row">
      <h1>Share your story and demand for equality now</h1>
    </div>
  </section>

  <div class="alert alert-danger" role="alert" v-if="formIsInvalid">
    {{ errorMessage == '' ? 'Form is invalid' : errorMessage }}
  </div>

  <!-- form -->
  <section class="mt-4">
    <h2 class="text-purple">Personal Information</h2>
    <p class="text-secondary">
      We'll never share your confidential information with anyone else.
    </p>
    <hr />
    <form @submit.prevent="submitEqualityDemand">
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            v-model="email"
            required
          />
        </div>
        <div class="form-group col-md-6">
          <label for="name">Your name</label>
          <input
            type="text"
            class="form-control"
            id="name"
            v-model="name"
            required
          />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="idCard">ID card</label>
          <input type="file" class="form-control-file" id="idCard" />
        </div>
        <div class="form-group col-md-6">
          <label for="idCard">Employee ID card</label>
          <input type="file" class="form-control-file" id="idCard" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="race">Your race or ethnicity</label>
          <input
            type="text"
            class="form-control"
            id="race"
            v-model="race"
            required
          />
          <small id="emailHelp" class="form-text text-muted"
            >eg: Black, Hispanics, Asian, etc</small
          >
        </div>
      </div>

      <h2 class="text-purple">Job Information</h2>
      <hr />

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
          <label for="position">Your position</label>
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
        <div class="form-group col-md-6">
          <label for="companyAddress">Company address</label>
          <textarea
            type="text"
            class="form-control"
            id="companyAddress"
            rows="3"
            v-model="companyAddress"
            required
          ></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="companyCity">Company city</label>
          <input
            type="text"
            class="form-control"
            id="companyCity"
            v-model="companyCity"
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
          <label for="yearsOfWork">Years of work</label>
          <input
            type="number"
            class="form-control"
            id="yearsOfWork"
            v-model="yearsOfWork"
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
        <label for="Description">Description</label>
        <textarea
          type="text"
          class="form-control"
          id="Description"
          rows="3"
          v-model="description"
          required
        ></textarea>
      </div>

      <div class="form-group">
        <label for="proof">Proof</label>
        <input type="file" class="form-control-file" id="proof" />
      </div>

      <h2 class="text-purple">Company Social Media</h2>
      <hr />

      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="companyInstagram">Instagram</label>
          <input
            type="text"
            class="form-control"
            id="companyInstagram"
            v-model="companySocmed.instagram"
          />
        </div>
        <div class="form-group col-md-3">
          <label for="companyTwitter">Twitter</label>
          <input
            type="text"
            class="form-control"
            id="companyTwitter"
            v-model="companySocmed.twitter"
          />
        </div>
        <div class="form-group col-md-3">
          <label for="companyLinkedin">Linkedin</label>
          <input
            type="text"
            class="form-control"
            id="companyLinkedin"
            v-model="companySocmed.linkedin"
          />
        </div>
        <div class="form-group col-md-3">
          <label for="companyFacebook">Facebook</label>
          <input
            type="text"
            class="form-control"
            id="companyFacebook"
            v-model="companySocmed.facebook"
          />
        </div>
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
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      name: "",
      race: "",
      companyName: "",
      position: "",
      companyAddress: "",
      companyCity: "",
      jobType: "",
      yearsOfWork: 0,
      salaryFrom: 0,
      salaryTo: 0,
      maleSalaryFrom: 0,
      maleSalaryTo: 0,
      description: "",
      companySocmed: {
        instagram: "",
        twitter: "",
        linkedin: "",
        facebook: "",
      },
      formIsInvalid: false,
      errorMessage: "",
    };
  },
  methods: {
    async submitEqualityDemand() {
      this.formIsInvalid = false;
      if (
        this.email == "" &&
        this.name == "" &&
        this.race == "" &&
        this.companyName == "" &&
        this.position == "" &&
        this.companyAddress == "" &&
        this.companyCity == "" &&
        this.jobType == "" &&
        this.yearsOfWork == 0 &&
        this.salaryFrom == 0 &&
        this.salaryTo == 0 &&
        this.maleSalaryFrom == 0 &&
        this.maleSalaryTo == 0 &&
        this.description == ""
      ) {
        this.formIsInvalid = true;
      } else {
        try {
          await this.$store.dispatch({
            type: "equalityDemand/storeEqualityDemand",
            email: this.email,
            name: this.name,
            race: this.race,
            companyName: this.companyName,
            position: this.position,
            companyAddress: this.companyAddress,
            companyCity: this.companyCity,
            jobType: this.jobType,
            yearsOfWork: this.yearsOfWork,
            salaryFrom: this.salaryFrom,
            salaryTo: this.salaryTo,
            maleSalaryFrom: this.maleSalaryFrom,
            maleSalaryTo: this.maleSalaryTo,
            description: this.description,
            companySocmed: this.companySocmed,
          });
          this.$router.push({ name: 'equality demand' });
        } catch (error) {
          this.errorMessage = error.message;
          this.formIsInvalid = true;
        }
      }
    },
  },
};
</script>


<style scoped>
.text-purple {
  color: #a91adc;
}
</style>