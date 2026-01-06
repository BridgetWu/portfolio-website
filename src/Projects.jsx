import SkillTag from './SkillTag.jsx'
import { projects } from './projects.js'
import ProjectCard from './ProjectCard.jsx'

function Projects() {
    return(
        <>
        <div className="projects" id="projects">
            <h2 className="text-center mb-[2%] text-3xl font-semibold text-[#48B3AF]">Projects</h2>
            <div className="projectCards">
            
            {projects.map((project) => (
                <ProjectCard key={project.title} project={project} />
            ))}

            </div>
        </div>
        </>
    )
}

export default Projects