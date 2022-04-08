<template>
  <section id="contact">
    <div class="text-center mt-5">
      <h2>Contact Us</h2>
      <Loader v-if="isLoading" />
      <div v-else>
        <Alert
          v-if="hasErrors || successAlert"
          :type="hasErrors ? 'danger' : 'success'"
        >
          <div v-if="successAlert">{{ successAlert }}</div>
          <ul v-if="hasErrors">
            <li v-for="(error, key) in errors" :key="key">
              {{ error }}
            </li>
          </ul>
        </Alert>
        <!--# FORM -->
        <div class="form-container mx-auto">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              v-model.trim="form.email"
              id="email"
              type="email"
              class="form-control"
            />
            <small class="form-text text-muted">Inserisci la tua mail</small>
          </div>
          <div class="form-group">
            <label for="message">Messaggio</label>
            <textarea
              v-model.trim="form.message"
              class="form-control"
              id="message"
              rows="8"
            ></textarea>
            <small class="form-text text-muted"
              >Inserisci il tuo messaggio</small
            >
          </div>
          <button @click="sendForm()" class="btn btn-success px-4">
            INVIA
          </button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Loader from "../Loader.vue";
import Alert from "../Alert.vue";
export default {
  name: "Contact",
  components: {
    Loader,
    Alert,
  },
  data() {
    return {
      form: {
        email: "",
        message: "",
      },
      successAlert: null,
      isLoading: false,
      errors: {},
    };
  },
  computed: {
    hasErrors() {
      return !isEmpty(this.errors);
    },
  },
  methods: {
    validateForm() {
      const errors = {};
      if (!this.form.email) errors.email = "La Mail è obbligatoria";
      if (!this.form.message)
        errors.message = "Il testo del messaggio è obbligatorio";
      if (
        this.form.email &&
        !this.form.email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
      )
        errors.email = "La mail non è valida";
      this.errors = errors;
    },
    sendForm() {
      this.validateForm();
      if (!this.hasErrors) {
        this.isLoading = true;
        axios
          .post("http://localhost:8000/api/sendmail", this.form)
          .then((res) => {
            this.form.email = "";
            this.form.message = "";
            this.successAlert = "Messaggio inviato con successo";
          })
          .catch((err) => {
            console.error(err);
          })
          .then(() => {
            this.isLoading = false;
          });
      }
    },
  },
};
</script>
<style>
</style>