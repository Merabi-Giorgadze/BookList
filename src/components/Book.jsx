const Book = ({ image, title, description, characters, onButtonClick }) => {
  const handleClick = () => {
    console.log(`Title: ${title}`);
    console.log(`Characters: ${characters.join(', ')}`);
    onButtonClick();
  };

  return (
    <div className="book-container">
      <img src={image} alt={title} className="book-image" />
      <h2 className="book-title">{title}</h2>
      <p className="book-description">{description}</p>
      <h4>Characters:</h4>
      <ul className="book-characters">
        {characters.map((character, index) => (
          <li key={index}>{character}</li>
        ))}
      </ul>
      <button className="book-button" onClick={handleClick}>Show Details</button>
    </div>
  );
};

export default Book;
