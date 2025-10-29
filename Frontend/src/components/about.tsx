const About = () => {
  return (
    <div>
      <h2 className="aboutHeader">About me</h2>
      <div className="info">
        <p>
          My name is Emma, and I’ve been studying web development since August
          2024, focusing on mastering both frontend and backend technologies.
          I’m passionate about creating clean, accessible, and user-friendly
          websites, and I enjoy solving problems through thoughtful design and
          efficient code. My goal is to continue growing as a developer and
          contribute to innovative digital projects while continuously expanding
          my skills and knowledge.
        </p>
        <div className="techStack">
          <h3>Tech stack</h3>
          <div className="tech-bubbles">
            <span>C#</span>
            <span>.NET</span>
            <span>REST API</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
            <span>Vue</span>
            <span>Angular</span>
            <span>Tailwind CSS</span>
            <span>Bootstrap</span>
            <span>Azure</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
