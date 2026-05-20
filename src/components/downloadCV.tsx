import SimCardDownloadIcon from "@mui/icons-material/SimCardDownload";
import "../stylesheets/downloadCv.css";

export default function DownloadCv(){
    return(
        <div className="downloadCvBtn">
          <a href="data/emmahogdalcv.pdf" download="emmahogdalcv.pdf" title="Download CV">
            <SimCardDownloadIcon fontSize="large" />
          </a>
        </div>
    );
}
