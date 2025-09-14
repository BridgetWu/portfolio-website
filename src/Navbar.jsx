function Navbar() {
    return (
        <div className="topnav">
        <a className="active" href="#home"><i className="fa fa-fw fa-home"></i>Home</a>
        <a href="#experience" className="split"><i className="fa fa-fw fa-user"></i>Experience</a>
        <a href="#skills" className="split"><i className="fa fa-fw fa-star"></i>Skills</a>
        <a href="#projects" className="split"><i className="fa fa-fw fa-folder"></i>Projects</a>
        <a href="#contact" className="split"><i className="fa fa-fw fa-envelope"></i>Contact</a>
    </div>
    )
}

export default Navbar