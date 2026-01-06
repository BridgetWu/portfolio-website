import portfolioScreenshot from './assets/portfolioWebsiteScreenshot2.png'
import learntogetherScreenshot from './assets/learntogetherScreenshot.png'
import mapAppScreenshot from './assets/mapAppScreenshot.jpeg'
import aiJudgeScreenshot from './assets/aiJudgeScreenshot3.png'

export const projects = [
    {
        title: "AI Judge",
        desc: "A web application that evaluates question-answer pairs using the Gemini API, demonstrating full CRUD functionality. It allows users to upload JSON datasets, view parsed questions and answers, and save evaluations in a cloud database. Built with React, TypeScript, and Firebase.",
        skills: ["React.js", "TypeScript", "Tailwind CSS", "Gemini API"],
        link: "https://github.com/BridgetWu/ai-judge",
        img: aiJudgeScreenshot
    },
    {
        title: "STEM-E Map App",
        desc: "A map-mobile app that tracks STEM events and makes it available to the underprivileged youth. Developed with the interns using React.js and Node.js for the STEM-E nonprofit organization.",
        skills: ["React", "Node.js"],
        link: "https://github.com/STEM-E-Youth-Career-Development-Program/map-app",
        img: mapAppScreenshot
    },
    {
        title: "LearnTogether iOS App",
        desc: "An accessible English learning app designed for children, featuring a kid-friendly UI with audio prompts and visual cues. Built using Swift and UIKit with customizable lesson plans and progress tracking.",
        skills: ["Swift", "UIKit"],
        link: "https://github.com/BridgetWu/LearnTogetherApp",
        img: learntogetherScreenshot
    },
    {
        title: "Portfolio Website",
        desc: "My portfolio website showcasing projects, skills, and everything about me, built using React.js, JavaScript, and Tailwind CSS. Hosted using Github Pages.",
        skills: ["React.js", "Tailwind CSS", "JavaScript", "Vite"],
        link: "https://github.com/BridgetWu/portfolio-website",
        img: portfolioScreenshot
    },
]