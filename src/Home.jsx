import profilePic from './assets/profile-pic-2.jpeg'
import instagram from './assets/instagram.svg'
import linkedin from './assets/linkedin.svg'
import github from './assets/github.svg'

function Home() {
    return(
    <>
    <div className="about-me" id="home">
        <img className='profile-pic' src={profilePic} alt='Profile Picture'></img>
        <h1>Hi, I am <span className="name">Bridget!</span></h1>
        <h2>A Full Stack Developer passionate about real-world impact.</h2>
        <p className="profile-desc">I am a full stack software engineer and app developer, planning to pursue my Bachelor's
             degree in Computer Science. I enjoy working across the entire development process—from 
             designing intuitive user interfaces to building and deploying 
             applications. I am passionate about transforming ideas into reliable, user-friendly software 
             that bridges functionality with great design.</p>
        <a href="https://www.instagram.com/bridgetwu.19/" className="social"><img src={instagram} width="40" heigh="52"/></a>
        <a href="https://www.linkedin.com/in/wu-bridget/" className="social"><img src={linkedin} width="40" heigh="52"/></a>
        <a href="https://github.com/BridgetWu" className="social"><img src={github} width="40" heigh="52"/></a>
    </div>
    </>
    )
}

export default Home