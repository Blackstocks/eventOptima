import auth from "@/middleware/auth";
import {student, startup, professional} from "@/middleware/permissions";

const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/auth/login/index.vue"),
  },
  
  {
    path: "/register",
    name: "reg",
    component: () => import("@/views/auth/register"),
  },
  
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: () => import("@/views/auth/forgot-password.vue"),
  },
  
  {
    path: "/student",
    name: "Student",
    redirect: "/student/home",
    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth, student],
    },
    children: [
      
      {
        path: "home",
        name: "home",
        component: () => import("@/views/student/home/index.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "register",
        name: "post register",
        component: () => import("@/views/student/postreg-form.vue"),
      },

      {
        path: "payment",
        name: "payment",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "travel",
        name: "travel",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "accomodation",
        name: "accomodation",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "map",
        name: "map",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "certificate",
        name: "certificate",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "faq",
        name: "faq",
        component: () => import("@/views/faq"),
      },

      {
        path: "contact",
        name: "contact",
        component: () => import("@/views/contact"),
      },

      {
        path: "blank-page",
        name: "blank-page",
        component: () => import("@/views/blank-page.vue"),
      },
    ],
  },

  {
    path: "/startup",
    name: "Startup",
    redirect: "/startup/home",
    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth, startup],
    },
    children: [

      {
        path: "home",
        name: "startup home",
        component: () => import("@/views/startup/home/index.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "register",
        name: "post register",
        component: () => import("@/views/startup/postreg-form.vue"),
      },

      {
        path: "payment",
        name: "startup payment",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "travel",
        name: "startup travel",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "accomodation",
        name: "startup accomodation",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "map",
        name: "startup map",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "certificate",
        name: "startup certificate",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "faq",
        name: "startup faq",
        component: () => import("@/views/faq"),
      },

      {
        path: "contact",
        name: "startup contact",
        component: () => import("@/views/contact"),
      },

    ],
  },

  {
    path: "/professional",
    name: "Professional",
    redirect: "/professional/home",
    component: () => import("@/Layout/index.vue"),
    meta: {
      middleware: [auth, professional],
    },
    children: [

      {
        path: "home",
        name: "professional home",
        component: () => import("@/views/professional/home/index.vue"),
        meta: {
          hide: true,
        },
      },

      {
        path: "register",
        name: "professional post register",
        component: () => import("@/views/professional/postreg-form.vue"),
      },

      {
        path: "payment",
        name: "professional payment",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "travel",
        name: "professional travel",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "accomodation",
        name: "professional accomodation",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "map",
        name: "professional map",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "certificate",
        name: "professional certificate",
        component: () => import("@/views/utility/comming-soon"),
      },

      {
        path: "faq",
        name: "professional faq",
        component: () => import("@/views/faq"),
      },

      {
        path: "contact",
        name: "professional contact",
        component: () => import("@/views/contact"),
      },

    ],
  },

  {
    path: "/:catchAll(.*)",
    name: "404",
    component: () => import("@/views/404.vue"),
  },
  {
    path: "/coming-soon",
    name: "coming-soon",
    component: () => import("@/views/utility/comming-soon"),
  },
  {
    path: "/under-construction",
    name: "under-construction",
    component: () => import("@/views/utility/under-construction"),
  },
  {
    path: "/error",
    name: "error",
    component: () => import("@/views/error.vue"),
  },
];

export default routes;
