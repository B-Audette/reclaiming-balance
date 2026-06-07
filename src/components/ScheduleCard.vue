<template>
  <q-card class="q-pa-lg q-mx-auto accent-card" style="max-width: 400px">
    <q-card-section>
      <div class="text-h6 text-center q-mt-sm">
        Have questions or looking to schedule coaching or an intro call?
      </div>
      <div class="text-h6 text-center">Let's connect!</div>
    </q-card-section>
    <q-card-actions align="center">
      <q-btn
        color="primary"
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
}
</style>
