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
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
