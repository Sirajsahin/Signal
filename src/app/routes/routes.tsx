// Router to define strict types and interfaces for the routes

import { IRoutesDefined } from "../../api_framework/api_modals/routersDefine";

export const ROUTES_MAPPINGS = {
  "/": "LANDING_PAGE",
  "/app": "ROOT",
  "/app/login": "LOGIN_PAGE",
  "/app/home": "HOME_PAGE",
  "/app/thankyou": "THANKYOU",
  "/app/campaign": "CAMPAIGN",
  "/app/campaign/campaign-list": "CAMPAIGN_PAGE",
  "/app/campaign/create-survey": "CREATE_SURVEY",
  "/app/campaign/survey-preview": "SURVEY_PREVIEW",
};

export const CAMPAIGNPAGESUBROUTE: IRoutesDefined = {
  CAMPAIGN_PAGE: {
    id: "CAMPAIGN_PAGE",
    title: "campaign",
    icon: "MdOutlineDashboard",
    url: "/app/campaign/campaign-list",
    path: "campaign-list",
    children: {},
  },
  CREATE_SURVEY: {
    id: "CREATE_SURVEY",
    title: "Create Survey",
    icon: "HiOutlineHome",
    url: "/app/campaign/create-survey",
    path: "create-survey",
    children: {},
  },
  SURVEY_PREVIEW: {
    id: "SURVEY_PREVIEW",
    title: "Preview Survey",
    icon: "HiOutlineHome",
    url: "/app/campaign/survey-preview",
    path: "survey-preview",
    children: {},
  },
};
export const NAVIGATION_ROUTES: IRoutesDefined = {
  INVALID_ACCESS: {
    id: "INVALID_ACCESS",
    title: "Invalid Access",
    icon: "HiOutlineHome",
    url: "/app/invalid-access",
    path: "invalid-access",
    children: {},
  },
  INVALID_LOGIN: {
    id: "INVALID_LOGIN",
    title: "Invalid Login",
    icon: "HiOutlineHome",
    url: "/app/invalid-login",
    path: "invalid-login",
    children: {},
  },
  HOME_PAGE: {
    id: "HOME_PAGE",
    title: "homepage",
    icon: "MdOutlineDashboard",
    url: "/app/home",
    path: "home",
    children: {},
  },
  THANKYOU: {
    id: "THANKYOU",
    title: "thankyou",
    icon: "MdOutlineDashboard",
    url: "/app/thankyou",
    path: "thankyou",
    children: {},
  },
  CAMPAIGN: {
    id: "CAMPAIGN",
    title: "Inventory",
    icon: "HiOutlineUserCircle",
    url: "/app/campaign",
    path: "campaign",
    children: {
      ...CAMPAIGNPAGESUBROUTE,
    },
  },
};

export const ROUTES: IRoutesDefined = {
  LANDING_PAGE: {
    id: "LANDING_PAGE",
    icon: "HiOutlineHome",
    title: "Vetic VMS Product",
    description: "Vetic VMS Product",
    url: "/",
    path: "/",
    children: {},
  },

  ROOT: {
    id: "ROOT",
    icon: "HiOutlineHome",
    title: "Vetic VMS",
    description: "Vetic VMS Description about the application",
    url: "/app",
    path: "/app", // path is basically path to the children in the nested routes
    children: {
      ...NAVIGATION_ROUTES, // rendering navigation routes inside main /app route
    },
  },
  LOGIN_PAGE: {
    id: "LOGIN_PAGE",
    title: "Vetic VMS Login",
    icon: "HiOutlineHome",
    description: "Vetic VMS Login Page",
    url: "/app/login",
    path: "/login",
    children: {},
  },
};
