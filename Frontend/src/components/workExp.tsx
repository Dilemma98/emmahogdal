import "../stylesheets/workExp.css";

const WorkExp = () => {
  return (
    <div id="workExp">
      <h2>Work Experience</h2>
      <div className="pdf-wrapper">
        <iframe
          src={`${import.meta.env.BASE_URL}files/emma_hogdal_jobb.pdf`}
          frameBorder="0"
        />
      </div>
    </div>
  );
};

export default WorkExp;
