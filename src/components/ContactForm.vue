<template>
  <form action="" class="contact__form" @submit.prevent="showContact()">
    <div class="contact__inputs">
      <div class="contact__content">
        <input
          type="email"
          placeholder=" "
          class="contact__input"
          v-model="contact.email"
        />
        <div v-if="submitted && !$v.contact.email.required">
          This field is required
        </div>
        <div v-if="submitted && !$v.contact.email.minLength">
          This field is min 2 characters
        </div>
        <label for="" class="contact__label">Email</label>
      </div>

      <div class="contact__content">
        <input
          type="text"
          placeholder=" "
          class="contact__input"
          v-model="contact.subject"
        />
        <div v-if="submitted && !$v.contact.subject.required">
          This field is required
        </div>
        <div v-if="submitted && !$v.contact.subject.minLength">
          This field is min 2 characters
        </div>
        <label for="" class="contact__label">Subject</label>
      </div>

      <div class="contact__content contact__area">
        <textarea
          name="message"
          placeholder=" "
          class="contact__input"
          v-model="contact.message"
        ></textarea>
        <div v-if="submitted && !$v.contact.message.required">
          This field is required
        </div>
        <div v-if="submitted && !$v.contact.message.minLength">
          This field is min 2 characters
        </div>
        <label for="" class="contact__label">Message</label>
      </div>
    </div>

    <button class="button button--flex">
      Send Message
      <i class="ri-arrow-right-up-line button__icon"></i>
    </button>
  </form>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";

export default {
  name: "ContactFormComponent",
  validations: {
    contact: {
      email: {
        required,
        minLength: minLength(2),
      },
      subject: {
        required,
        minLength: minLength(2),
      },
      message: {
        required,
        minLength: minLength(2),
      },
    },
  },
  data() {
    return {
      submitted: false,
      contact: {
        email: "",
        subject: "",
        message: "",
      },
    };
  },
  methods: {
    showContact() {
      console.log(this.contact);
      this.submitted = true;
      console.log(this.submitted);
      //this.$v.$touch();
    },
  },
};
</script>