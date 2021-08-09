import './style.css';

const BioCard = ({ image, text, title }) => {

    let bg = {
        backgroundImage: `url(${image})`
    }

    return (
        <main className="card-teacher">
            <div className="card-teacher__image-wrapper" style={bg}></div>
            <h4 className="card-teacher__name">{title}</h4>
            <div className="card-teacher__content">
                <p className="copy">{text}</p>
            </div>
        </main>
    )
}

export default BioCard