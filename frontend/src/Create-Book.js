import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

function CreateBook() {
  const titleInputRef = useRef("");
  const authorInputRef = useRef("");
  const descriptionInputRef = useRef("");
  const navigate = useNavigate();

  const createBook = () => {
    axios
      .post('https://finalbackend-0hpr.onrender.com', {
        title: titleInputRef.current.value,
        author: authorInputRef.current.value,
        description: descriptionInputRef.current.value,
      })
      .then((res) => {
        navigate("..");
      })
      .catch((err) => {
        console.log("Error from BookList");
      });
  };

  return (
    <div className="CreateBook">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto">
            <br />
            <a className="btn btn-info float-left" href="/">
              Show BooK List
            </a>
          </div>
          <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Add Book</h1>
            <p className="lead text-center">Create new book</p>
            <form novalidate="">
              <div className="form-group">
                <input
                  ref={titleInputRef}
                  type="text"
                  placeholder="Title of the Book"
                  name="title"
                  className="form-control"
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  ref={authorInputRef}
                  type="text"
                  placeholder="Author"
                  name="author"
                  className="form-control"
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <div className="form-group">
                <input
                  ref={descriptionInputRef}
                  type="text"
                  placeholder="Describe this book"
                  name="description"
                  className="form-control"
                  spellcheck="false"
                  data-ms-editor="true"
                />
              </div>
              <input
                type="button"
                value="submit"
                onClick={createBook}
                className="btn btn-info btn-block mt-4"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateBook;
