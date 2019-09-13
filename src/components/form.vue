<template>
  <div class="card mt-5 mb-5">
    <h3>
      <div class="card-header">Form</div>
    </h3>
    <div class="card-body">
      <form name="details" class="form text-left" @submit.prevent="submitForm">
        <!-- First and Last name -->
        <div class="form-row">
          <div
            class="form-group col-md-6"
            :class="{ 'form-group--error': $v.details.firstname.$error }"
          >
            <label for="firstname" class="field text-info">First Name :</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              class="form-control"
              placeholder="enter your first name"
              v-model.trim="details.firstname"
              v-on:click="setName()"
            />

            <div
              class="error text-danger"
              v-if="!$v.details.firstname.required && $v.details.firstname.$error"
            >First name is required</div>
            <div
              class="error text-danger"
              v-if="!$v.details.firstname.minLength"
            >Name must have at least {{$v.details.firstname.$params.minLength.min}} letters.</div>
            <div
              class="error text-danger"
              v-if="!$v.details.firstname.maxLength"
            >Name must have at most {{$v.details.firstname.$params.maxLength.max}} letters.</div>
          </div>

          <div
            class="form-group col-md-6"
            :class="{ 'form-group--error': $v.details.lastname.$error }"
          >
            <label for="lastname" class="field text-info">Last Name :</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              class="form-control"
              placeholder="enter your last name"
              v-model="details.lastname"
              v-on:click="setLastName()"
            />

            <div
              class="error text-danger"
              v-if="!$v.details.lastname.required && $v.details.lastname.$error"
            >Last name is required</div>
            <div
              class="error text-danger"
              v-if="!$v.details.lastname.minLength"
            >Name must have at least {{$v.details.lastname.$params.minLength.min}} letters.</div>
            <div
              class="error text-danger"
              v-if="!$v.details.lastname.maxLength"
            >Name must have at most {{$v.details.lastname.$params.maxLength.max}} letters.</div>
          </div>
        </div>

        <!-- Email   -->
        <div class="form-group" :class="{ 'form-group--error': $v.details.email.$error }">
          <label for="email" class="field text-info">Email address :</label>
          <input
            type="email"
            class="form-control"
            placeholder="name@example.com"
            v-model="details.email"
            v-on:click="setEmail()"
          />

          <div
            class="error text-danger"
            v-if="!$v.details.email.required && $v.details.email.$error"
          >Email is required</div>
        </div>

        <!-- Password -->
        <div class="form-group" :class="{ 'form-group--error': $v.details.password.$error }">
          <label for="password" id="password" class="field text-info">Password :</label>
          <input
            type="password"
            class="form-control"
            placeholder="enter your password"
            v-model="details.password"
            v-on:click="setPassword()"
          />

          <div
            class="error text-danger"
            v-if="!$v.details.password.required && $v.details.password.$error"
          >Password is required</div>
          <small
            class="error"
            v-if="!$v.details.password.strongPassword && $v.details.password.$error"
          >Strong passwords need to have a letter, a number, a special character, and be more than 6 characters long.</small>
        </div>

        <!-- Confirm Password -->
        <!-- <div class="form-group" :class="{ 'form-group--error': $v.details.password2.$error }">
          <label for="password" id="password" class="field text-info">Confirm Password :</label>
          <input
            type="password"
            class="form-control"
            placeholder="enter your password"
            v-model="details.password"
            v-on:click="setPassword()"
          />

          <div
            class="error text-danger"
            v-if="!$v.details.password2.required"
          >Password is required</div>
          <small
            class="error"
            v-if="!$v.details.password2.sameAsPassword"
          >Strong passwords need to have a letter, a number, a special character, and be more than 6 characters long.</small>
        </div> -->

        <!-- Age -->
        <div class="form-group" :class="{ 'form-group--error': $v.details.age.$error }">
          <label for="age" class="field text-info">Age :</label>
          <input
            type="number"
            id="age"
            name="age"
            class="form-control"
            placeholder="enter your age"
            v-model="details.age"
            v-on:click="setAge()"
          />

          <div
            class="error text-danger"
            v-if="!$v.details.age.required && $v.details.age.$error"
          >Age is required</div>
          <small
            v-if="!$v.details.age.between"
          >Age must be between {{$v.details.age.$params.between.min}} and {{$v.details.age.$params.between.max}}</small>
        </div>
        <!-- Dropdown -->

        <div class="form-group" :class="{ 'form-group--error': $v.details.dropdown.$error }">
          <label for="dropdown" class="field text-info">Dropdown Select :</label>
          <select class="form-control" id="dropdown" v-model="details.dropdown">
            <option>abc</option>
            <option>pqr</option>
            <option>xyz</option>
            <option>mno</option>
            <option>abcd</option>
          </select>

          <!-- <div
            class="error"
            v-if="!$v.details.dropdown.required && $v.details.dropdown.$error"
          >Dropdown is required</div>-->
        </div>

        <!-- Multiple Select -->
        <div class="form-group" :class="{ 'form-group--error': $v.details.multipleselect.$error }">
          <label for="multipleselect" class="field text-info">Multiple select :</label>
          <select
            multiple
            class="form-control"
            id="multipleselect"
            v-model="details.multipleselect"
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>

          <div
            class="error text-danger"
            v-if="!$v.details.multipleselect.required && $v.details.multipleselect.$error"
          >Multiple Select is required</div>
        </div>

        <!-- Textarea -->
        <div class="form-group" :class="{ 'form-group--error': $v.details.textarea.$error }">
          <label for="textarea" class="field text-info">Textarea :</label>
          <textarea class="form-control textarea" id="textarea" rows="6" v-model="details.textarea" v-on:click="setTextarea()"></textarea>

          <div
            class="error text-danger"
            v-if="!$v.details.textarea.required && $v.details.textarea.$error"
          >Textarea is required</div>
        </div>

        <!-- File upload -->
        <!-- <div class="form-group" :class="{ 'form-group--error': $v.details.fileinput.$error }">
          <label for="fileinput" class="field text-info">File input :</label>
          <input type="file" class="form-control-file" id="fileinput" />

          <div
            class="error"
            v-if="!$v.details.fileinput.required && $v.details.fileinput.$error"
          >Please upload a file</div>
        </div>-->

        <!-- Checkbox -->
        <div class="field text-info">
          <label for="checkbox">Checkbox Question :</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" type="checkbox" value id="checkbox" />
          <label class="form-check-label mr-2" for="checkbox">Option 1</label>
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label mr-2" for="checkbox">Option 2</label>
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label mr-2" for="checkbox">Option 3</label>
        </div>
        <!-- <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="checkbox" />
          <label class="form-check-label" for="checkbox">Option 2</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value id="defaultCheck1" />
          <label class="form-check-label" for="checkbox">Option 3</label>
        </div> -->

        <!-- Radio button -->
        <div class="mt-2 field text-info">Radiobox Question :</div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radiobutton" id="radiobutton" v-model="details.radiobutton"
            v-on:click="setRadio()" />
          <label class="form-check-label" for="radiobutton">Option 1</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="radiobutton" id="radiobutton" v-model="details.radiobutton"
            v-on:click="setRadio()"/>
          <label class="form-check-label" for="radiobutton">Option 2</label>
        </div>
        
        <!-- Date -->
        <!-- <div class="form-group" >
          <label for="date" class="field text-info">Date :</label>
          <input
            type="date"
            id="date"
            name="date"
            class="form-control"
            placeholder="enter your age"
            
            </div>
        />-->        

        <!-- Submit and Reset buttons -->
        <div class="button mt-3">
          <button type="submit" class="btn btn-primary mr-3" v-on:click="submitForm()">Submit</button>
          <!-- <button v-promise-btn @click="getData">Get Data</button> -->
          <button type="reset" class="btn btn-danger" v-on:click="clearForm()">Reset</button>
          <!-- <button type="cancel" class="btn btn-danger mr-3" v-on:click="clearForm()">Cancel</button> -->
          <!-- <button :disabled='isDisabled'>Send Form</button> -->
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {
  required,
  minLength,
  maxLength,
  between,
  email
} from "vuelidate/lib/validators";

export default {
  name: "form",
  data() {
    return {
      details: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        password2: "",
        age: "",
        dropdown: "",
        multipleselect: "",
        textarea: "",
        fileinput: "",
        checkbox: "",
        radiobutton: ""
      }
    };
  },

  validations: {
    details: {
      firstname: {
        required,
        minLength: minLength(4),
        maxLength: maxLength(8)
      },
      lastname: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(10)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        strongPassword(password) {
          return (
            /[a-z]/.test(password) &&
            /[0-9]/.test(password) &&
            /\W|_/.test(password) &&
            password.length >= 6
          );
        }
      },

      // password2: {
      //   required,
      //   sameAsPassword: sameAs("password")
      // },
      age: {
        required,
        between: between(20, 30)
      },
      dropdown: {
        required
      },
      multipleselect: {
        required
      },
      textarea: {
        required
      },
      fileinput: {
        required
      },
      checkbox: {},
      radiobutton: {}
    }
  },

  methods: {
    clearForm() {
      /* Reset our form values */
      this.$v.$reset()
      this.details = ''
      //   this.$nextTick(() => {
      //   this.$v.$reset();
      // });
    },

    setName() {
      this.$v.details.firstname.$touch();
    },
    setLastName() {
      this.$v.details.lastname.$touch();
    },
    setEmail() {
      this.$v.details.email.$touch();
    },
    setPassword() {
      this.$v.details.password.$touch();
    },
    // setPassword2() {
    //   this.$v.details.password2.$touch();
    // },
    setAge() {
      this.$v.details.age.$touch();
    },
    setTextarea() {
      this.$v.details.textarea.$touch();
    },
    setRadio() {
      this.$v.details.radiobutton.$touch();
    },
    // onSubmit(details) {
    //   details.preventDefault();
    //   this.$v.details.firstname.$touch();
    // },
    submitForm(details) {
      
      details.preventDefault();
      this.$v.details.$touch();
      this.$toastr.warning("Error", "Please fill the required details");
      // this.$toastr.success("Thank you", "Submitted");
      

      // if (!$v.details.error) {
      //   this.$toastr.warning("Error", "Please fill the required details");
      // } else {
      //   this.$toastr.success("Thank you", "Submitted");
      // }
    }
  }
};
</script>

<style lang="scss">
// $gradient-primary: darkorange;
// $gradient-secondary: yellow;

// .main-form, .card {
//   background-image: linear-gradient(
//     to bottom right,
//     $gradient-primary,
//     $gradient-secondary 70%
//   );
// }

.field {
  font-weight: bold;
}

.card {
  margin: 0 auto;
  width: 500px;
}

</style>