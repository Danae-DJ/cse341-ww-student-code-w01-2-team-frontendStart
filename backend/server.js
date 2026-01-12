const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

//Endpoint to frontend
app.get("/professional", (req, res) => {
  res.json({
    professionalName: "Dánae De la Cruz",
    base64Image: "",

    nameLink: {
      firstName: "Dánae",
      url: "www.linkedin.com/in/dánae-de-la-cruz-jiménez-176358385"
    },

    primaryDescription: " I am a developer in training with an interest in backend and Node.js.",

    workDescription1: "I have experience working with JavaScript, Node.js, and Express.",
    workDescription2: "I am interested in continuing to learn about APIs, databases, and software architecture.",

    linkTitleText: "Find me on:",

    linkedInLink: {
      text: "LinkedIn",
      link: "www.linkedin.com/in/dánae-de-la-cruz-jiménez-176358385"
    },

    githubLink: {
      text: "GitHub",
      link: "https://github.com/Danae-DJ"
    }
  });
});


//Start server
app.listen(8080, () => {
    console.log("Server running on http://localhost:8080");
});