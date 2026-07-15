<template>
  <q-card class="q-pa-lg q-mx-auto accent-card" style="max-width: 400px">
    <q-card-section>
      <div class="text-h4-italic text-center q-mt-sm">
        Have questions or looking to schedule coaching or an intro call?
      </div>
      <div class="text-h4-bold text-center">Let's connect!</div>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn
        color="primary"
        class="text-h4-alt calendly-btn"
        rounded
        label="Book on Calendly"
        @click="goToCalendly"
        unelevated
      />
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  name: "ScheduleCard",
  methods: {
    goToCalendly() {
      window.open("https://calendly.com/leah-reclaiming-balance", "_blank");
    },
  },
};
</script>

<style scoped>
.accent-card {
  background-color: #ddbea9ff;
  color: #333;
  border-radius: 24px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
}

.calendly-btn {
  font-weight: 700;
  padding: 0.5rem 1.25rem;
  border-radius: 999px;
}
</style>
