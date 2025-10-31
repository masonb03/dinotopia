import { Link } from 'react-router-dom';
import { dinosaurs } from '../data/dinosaurs';
import '../styles/DinoCard.css';


export default function Catalog() {

    return(
        <div className="catalog-page">
            <h1 className="font-serif">Catalog Page</h1>
            <p className="font-serif">Welcome to the Catalog of Dinotopia!</p>
            <div className="dino-grid">
                {dinosaurs.map((dino => (
                    <Link className="dino-card-cover"
                    to={`/dino/${dino.id}`} 
                    key={dino.id}>
                        <img className="image-container" src={dino.image}
                        alt={dino.name}/>
                        <div className="dino-title">
                            <h2>{dino.name}</h2>
                            <p>Era: {dino.era}</p>
                        </div>
                    </Link>
                )))}
            </div>
        </div>
    )
}