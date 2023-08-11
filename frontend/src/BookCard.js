

function BookCard(props) {
    return (
        <div className="card-container">
        <img
          src="https://images.unsplash.com/photo-1495446815901-a7297e633e8d"
          alt="Books"
          height="200"
        />
        <div className="desc">
          {/* <h2><a href="/show-book/123id">React.JS 101</a></h2> */}
          <h2><a href="/show-book/123id">{props.book.title}</a></h2>
          <h3>{props.book.author}</h3>
          <p>{props.book.description}</p>
        </div>
      </div>
    );
  }
  
  export default BookCard;
  