<template>
  <q-page bg-color="#faefe1ff">
    <div class="q-pa-none bg-img-5 horizontal-padding" id="id_what_is_coaching">
      <br />
      <br />

      <div class="q-py-xl q-px-sm horizontal-padding" style="display: block">
        <div class="q-pa-lg">
          <div class="q-mb-md items-center">
            <p class="text-h2-alt text-center q-ml-mdt" style="color: white">
              What Is Integrative Health Coaching?
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div
      class="horizontal-padding"
      style="background-color: #faefe1ff !important"
      id="id_what_is_coaching"
    >
      <br />
      <br />

      <div class="q-py-xl q-px-sm" style="display: block">
        <div class="q-pa-lg">
          <div class="q-gutter-md q-mb-md q-row items-center">
            <p class="text-h3-content text-left">Who is Coaching for?</p>
            <p class="text-h4 text-left">
              The short and honest answer is: Everyone! However, coaching is of
              greatest benefit to those who are ready and eager to encounter
              themselves - their fears, hopes, dreams, relationships, habits,
              and more. If you are willing to be open-minded and are tired of
              feeling weighed down by your current circumstances, coaching is
              very likely for you!
            </p>
            <br />

            <p class="text-h4 text-left">
              While I believe <span class="text-h4-italic">anyone</span> can
              meaningfully benefit from coaching, my coaching services will best
              meet your needs if you fall into the following categories:
            </p>
            <ul class="text-h4 text-left">
              <li>
                Going through a life transition that’s thrown your well-being
              </li>
              <li>Managing chronic disease</li>
              <li>Wanting to prevent future disease</li>
              <li>Experiencing high levels of stress</li>
              <li>
                Families navigating one or several members’ chronic condition(s)
              </li>
              <li>
                Have a desire to live a healthier lifestyle and want a guide or
                don’t know where to start!
              </li>
            </ul>
            <br />
            <p class="text-h3-content text-left">Working with Leah</p>
            <p class="text-h4 text-left">
              People have described Leah as friendly, empathetic, humorous,
              accepting and encouraging. Clients, friends, and family members
              alike appreciate her remarkable ability to adopt different
              perspectives, her keen intuition, and her ability to slow down and
              be truly present with people’s feelings and stories.
            </p>

            <p class="text-h4 text-left">
              Sessions with Leah are organized, thoughtful, and thorough, but
              her lightheartedness and optimism bring an energizing quality to
              the table as well. Leah especially leans on tools from the field
              of positive psychology to cultivate a positive mindset and further
              propel clients on their journey of reclaiming balance.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div id="id_what_is_coaching">
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
    padding-right: 2.5em;
    padding-left: 2.5em;
  }

  @media screen and (max-width: 430px) {
    padding-right: 1.5em;
    padding-left: 1.5em;
  }
  @media screen and (max-width: 400px) {
    padding-right: 1em;
    padding-left: 1em;
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
.bg-img-4 > * {
  position: relative;
  z-index: 2;
}
</style>
