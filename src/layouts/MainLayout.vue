<template>
  <q-layout view="lHh lpr lFf" style="background-color: #f8efe8ff">
    <q-header
      class="q-py-md"
      style="background-color: #faefe1ff"
      :style="'border-bottom: 2px solid ' + '#6b705cff'"
    >
      <q-toolbar class="justify-between" style="background-color: #faefe1ff">
        <q-avatar>
          <img src="/images/logo.png" />
        </q-avatar>
        <span
          class="text-h3 q-mr-md"
          style="color: #5d5047ff"
          id="id_home"
          clickable
          @click="navigate('Home')"
          >Reclaiming Balance</span
        >
        <q-btn stretch flat icon="menu" style="color: #5d5047ff">
          <q-menu style="background-color: #faefe1ff" auto-close>
            <q-list class="q-mr-sm q-py-xs custom_tab">
              <q-item clickable @click="navigate('About', 'id_about')">
                <q-item-section class="event-label" style="color: #5d5047ff">
                  <q-item-label>Meet Leah</q-item-label>
                </q-item-section>
              </q-item>

              <q-item
                clickable
                @click="
                  navigate('CoachingPhilosophy', 'id_coaching_philosophy')
                "
              >
                <q-item-section class="event-label" style="color: #5d5047ff">
                  <q-item-label>Coaching Philosophy</q-item-label>
                </q-item-section>
              </q-item>

              <q-item clickable @click="navigate('Home', 'id_services')">
                <q-item-section class="event-label" style="color: #5d5047ff">
                  <q-item-label>Services</q-item-label>
                </q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { scroll } from "quasar";
import { useRoute, useRouter } from "vue-router";

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default defineComponent({
  name: "MainLayout",

  setup() {
    const route = useRoute();
    const router = useRouter();

    return {
      route,
      router,
      theme_color: "#cb997eff",
    };
  },

  methods: {
    navigate(navRouteName, id) {
      // If the current route is "Home" and the item that we're navigating to is part
      // of "Home," scroll to the element on the page. Otherwise, push
      // new page onto router.
      if (this.route.name === "Home" && navRouteName === "Home") {
        this.scrollToElement(id);
      } else {
        this.router.push({ name: navRouteName });
      }
    },
    scrollToElement(id) {
      let el = document.getElementById(id);
      const target = getScrollTarget(el);
      const offset = el.offsetTop + 2;
      const duration = 900;
      setVerticalScrollPosition(target, offset, duration);
    },
  },
});
</script>
