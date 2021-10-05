<template>
  <section class="mt-5">
    <div class="row">
      <h1>Share your story and demand for equality now</h1>
    </div>
  </section>

  <!-- form -->
  <section class="mt-4">
    <h2 class="text-purple">Personal Information</h2>
    <p class="text-secondary">
      We'll never share your confidential information with anyone else.
    </p>
    <hr />
    <form>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="form-group col-md-6">
          <label for="name">Your name</label>
          <input type="text" class="form-control" id="name" />
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
          <label for="name">Your race or ethnicity</label>
          <input type="text" class="form-control" id="name" />
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
          <input type="text" class="form-control" id="companyName" />
        </div>
        <div class="form-group col-md-6">
          <label for="position">Your position</label>
          <input type="text" class="form-control" id="position" />
          <small id="emailHelp" class="form-text text-muted"
            >eg: Head of product, software engineer, etc</small
          >
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="companyName">Company address</label>
          <textarea
            type="text"
            class="form-control"
            id="companyName"
            rows="3"
          ></textarea>
        </div>
        <div class="form-group col-md-6">
          <label for="companyCity">Company city</label>
          <input type="text" class="form-control" id="companyCity" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="jobType">Job type</label>
          <select class="form-control" id="jobType">
            <option>Full time</option>
            <option>Part time</option>
          </select>
        </div>
        <div class="form-group col-md-6">
          <label for="yearsOfWork">Years of work</label>
          <input type="number" class="form-control" id="yearsOfWork" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group col-md-3">
          <label for="salaryFrom">Salary per year (from)</label>
          <input type="number" class="form-control" id="salaryFrom" />
        </div>
        <div class="form-group col-md-3">
          <label for="salaryTo">Salary per year (to)</label>
          <input type="number" class="form-control" id="salaryTo" />
        </div>
        <div class="form-group col-md-3">
          <label for="maleSalaryFrom">Salary per year male worker (from)</label>
          <input type="number" class="form-control" id="maleSalaryFrom" />
        </div>
        <div class="form-group col-md-3">
          <label for="maleSalaryTo">Salary per year male worker (to)</label>
          <input type="number" class="form-control" id="maleSalaryTo" />
        </div>
      </div>

      <div class="form-group">
        <label for="Description">Description</label>
        <textarea
          type="text"
          class="form-control"
          id="Description"
          rows="3"
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
          <input type="text" class="form-control" id="companyInstagram" />
        </div>
        <div class="form-group col-md-3">
          <label for="companyTwitter">Twitter</label>
          <input type="text" class="form-control" id="companyTwitter" />
        </div>
        <div class="form-group col-md-3">
          <label for="companyLinkedin">Linkedin</label>
          <input type="text" class="form-control" id="companyLinkedin" />
        </div>
        <div class="form-group col-md-3">
          <label for="companyFacebook">Facebook</label>
          <input type="text" class="form-control" id="companyFacebook" />
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


<style scoped>
.text-purple {
  color: #a91adc;
}
</style>