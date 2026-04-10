<template>
  <div class="mailing-list-form q-pt-md q-pb-xl q-px-xl col-12 lightBackground">
    <q-form @submit="onSubmit" class="q-gutter-sm mailing-list-form">
      <q-input
        class="q-col-2 email-input"
        filled
        bg-color="white"
        v-model="formData.firstName"
        label="First Name"
        :rules="[(val) => !!val || 'First name is required']"
      />
      <q-input
        class="q-col-2 email-input"
        filled
        bg-color="white"
        v-model="formData.lastName"
        label="Last Name"
        :rules="[(val) => !!val || 'Last name is required']"
      />

      <q-input
        class="email-input"
        filled
        bg-color="white"
        v-model="formData.subject"
        label="Subject"
        :rules="[(val) => !!val || 'Subject is required']"
      />

      <q-input
        class="email-input"
        filled
        bg-color="white"
        v-model="formData.message"
        label="Message Content"
        type="textarea"
        rows="5"
        :rules="[(val) => !!val || 'Message content is required']"
      />

      <q-card-actions>
        <q-btn
          class="q-pa-md"
          rounded
          label=" Send Email "
          type="submit"
          color="accent"
        />
      </q-card-actions>
    </q-form>
  </div>
</template>
<script>
import { defineComponent, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "EmailForm",
  setup() {
    const $q = useQuasar();
    const formData = ref({
      recipient: "",
      firstName: "",
      lastName: "",
      message: "",
    });

    const onSubmit = () => {
      // In a real application, you would send this data to a backend server
      // for processing and sending the email.
      // For demonstration, we'll just show a notification.

      console.log("Form Data:", formData.value);

      $q.notify({
        color: "positive",
        message: "Email submitted successfully (backend integration needed)",
        icon: "check_circle",
      });

      // Optionally, clear the form after submission
      formData.value.recipient = "";
      formData.value.firstName = "";
      formData.value.lastName = "";
      formData.value.message = "";
    };

    return {
      formData,
      onSubmit,
    };
  },
});
</script>

<style lang="scss" scoped>
.mailing-list-form {
  max-width: 1050px;
  margin: 0 auto;
  border-radius: 22px !important;

  .email-input {
    margin-bottom: 0.75em !important;
    border-radius: 20px !important;

    @media screen and (min-width: 600px) {
      margin-bottom: 0;
      margin-right: 0.5em;
    }
  }
}
</style>
