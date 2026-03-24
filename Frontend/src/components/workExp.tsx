import "../stylesheets/workExp.css";

const WorkExp = () => {

  return (
    <div id="workExp">
      <h2>Work Experience</h2>
      <div>
        <iframe
          src={`${import.meta.env.BASE_URL}files/emma_hogdal_jobb.pdf`}
          frameBorder="0"
          scrolling="no"
          width="100%"
          height="600px"
        ></iframe>
      </div>
    </div>
  );
};

export default WorkExp;
