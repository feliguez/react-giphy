const GifGridItem = ({ title, url }) => {
  return (
    <article className="card animate__animated animate__fadeIn">
      <img alt={title} src={url} />
      <p>{title}</p>
    </article>
  );
};

export default GifGridItem;
