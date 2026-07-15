<template>
  <q-layout view="lHh lpr lFf" style="background-color: #f8efe8ff">
    <q-header
      class="q-py-md"
      style="background-color: #faefe1ff"
      :style="'border-bottom: 2px solid ' + '#6b705cff'"
    >
      <q-toolbar class="header-body">
        <q-toolbar-title
          class="text-header-clickable"
          style="background-color: #faefe1ff"
          id="id_home"
          @click="navigate('Home')"
        >
          <q-avatar class="q-mr-md" size="50px" style="padding-bottom: 0.5em">
            <img src="/images/logo.png" />
          </q-avatar>
          <span
            class="text-h3-title q-mr-md"
            style="color: #5d5047ff"
            id="id_home"
            clickable
            @click="navigate('Home')"
            >Reclaiming Balance</span
          >
        </q-toolbar-title>
        <!-- Row of links for big screens -->
        <div
          class="row items-center header-text-link gt-sm"
          v-show="$q.screen.width > 1085"
        >
          <q-btn
            class="header-text-link"
            flat
            label="Meet Leah"
            @click="navigate('About', 'id_about')"
          />
          <q-btn
            class="header-text-link"
            flat
            label="Philosophy"
            @click="navigate('CoachingPhilosophy', 'id_coaching_philosophy')"
          />
          <q-btn
            class="header-text-link"
            flat
            label="Services"
            @click="navigate('Services', 'id_services')"
          />
          <q-btn
            class="header-text-link"
            flat
            label="What Is Integrative Coaching?"
            @click="navigate('WhatIsCoaching', 'id_what_is_coaching')"
          />
        </div>

        <!-- Hamburger time for small dimensions -->
        <q-btn
          v-show="$q.screen.width < 1085"
          flat
          dense
          round
          icon="menu"
          style="color: #5d5047ff !important"
          @click="drawer = !drawer"
        />
      </q-toolbar>
    </q-header>

    <!-- Flower Drawer Time -->
    <q-drawer
      v-model="drawer"
      side="right"
      bordered
      :breakpoint="1085"
      class="drawer-body-background-img"
    >
      <q-list>
        <q-item
          clickable
          @click="
            navigate('About', 'id_about');
            drawer = false;
          "
        >
          <q-item-section>
            <q-item-label>Meet Leah</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          @click="
            navigate('CoachingPhilosophy', 'id_coaching_philosophy');
            drawer = false;
          "
        >
          <q-item-section>
            <q-item-label>Coaching Philosophy</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          @click="
            navigate('Services', 'id_services');
            drawer = false;
          "
        >
          <q-item-section>
            <q-item-label>Services</q-item-label>
          </q-item-section>
        </q-item>

        <q-item
          clickable
          @click="
            navigate('WhatIsCoaching', 'id_what_is_coaching');
            drawer = false;
          "
        >
          <q-item-section>
            <q-item-label>What Is Integrative Coaching?</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
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

  data() {
    return {
      drawer: false,
    };
  },

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
