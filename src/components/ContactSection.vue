<template>
  <section class="contact section container" id="contact">
    <div class="contact__container grid">
      <div class="contact__box">
        <h2 class="section__title">
          Reach out to us today <br />
          via any of the given <br />
          information
        </h2>

        <div class="contact__data">
          <div class="contact__information">
            <h3 class="contact__subtitle">Call us for instant support</h3>
            <span class="contact__description">
              <i class="ri-phone-line contact__icon"></i>
              +999 888 777
            </span>
          </div>

          <div class="contact__information">
            <h3 class="contact__subtitle">Write us by mail</h3>
            <span class="contact__description">
              <i class="ri-mail-line contact__icon"></i>
              user@email.com
            </span>
          </div>
        </div>
      </div>
        <ContactFormComponent />
    </div>
  </section>
</template>
<script>
import ContactFormComponent from "./ContactForm.vue";

export default {
    name: 'ContactSection',
    components: {
      ContactFormComponent
    }
}
</script>