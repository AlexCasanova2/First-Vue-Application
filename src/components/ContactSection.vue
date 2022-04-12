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

      <form action="" class="contact__form">
        <div class="contact__inputs">
          <div class="contact__content">
            <input type="email" placeholder=" " class="contact__input" />
            <label for="" class="contact__label">Email</label>
          </div>

          <div class="contact__content">
            <input type="text" placeholder=" " class="contact__input" />
            <label for="" class="contact__label">Subject</label>
          </div>

          <div class="contact__content contact__area">
            <textarea
              name="message"
              placeholder=" "
              class="contact__input"
            ></textarea>
            <label for="" class="contact__label">Message</label>
          </div>
        </div>

        <button class="button button--flex">
          Send Message
          <i class="ri-arrow-right-up-line button__icon"></i>
        </button>
      </form>
    </div>
  </section>
</template>
<script>
export default {
    name: 'ContactSection'
}
</script>