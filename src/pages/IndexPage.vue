<template>
  <q-page bg-color="#faefe1ff">
    <div class="q-pa-none bg-img" id="home">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm horizontal-padding" style="display: block">
          <div class="q-pa-lg">
            <p class="text-h2-alt text-center" style="color: white">
              Welcome to Reclaiming Balance
            </p>
            <p class="q-pb-xl text-h4-bold text-center" style="color: white">
              where you get to reclaim your unique sense of well-being and live
              life to the fullest through personalized coaching and holistic
              support.
            </p>
          </div>
          <div class="spacer"></div>
        </div>
        <br />
      </div>
    </div>

    <div id="id_meet_leah">
      <div style="background-color: #ddbea9ff !important">
        <div class="q-px-xl col-12">
          <br />
          <h3 class="text-h3-content text-center" style="margin-bottom: 0.5em">
            Take a breath.
          </h3>
          <h3 class="text-h3-content text-center" style="margin-bottom: 0.5em">
            Relax your shoulders.
          </h3>
          <h3 class="text-h3-content text-center" style="margin-bottom: 0.5em">
            It’s time to focus on YOU as you reclaim the well-being that is
            rightfully yours.
          </h3>
          <div class="q-py-sm q-px-sm text-left text-h4"></div>
          <div class="col-6 q-py-lg"></div>
        </div>
      </div>
      <div
        class="row flex flex-center"
        style="background-color: #000000ad !important"
      ></div>
    </div>

    <div class="q-pa-none bg-img-5 horizontal-padding" id="home">
      <div class="col-12">
        <br />
        <div class="q-py-xl q-px-sm">
          <div class="q-pa-lg">
            <p class="text-h4 text-center" style="color: white">
              We all come into this world with a natural sense of well-being.
              Without conscious thought, we grew from a cluster of simple cells
              into a complex, living, loving, thinking, human being.
            </p>
            <p class="text-h4 text-center" style="color: white">
              Along the path of life, however, we collect health-harming toxins,
              habits, and experiences that, collectively, strip away the vibrant
              health that was ours to begin with.
            </p>
            <p class="text-h4 text-center" style="color: white">
              Integrative health coaching aims to reconnect you with your truest
              self. Your happiest self. Your healthiest self. Your most
              purposeful self. How we get there depends on YOUR life story,
              circumstances, values, and goals. Unique to every person, it can
              be the most meaningful journey one can embark on.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div style="background-color: #333333">
      <div class="q-pa-none bg-img-2 horizontal-padding">
        <div class="col-12">
          <br />
          <div>
            <p class="text-h3-content text-center text-white q-py-sm">
              Meet Leah
            </p>
          </div>
          <div class="q-px-sm">
            <div class="q-pa-none" id="home"></div>
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
          <p class="text-h4 text-center">
            <a
              @click="$router.push('/about')"
              style="color: white; text-decoration: underline; cursor: pointer"
            >
              Read more about Leah’s health story and journey toward healing
              here</a
            >
          </p>
          <br />
        </div>
        <div class="flex flex-center">
          <img
            src="/images/leahleafy.jpeg"
            class="responsive-img"
            style="max-width: 70%; border-radius: 22px"
          />
        </div>
        <br />
        <br />
      </div>
    </div>

    <div id="id_home">
      <div style="background-color: #6b705cff !important">
        <div class="q-px-xl col-12 horizontal-padding">
          <br />
          <h3
            class="text-h3-content text-center text-white"
            style="margin-bottom: 0.25em"
          >
            Reclaiming Balance Philosophy
          </h3>
          <div class="q-py-sm q-px-sm text-center text-white text-h4">
            Over time, life bombards us with hardship and harmful
            encounters–physically, emotionally, spiritually, occupationally, and
            more. After so many hits, it begins to feel like you can’t get back
            up again. Hopelessness, grim diagnoses, and exhaustion can keep us
            from recognizing that a better life not only exists, but is
            possible. No matter what you’ve been through, what labels you carry,
            or how you’ve been perceived by others, you can ALWAYS reclaim who
            you truly are: light, love, and well-being.
          </div>
          <p class="text-h4 text-center">
            <a
              @click="$router.push('/coaching-philosophy')"
              style="color: white; text-decoration: underline; cursor: pointer"
            >
              Read more about the Reclaiming Balance Philosophy here</a
            >
          </p>
          <div class="col-6 q-py-lg q-px-lg">
            <q-img
              src="/images/stack.jpeg"
              class="responsive-img"
              style="border-radius: 22px"
            >
            </q-img>
          </div>
        </div>
      </div>
      <div
        class="row flex flex-center"
        style="background-color: #000000ad !important"
      ></div>
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
</style>
