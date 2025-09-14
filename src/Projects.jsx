import Card from './Card.jsx'
import appScreenshot from './assets/appScreenshot.png'
import portfolioScreenshot from './assets/portfolioWebsiteScreenshot2.png'
import learntogertherScreenshot from './assets/learntogetherScreenshot.png'
import calculatorScreenshot from './assets/calculatorScreenshot2.png'
import gpaCalculatorScreenshot from './assets/gpaCalculatorScreenshot.png'

function Projects() {
    return(
        <>
        <div className="projects" id="projects">
            <h2 className="subheading">Projects</h2>
            <div className="projectCards">
                <Card img = {learntogertherScreenshot} name="LeanTogether iOS App" link="https://github.com/BridgetWu/LearnTogetherApp" 
                                                    desc="An accessible English learning app 
                                                    designed for children, featuring a kid-friendly 
                                                    UI with audio prompts and visual cues. Built using 
                                                    Swift and UIKit with customizable lesson plans and progress tracking."/>
                
                <Card img = {portfolioScreenshot} name="Portfolio Website" link="https://github.com/BridgetWu/portfolio-website"
                                                    desc="My portfolio website showcasing projects, skills, and everything about me. 
                                                    Built using React.js and CSS."/>
                
                <Card img = {calculatorScreenshot} name="Calculator" link="https://github.com/BridgetWu/calculator" 
                                                    desc="A calculator I made using HTML, CSS, and Javascript. 
                                                    Includes functions like addition, subtraction, multiplication, and division."/>

                <Card img = {gpaCalculatorScreenshot} name="GPA Calculator" link="https://github.com/BridgetWu/gpa-calculator" 
                                                    desc="A GPA calculator built using Java for the AP CS Principles course. 
                                                    Allows students to compute their overall GPA based on their input grades."/>
            </div>
        </div>
        </>
    )
}

export default Projects