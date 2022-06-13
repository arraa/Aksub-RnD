const PortofolioCard = ({ name, detail,link, id }) => {
  return (
    <div className="card">
      <h5 className="card__title">{name}</h5>
      <p className="card__detailPorto">{detail}</p>
      <a href={link} target="_blank" className="btn btn-blue">
        see more
      </a>
    </div>
  );
};

export default PortofolioCard;
