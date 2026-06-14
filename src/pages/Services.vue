<template>
  <q-page bg-color="#faefe1ff">
    <div class="q-pa-none bg-img-4 horizontal-padding" id="id_services">
      <br />
      <br />

      <div class="q-py-xl q-px-sm horizontal-padding" style="display: block">
        <div class="q-pa-lg">
          <div class="q-mb-md items-center">
            <p class="text-h2-alt text-center q-ml-mdt" style="color: white">
              Services
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>
    <div
      class="horizontal-padding"
      style="background-color: #ddbea9ff !important"
      id="id_services"
    >
      <br />
      <br />

      <div class="q-py-xl q-px-sm" style="display: block">
        <div class="q-pa-lg">
          <div class="q-gutter-md q-mb-md q-row items-center">
            <p class="text-h4-bold text-left">
              Individual/private coaching sessions
            </p>
            <p class="text-h4 text-left">
              In a 1:1 setting, either virtually or in-person, I’ll use a
              variety of questions and explorational activities to help you
              identify your values and well-being vision, work through your
              struggles, and step into the next version of yourself and the life
              you’ve been dreaming of. Not sure what your vision looks like yet?
              Let’s explore that in one of your first sessions!
            </p>
            <br />
            <p class="text-h4-bold text-left">Group Health Coaching</p>

            <p class="text-h4 text-left">
              Experience your personal transformation alongside 4-8 others as
              group members give and receive support and advice from one other
              in the safety of a caring and confidential space guided by Leah.
              Groups are formed based on the demographics, conditions, and goals
              of individuals.
            </p>
            <br />
            <p class="text-h4-bold text-left">Workshops</p>

            <p class="text-h4 text-left">
              Geared toward workplaces, clinics, support groups, senior living
              facilities, churches, non-profit organizations, and online groups,
              workshops are centered around a specified topic and are largely
              structured in their delivery. Over the course of a pre-determined
              number of sessions (1-6), workshops will consist of various health
              coaching activities, educational components, and personalized
              goal-setting.
            </p>

            <p class="text-h4 text-left">
              Please
              <a
                href="mailto:leah@reclaiming-balance.com?subject=Workshop%20Inquiry"
                style="color: black; text-decoration: underline"
                >contact Leah</a
              >
              to inquire about workshop topics, objectives, and delivery
              formats.
            </p>
            <br />
            <p class="text-h4-bold text-left">Speaking</p>

            <p class="text-h4 text-left">
              Leah is known for her engaging presence and provides vivid details
              and messages from the heart. By weaving together concise lessons,
              life wisdom, and her authentic voice, Leah’s talks regularly leave
              listeners impressed and inspired, equipped to take action. Please
              <a
                href="mailto:leah@reclaiming-balance.com?subject=Speaking%20Inquiry"
                style="color: black; text-decoration: underline"
                >contact Leah</a
              >
              to discuss potential topics and delivery formats.
            </p>
          </div>
        </div>
      </div>
      <br />
    </div>

    <div
      class="horizontal-padding"
      style="background-color: #cbd2bbff !important"
    >
      <div class="q-py-xl q-px-sm" style="display: block">
        <div class="q-pa-lg">
          <div class="q-gutter-md q-mb-md q-row items-left">
            <p class="text-h4-bold text-left">Paying for Coaching</p>
            <p class="text-h4 text-left">
              At this time, health and wellness coaching is not an insured
              service. The National Board of Health & Wellness Coaching is
              working tirelessly at the national level to provide

              <a
                href="https://docs.google.com/document/d/19kQvH2qy51Tyz6sRN9R_1NkVohyM-sDT865Eu7arlJA/edit?usp=sharing"
                target="_blank"
                style="color: black; text-decoration: underline"
                >sufficient evidence</a
              >
              (of which there is plenty!) that health coaching changes lives and
              improves health outcomes and self-efficacy.
            </p>
            <br />
            <p class="text-h4 text-left">
              Payment options for out-of-pocket health coaching services
              include:
            </p>
            <ul class="text-h4 text-left">
              <li>
                HSA/Health Savings Account dollars on your health insurance plan
              </li>
              <li>
                FSA/Flex-Spending Account dollars on your health insurance plan
              </li>
              <li>Crowd-funding: asking for financial support</li>
              <li>
                Submit a Superbill: some insurance companies might reimburse
                some out-of-network services and integrative therapies if they
                treat a verifiable diagnosis.
              </li>
              <li>
                A gift to yourself: The most selfless thing you can do is take
                high-quality care of yourself so that you can show up in the
                world fully! When we feel balance in well-being, it is easier to
                work, be present, and care for others and out communities.
              </li>
            </ul>

            <p class="text-h4 text-left"></p>
            <p class="text-h4 text-left"></p>
            <br />
            <p class="text-h4 text-left">
              <span class="text-h4-bold"> Through July 15th,</span>
              prices are the following:
            </p>
            <ul class="text-h4">
              <li>Introductory exploration call - FREE</li>
              <li>1-hour session: $75</li>
              <li>Abbreviated (30-minute) session: $39</li>
              <li>Group coaching will launch this summer!</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
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
.bg-img-4 {
  position: relative;
  /* Ensure stacking context for overlay */
}
.bg-img-4 > * {
  position: relative;
  z-index: 2;
}
</style>
