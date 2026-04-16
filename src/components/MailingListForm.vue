<template>
  <div class="mailing-list-form q-pt-md q-pb-xl q-px-xl col-12 lightBackground">
    <q-form @submit.prevent="onSubmit" class="q-gutter-sm mailing-list-form">
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
      // default recipient set to desired address; can be changed later
      recipient: "leah@reclaiming-balance.com",
      firstName: "",
      lastName: "",
      subject: "",
      message: "",
    });

    const onSubmit = () => {
      // Compose a mailto: URL so the user's email client opens with the fields prefilled.
      // This is a client-side approach that doesn't require a backend. For
      // server-side or automated sending use EmailJS, Formspree, or your own API.

      const recipient =
        formData.value.recipient || "leah@reclaiming-balance.com";
      const subject =
        formData.value.subject ||
        `Message from ${formData.value.firstName} ${formData.value.lastName}`;

      const bodyLines = [
        `First Name: ${formData.value.firstName || "(not provided)"}`,
        `Last Name: ${formData.value.lastName || "(not provided)"}`,
        "",
        formData.value.message || "(no message provided)",
      ];

      const body = encodeURIComponent(bodyLines.join("\n"));
      const mailto = `mailto:${encodeURIComponent(
        recipient
      )}?subject=${encodeURIComponent(subject)}&body=${body}`;

      // Open the user's default mail client with the composed message
      window.location.href = mailto;

      $q.notify({
        color: "positive",
        message: "Opening your email client to send the message",
        icon: "send",
      });

      // Clear the form (optional)
      formData.value.firstName = "";
      formData.value.lastName = "";
      formData.value.subject = "";
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
