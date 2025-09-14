function Card(props) {
    return(
        <div className="card">
            <img className="card-image" src={props.img} alt="App Screenshot"></img>
            <div className="card-content">
                <h2>{props.name}</h2>
                <p className="card-text">{props.desc}</p>
                <a href={props.link} class="github-button">Github</a>
            </div>
        </div>
    );
}

export default Card;