<template>
  <q-page class="horizontal-padding" bg-color="#faefe1ff">
    <div class="q-pa-none bg-img-4" id="id_services">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm" style="display: block">
          <div class="q-pa-lg">
            <div class="q-gutter-md q-mb-md q-row items-center">
              <p class="text-h2-alt text-center q-ml-mdt">Services</p>
            </div>
          </div>
        </div>
        <br />
      </div>
    </div>
    <div style="background-color: #ddbea9ff !important" id="id_services">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm" style="display: block">
          <div class="q-pa-lg">
            <div class="q-gutter-md q-mb-md q-row items-center">
              <p class="text-h3-bold text-left">
                Individual/private coaching sessions
              </p>
              <p class="text-h2-bold text-left">
                In a 1:1 setting, either virtually or in-person, I’ll use a
                variety of questions and explorational activities to help you
                identify your values and well-being vision, work through your
                struggles, and step into the next version of yourself and the
                life you’ve been dreaming of. Not sure what your vision looks
                like yet? Let’s explore that in one of your first sessions!
              </p>
            </div>

            <p class="text-h3-bold text-left" style="color: white">
              Group Health Coaching
            </p>

            <p class="text-h2-bold text-center">
              Experience your personal transformation alongside 4-8 others as
              group members give and receive support and advice from one other
              in the safety of a caring and confidential space guided by Leah.
              Groups are formed based on the demographics, conditions, and goals
              of individuals.
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

    <div style="background-color: #cbd2bbff !important">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm" style="display: block">
          <div class="q-pa-lg">
            <div class="q-gutter-md q-mb-md q-row items-center">
              <p class="text-h3-bold text-left">
                Individual/private coaching sessions
              </p>
              <p class="text-h2-bold text-left">
                In a 1:1 setting, either virtually or in-person, I’ll use a
                variety of questions and explorational activities to help you
                identify your values and well-being vision, work through your
                struggles, and step into the next version of yourself and the
                life you’ve been dreaming of. Not sure what your vision looks
                like yet? Let’s explore that in one of your first sessions!
              </p>
            </div>

            <p class="text-h3-bold text-left" style="color: white">
              Group Health Coaching
            </p>

            <p class="text-h2-bold text-center">
              Experience your personal transformation alongside 4-8 others as
              group members give and receive support and advice from one other
              in the safety of a caring and confidential space guided by Leah.
              Groups are formed based on the demographics, conditions, and goals
              of individuals.
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
          <h3 class="text-h3-alt text-white text-center">Contact</h3>
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
.bg-img-4 {
  position: relative;
  /* Ensure stacking context for overlay */
}
.bg-img-4::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.502); /* 50% white overlay */
  z-index: 1;
  pointer-events: none;
}
.bg-img-4 > * {
  position: relative;
  z-index: 2;
}
</style>
