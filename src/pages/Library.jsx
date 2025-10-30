import { Link } from 'react-router-dom';
import { dinosaurs } from '../data/dinosaurs';
import '../styles/DinoCard.css';


export default function Library() {

    return(
        <div>
            <h1 className="font-serif">Library Page</h1>
            <p className="font-serif">Welcome to the Library of Dinotopia!</p>
            <div className="dino-grid">
                {dinosaurs.map((dino => (
                    <Link 
                    to={`/dino/${dino.id}`} 
                    key={dino.id}>
                        <img src={dino.image}
                        alt={dino.name}
                        width="500"/>
                        
                        <div>
                            <h2>{dino.name}</h2>
                            <p>Era: {dino.era}</p>
                        </div>
                    </Link>
                )))}
            </div>
        </div>
    )
}