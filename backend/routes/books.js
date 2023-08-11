const router = require("express").Router();
let Book = require("../models/booklist.model");

router.route("/").get((req, res) => {
  Book.find()
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Book.findById(req.params.id)
    .then((books) => res.json(books))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/").post((req, res) => {
  const title = req.body.title;
  const author = req.body.author;
  const description = req.body.description;
  // create a new Book object 
  const newBook = new Book({
    title,
    author,
    description,
  });

  console.log("checkpoint");

  // save the new object (newBook)
  newBook
    .save()
    .then(() => res.json("Book added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").post((req, res) => {
  Book.findById(req.params.id)
    .then((books) => {
      books.title = req.body.title;
      books.author = req.body.author;

      books
        .save()
        .then(() => res.json("Book updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json("Book deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
