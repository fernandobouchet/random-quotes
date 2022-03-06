function Cards(props) {
  const { content, author } = props;

  return (
    <>
      <h1>{content}</h1>
      <h2>{author}</h2>
    </>
  );
}

export default Cards;
