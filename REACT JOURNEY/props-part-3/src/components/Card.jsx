const Card = ({ name, role, company, rate, status, skills, btnText, showDivider, extraSkills, desc, img }) => {
  return (
    <div className="card">
      <div className="top">
        <h1 className="h1">{status ? "Available" : "Not Available"}</h1>
        <h1>{rate}</h1>
      </div>
      <img src={img} alt="image" />
      <div className="bottom">
        <h1>{name}</h1>
        <h2>{role}</h2>
        <h3>{company}</h3>
        <div className="skills">
          {skills.map((skill, idx) => {
            return (
              <span key={idx} className="skill">
                {skill}
              </span>
            );
          })}
          <span className="extra-skill">+{extraSkills}</span>
        </div>
        <p>{desc}</p>
        {showDivider && <hr />}
        <button>{btnText}</button>
      </div>
    </div>
  );
};

export default Card;
