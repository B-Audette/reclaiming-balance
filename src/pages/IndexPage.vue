<template>
  <q-page class="horizontal-padding" bg-color="#faefe1ff">
    <div class="q-pa-none bg-img" id="home">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm" style="display: block">
          <div class="q-pa-lg">
            <p class="text-h2-alt text-center" style="color: white">
              Welcome to Reclaiming Balance
            </p>
            <p class="q-pb-xl text-h4 text-center" style="color: white">
              where we empower individuals to find harmony in their lives
              through personalized coaching and support.
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
          <h3 class="text-h3-alt text-left" style="margin-bottom: 0.5em">
            Meet Leah
          </h3>
          <div class="q-py-sm q-px-sm text-left text-h4">
            Leah is a certified life coach with a passion for helping
            individuals achieve balance and fulfillment in their lives. More
            information here about her certifications and maybe more statements
            about who she wants to show up as here.
          </div>
          <div class="col-6 q-py-lg">
            <q-img
              contain
              height="200px"
              width="200px"
              src="/images/logo.png"
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

    <div class="q-pa-none bg-img-2" id="home">
      <div class="col-12">
        <br />
        <br />

        <div class="q-py-xl q-px-sm" style="display: block">
          <div class="q-pa-lg">
            <p class="text-h2-alt text-center" style="color: white">
              Placeholder Text Title
            </p>
            <p class="text-h4 text-center" style="color: white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

    <div id="id_home">
      <div style="background-color: #6b705cff !important">
        <div class="q-px-xl col-12">
          <br />
          <h3
            class="text-h3-alt text-left text-white"
            style="margin-bottom: 0.5em"
          >
            Coaching Philosophy
          </h3>
          <div class="q-py-sm q-px-sm text-left text-white text-h4">
            Leah's coaching philosophy is centered arounf the belief that...
          </div>
          <div class="col-6 q-py-lg">
            <q-img src="/images/stack.jpeg" style="border-radius: 22px">
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
      <div style="background-color: #000000ad !important">
        <div class="q-px-xl col-12">
          <br />
          <h3
            class="text-h2 text-white text-center"
            style="margin-bottom: 0.5em"
          >
            Contact
          </h3>
          <div class="q-px-xl text-center text-h4" style="color: #b7b7a4ff">
            Let's get in touch!
          </div>
          <mailing-list-form />
        </div>
      </div>
      <div
        class="row flex flex-center"
        style="background-color: #000000ad !important"
      ></div>
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
import MailingListForm from "src/components/MailingListForm.vue";

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
    MailingListForm,
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

  @media screen and (max-width: 430px) {
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
