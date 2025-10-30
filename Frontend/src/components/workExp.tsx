import "../stylesheets/workExp.css";
import { useState } from "react";
import LoadingSpinner from "./loadingSpinner";

const WorkExp = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div id="workExp">
      <h2>Work Experience</h2>
      <div>
        {loading && <LoadingSpinner />}
        {/* <iframe onLoad={() => setLoading(false)} src="https://1drv.ms/b/s!AtNZeOFOp3hOgS5pIZgksuMTaMrA?embed=1&em=2" frameBorder="0"
                    scrolling="no"></iframe> */}
        <iframe
          onLoad={() => setLoading(false)}
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
