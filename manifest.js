module.exports = {
  identifier: "getting-started",
  name: "Getting Started",
  baseUrl: process.env.BASE_URL,
  logo: "/logo.svg",
  authentication: {
    type: "none",
    clientId: null
  },
  events: {},
  scopes: ["project"],
  modules: {
    "project-menu": [
      {
        key: "menu",
        name: "Getting Started",
        url: "/project-menu"
      }
    ],
    "editor-right-panel": [
      {
        key: "dialog-translation-module",
        name: "Dialog Translations Panel",
        modes: ["translate"],
        url: "/project-menu"
      }
    ]
  }
}