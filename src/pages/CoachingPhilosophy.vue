<template>
  <q-page class="horizontal-padding" bg-color="#faefe1ff">
    <div class="q-pa-none bg-img-3" id="id_coaching_philosophy">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm" style="display: block">
          <div class="q-pa-lg">
            <p class="text-h2-alt text-center" style="color: white">
              Reclaiming Balance Philosophy
            </p>
            <div class="flex flex-center"></div>
            <p class="text-h4 text-center" style="color: white">
              Feeling hopeless, exhausted, lonely, stressed, frustrated, or
              in-pain? I get it.
              <a
                @click="$router.push('/about')"
                style="
                  color: white;
                  text-decoration: underline;
                  cursor: pointer;
                "
              >
                I’ve been there</a
              >
              , and it’s these very experiences that propelled me to pursue my
              passion: being there for others going through troubling times so
              they can uncover their inner strength, rediscover hope, and pave a
              new path forward - a path that serves each person and their
              greatest good.
            </p>
            <br />
            <p class="text-h4 text-center" style="color: white">
              Messaging from society sometimes tells a different story, saying
              that a vibrant life isn’t possible with certain health conditions
              or during specific life chapters, or worse, because of one’s
              personality traits, environment, occupation, or past experiences.
            </p>
            <br />
            <p class="text-h4 text-center" style="color: white">
              Limitations and negativity are everywhere these days, but at
              Reclaiming Balance, we aim to dispel all of that and focus on what
              is possible and what is GOOD! Hopelessness, grim diagnoses, and
              exhaustion can keep us from recognizing that a better life not
              only exists, but is possible to attain. At Reclaiming Balance, we
              believe that wherever you find yourself on your life’s journey,
              you CAN reclaim a lifestyle that feels balanced and elicits
              well-being.
            </p>
          </div>
        </div>
        <br />
      </div>
    </div>

    <div id="id_services">
      <div style="background-color: #000000ad !important; padding-bottom: 2em">
        <div class="q-px-sm col-12">
          <br />
          <div class="q-mb-md flex flex-center">
            <q-avatar rounded size="200px">
              <img src="/images/logo.png" />
            </q-avatar>
          </div>
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

.bg-img-3 {
  position: relative;
  /* Ensure stacking context for overlay */
}
.bg-img-3::before {
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
.bg-img-3 > * {
  position: relative;
  z-index: 2;
}
</style>
