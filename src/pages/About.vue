<template>
  <q-page bg-color="#faefe1ff">
    <div class="q-pa-none bg-img-2" id="id_about">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm horizontal-padding" style="display: block">
          <div class="q-pa-lg">
            <div class="q-gutter-md q-mb-md q-row items-center">
              <q-avatar class="responsive-avatar">
                <img src="/images/Leah-Chouinard.jpg" />
              </q-avatar>
              <span class="text-h2-alt text-left text-white q-ml-md"
                >About Leah</span
              >
            </div>
            <p class="text-h4 text-center" style="color: white">
              Leah is a
              <a
                href="https://nbhwc.org/what-is-a-health-coach/"
                target="_blank"
                style="color: white; text-decoration: underline"
              >
                board-certified health coach (NBHWC)</a
              >
              with a deep passion for helping people see the best version of
              themselves and helping them take steps toward their desired life.
            </p>
            <br />
            <p class="text-h4 text-center" style="color: white">
              Through her compassion, humor, creativity, and fierce acceptance
              of people and their lived experiences, Leah has helped clients of
              all ages, genders, and health statuses reach - or appropriately
              refine - their goals and radiate more brightly than before.
            </p>
            <br />
            <p class="text-h4 text-center" style="color: white">
              Leah holds a master’s degree in
              <a
                href="https://csh.umn.edu/academics/degrees-minor-and-certificates/master-arts-degree-integrative-health-and-wellbeing"
                target="_blank"
                style="color: white; text-decoration: underline"
                >Integrative Health & Wellness Coaching</a
              >
              from the University of Minnesota.
            </p>
          </div>

          <br />
          <br />
          <br />
          <br />
        </div>
        <br />
      </div>
    </div>

    <div id="id_services">
      <div style="background-color: #000000ad !important; padding-bottom: 2em">
        <div class="q-px-sm col-12">
          <br />
          <h3 class="text-h3-content text-white text-center">Contact</h3>
          <schedule-card />
        </div>
      </div>
    </div>
    <q-toolbar
      class="flex flex-center text-white"
      style="background-color: #6b705cff"
      :style="'border-top: 2px solid ' + theme_color"
    >
    </q-toolbar>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { scroll, useMeta } from "quasar";
import ScheduleCard from "src/components/ScheduleCard.vue";

const { getScrollTarget, setVerticalScrollPosition } = scroll;

export default {
  name: "IndexPage",
  setup() {
    useMeta({
      title: "Reclaiming Balance",
      meta: {
        description: { name: "Reclaiming Balance" },
      },
    });

    return {
      tab: ref("upcoming"),
    };
  },
  components: {
    ScheduleCard,
  },
  data() {
    return {
      slide: 1,
      review_slide: "style",
      team_slide: 1,
      bg_color: "rgb(0, 163, 82)",
      hover: false,
      active: false,
      theme_color: "#cb997eff",
      primary_color: "#6b705cff",
      secondary_color: "#ddbea9ff",
      background_style: "background-color:rgba(107, 112, 92, 0.7);",
    };
  },
  methods: {
    scrollToElement(id) {
      let el = document.getElementById(id);
      const target = getScrollTarget(el);
      const offset = el.offsetTop + 2;
      const duration = 900;
      setVerticalScrollPosition(target, offset, duration);
    },
  },
};
</script>

<style lang="scss" scoped>
.horizontal-padding {
  padding-right: 10.5em;
  padding-left: 10.5em;

  @media screen and (max-width: 768px) {
    padding-right: 5.5em;
    padding-left: 5.5em;
  }

  @media screen and (max-width: 1024px) {
    padding-right: 5.5em;
    padding-left: 5.5em;
  }
  @media screen and (max-width: 767px) {
    padding-right: 0;
    padding-left: 0;
  }

  @media screen and (max-width: 430px) {
    padding-right: 0;
    padding-left: 0;
  }
  @media screen and (max-width: 400px) {
    padding-right: 0;
    padding-left: 0;
  }
}

.lightBackground {
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
}

.custom_tab {
  width: 150px;
  color: white;
  font-size: 20px;
}

.event-card {
  width: 50%;
  max-width: 300px;
}
.bg-img-2 {
  position: relative;
  /* Ensure stacking context for overlay */
}
.bg-img-2::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 50% black overlay */
  z-index: 1;
  pointer-events: none;
}
.bg-img-2 > * {
  position: relative;
  z-index: 2;
}
</style>
