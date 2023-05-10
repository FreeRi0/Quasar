const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("pages/ToDo.vue") },
      { path: "/help", component: () => import("pages/Help.vue") },
      { path: "/about", component: () => import("pages/About.vue") },
    ],
  },
];

export default routes;
