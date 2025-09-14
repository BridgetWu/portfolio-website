import github from './assets/github.svg';

function Skills() {
    return (
        <>
        <div className="skills" id="skills">
            <h2 className="subheading">Skills</h2>
            <div className="skills-container">
            <span className="skills-subheading">Languages</span>
            <div className="skills-grid">
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg" className="skills-icon"></img><span>Swift</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" className="skills-icon"></img><span>Java</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="skills-icon"></img><span>Python</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="skills-icon"></img><span>Javascript</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="skills-icon"></img><span>HTML</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="skills-icon"></img><span>CSS</span></div>
                </div>
            </div>

            <div className="skills-container">
            <span className="skills-subheading">Libraries</span>
            <div className="skills-grid">
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="skills-icon"></img><span>React.js</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" className="skills-icon"></img><span>NumPy</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" className="skills-icon"></img><span>Pandas</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" className="skills-icon"></img><span>Matplotlib</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" className="skills-icon"></img><span>scikit-learn</span></div>
                </div>
            </div>

            
            <div className="skills-container">
            <span className="skills-subheading">Tools</span>
            <div className="skills-grid">
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" className="skills-icon"></img><span>Git</span></div>
                <div className="skill"><img src={github} className="skills-icon"></img><span>Github</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" className="skills-icon"></img><span>Azure</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xcode/xcode-original.svg" className="skills-icon"></img><span>Xcode</span></div>
                <div className="skill"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" className="skills-icon"></img><span>VSCode</span></div>
                </div>
            </div>

        </div>
        </>
    )
}

export default Skills