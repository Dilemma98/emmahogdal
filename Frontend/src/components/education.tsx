
const Education = () => {
    return(
       <div id="education">
            <h2>Education</h2>
            <div>
                    <iframe
                   src={`${import.meta.env.BASE_URL}files/emma_hogdal_utb.pdf`}
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