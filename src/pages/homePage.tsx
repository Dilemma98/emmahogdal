import ImgMe from "../components/imgMe";
import Bio from "../components/bio";
import TechStack from "../components/techStack";
export default function HomePage() {
    return (
        <div className="page">
            <Bio />
            <TechStack />
            <ImgMe />
        </div>
    );
}