const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        name: "Home",
        path: "",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        name: "About",
        path: "about",
        component: () => import("pages/About.vue"),
      },
      {
        name: "CoachingPhilosophy",
        path: "coaching-philosophy",
        component: () => import("pages/CoachingPhilosophy.vue"),
      },
      {
        name: "Services",
        path: "services",
        component: () => import("pages/Services.vue"),
      },
      {
        name: "WhatIsCoaching",
        path: "what-is-integrative-coaching",
        component: () => import("pages/WhatIsCoaching.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
