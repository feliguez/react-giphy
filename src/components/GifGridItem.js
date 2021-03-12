import PropTypes from 'prop-types';

const GifGridItem = ({ title, url }) => {
  return (
    <article className="card animate__animated animate__fadeIn">
      <img alt={title} src={url} />
      <p>{title}</p>
    </article>
  );
};

GifGridItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default GifGridItem;
