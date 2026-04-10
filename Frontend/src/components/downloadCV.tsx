import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import "../stylesheets/downloadCv.css";

export default function DownloadCv(){
    return(
        <div className="downloadCvBtn">
          <a href="data/cv.pdf" download="Emma_Högdal_CV.pdf" title="Download CV">
            <SimCardDownloadIcon fontSize="large" />
          </a>
        </div>
    );
}