function Cardex(props) {
    return (
        <>
            <div className="experience-container">
                <div className="role-name"><span>{props.name}</span><p className="date">{props.date}</p></div>
                <span className="desc">{props.desc}</span>
            </div>
        </>
    );
}

export default Cardex;