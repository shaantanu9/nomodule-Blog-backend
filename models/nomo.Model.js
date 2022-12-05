const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const nomoSchema = new mongoose.Schema(
  {
    title: {
      // type: String,
    },
    detail: {
      type: String,
    },
    code1: {
      type: String,
    },
    code2: {
      type: String,
    },
    pypi_link: {
      type: String,
    },
    link: {
      type: String,
    },
    code: {
      type: String,
    },
    email: {
      type: String,
    },
    maintainername: {
      type: String,
    },
    maintainerlink: {
      type: String,
    },
    github: {
      type: String,
    },
    author: {
      type: String,
    },
    time: {
      type: String,
    },
    file_link: {
      type: String,
    },
    licence: {
      type: String,
    },
    package_details: {
      type: String,
    },
    errorTitle: {
      type: String,
    },
    url: {
      type: String,
    },
    topics: {
      type: Array,
      items: [
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
        {
          type: String,
        },
      ],
    },
    stars: {
      type: String,
    },
    fork: {
      type: String,
    },
    homepage: {
      type: String,
    },
    issues: {
      type: String,
    },
    contributors: {
      type: String,
    },
    watching: {
      type: String,
    },
    about: {
      type: String,
    },
    languages: {
      type: Array,
      items: [
        {
          type: String,
        },
      ],
    },
    markdown: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

let Nomo = mongoose.model("nomo", nomoSchema);
module.exports = Nomo;
