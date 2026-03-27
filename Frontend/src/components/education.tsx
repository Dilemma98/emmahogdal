const Education = () => {
  return (
    <div id="education">
      <h2>Education</h2>
      <div>
        <iframe
          src={`${import.meta.env.BASE_URL}files/emma_hogdal_utb.pdf`}
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default Education;
