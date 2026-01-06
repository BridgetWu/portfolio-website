import github from './assets/github.svg';

function Skills() {
    return (
        <>
        <div className="skills" id="skills">
            <h2 className="text-center mb-[2%] text-3xl font-semibold text-[#48B3AF]">Skills</h2>
            <div className="skills-container">
            <span className="skills-subheading">Languages</span>
            <div className="skills-grid">
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className="skills-icon mr-2"></img><span>Swift</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="skills-icon mr-2"></img><span>Java</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="skills-icon mr-2"></img><span>Python</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skills-icon mr-2"></img><span>Javascript</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skills-icon mr-2"></img><span>HTML</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skills-icon mr-2"></img><span>CSS</span></div>
                </div>
            </div>

            <div className="skills-container">
            <span className="skills-subheading">Libraries</span>
            <div className="skills-grid">
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skills-icon mr-2"></img><span>React.js</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="skills-icon mr-2"></img><span>NumPy</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="skills-icon mr-2"></img><span>Pandas</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" className="skills-icon mr-2"></img><span>Matplotlib</span></div>
                </div>
            </div>

            
            <div className="skills-container">
            <span className="skills-subheading">Tools</span>
            <div className="skills-grid">
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="skills-icon mr-2"></img><span>Git</span></div>
                <div className="skill"><img src={github} className="skills-icon"></img><span>Github</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" className="skills-icon mr-2"></img><span>Azure</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" className="skills-icon mr-2"></img><span>Xcode</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="skills-icon mr-2"></img><span>VSCode</span></div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Skills