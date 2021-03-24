"use strict";

const Accounts = require("./app/controllers/accounts");
const Hikes = require("./app/controllers/hikes");

module.exports = [
  { method: "GET", path: "/", config: Accounts.index },
  { method: "GET", path: "/signup", config: Accounts.showSignup },
  { method: "GET", path: "/login", config: Accounts.showLogin },
  { method: "GET", path: "/logout", config: Accounts.logout },
  { method: "POST", path: "/signup", config: Accounts.signup },
  { method: "POST", path: "/login", config: Accounts.login },
  { method: "GET", path: "/settings", config: Accounts.showSettings },
  { method: "POST", path: "/settings", config: Accounts.updateSettings },

  { method: "GET", path: "/home", config: Hikes.home },
  { method: "POST", path: "/hike", config: Hikes.hike },
  { method: "GET", path: "/report", config: Hikes.report },
  { method: "POST", path: "/report", config: Hikes.hike },
  //{ method: "GET", path: "/delete-hike/{_id}", config: Hikes.deleteHike },

  {
    method: "GET",
    path: "/{param*}",
    handler: {
      directory: {
        path: "./public",
      },
    },
    options: { auth: false },
  },
];
