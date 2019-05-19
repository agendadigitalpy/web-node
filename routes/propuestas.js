const router = require("express").Router();
const mongoose = require("mongoose");
const Proposal = mongoose.model("proposal");

// Proposals Index
router.get("/", (req, res, next) => {
  res.redirect(`/propuestas`);
  // Proposal.find()
  //   .sort({ date: "CreateAt" })
  //   .then(rows => {
  //     console.log(rows);
  //     res.render("propuestas/index", {
  //       proposals: rows
  //     });
  //   });
});

router.get("/:id", (req, res) => {
  Proposal.findOne({
    _id: req.params.id
  }).then(proposal => {
    res.render("index/propuesta", {
      proposal: proposal
    });
  });
});

router.post("/", (req, res, next) => {
  const newProposal = {
    name: req.body.name,
    email: req.body.email,
    category: req.body.category,
    title: req.body.title,
    content: req.body.content
  };

  // Create Proposal
  new Proposal(newProposal).save().then(proposal => {
    //res.redirect(`/proposal/show/${proposal.id}`);
    res.redirect(`/propuestas`);
  });
});

module.exports = router;
