const Testimonial = ({ name, image, title, desc }) => {
  return (
    <article className="testimonial">
      <p className="testimonial__description">{desc}</p>
      <figure className="testimonial__figure">
        <img
          src={image}
          alt="testimonial person"
          className="testimonial__figure--image"
        />
        <figcaption className="testimonial__figure--text">{name}</figcaption>
        <figcaption className="testimonial__figure--title">{title}</figcaption>
      </figure>
    </article>
  );
};

export default Testimonial;
