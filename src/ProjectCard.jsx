import SkillTag from "./SkillTag";
import aiJudgeScreenshot from './assets/aiJudgeScreenshot3.png'

function Card({project}) {
    return(
        <div className="bg-white text-black rounded-lg flex flex-col items-start h-[105%]">
            <img className="card-image rounded-lg" src={project.img} alt="App Screenshot"></img>
            <div className="m-5 mb-1">
                <p className="text-lg font-semibold text-left">{project.title}</p>
                <p className="text-left">{project.desc}</p>

            </div>
            
            <ul className="flex flex-wrap gap-2 mt-3 mx-4 mb-5">
            {project.skills.map((skill) => (
            <li key={skill}>
                <SkillTag label={skill} />
            </li>
            ))}
            </ul>

            <span>
                <a href={project.link} className="text-base bg-[#24292e] text-white mx-4 px-3 py-1 rounded-lg">Github</a>
            </span>
        </div>
    );
}

export default Card