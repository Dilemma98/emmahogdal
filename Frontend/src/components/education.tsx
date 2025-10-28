import { useState } from "react";
import LoadingSpinner from "./loadingSpinner";
import educationPDF from "../files/Emma Högdal Utb.pdf";

const Education = () => {
    const [loading, setLoading] = useState(true);
    return(
       <div id="education">
            <h2>Education</h2>
            <div>
                {loading && <LoadingSpinner />}
                {/* <iframe onLoad={() => setLoading(false)} src="https://1drv.ms/b/s!AtNZeOFOp3hOgS5pIZgksuMTaMrA?embed=1&em=2" frameBorder="0"
                    scrolling="no"></iframe> */}
                    <iframe onLoad={() => setLoading(false)} 
                    src={educationPDF}
                    frameBorder="0"
                    scrolling="no"
                    width="100%"
                    height="600"
                    ></iframe>
            </div>
        </div>
    );
}

export default Education;