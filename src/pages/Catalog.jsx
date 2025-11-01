import { Link } from 'react-router-dom';
import { dinosaurs } from '../data/dinosaurs';
import '../styles/DinoCard.css';
import { useState , useEffect } from 'react';


export default function Catalog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDinosaurs, setFilteredDinosaurs] = useState([...dinosaurs]);

    useEffect(() => {
        if (searchTerm.trim() === '') {
            setFilteredDinosaurs(dinosaurs);
        } else {
            const lowerSearch  = searchTerm.toLowerCase();
            const filtered = dinosaurs.filter(dino =>
                dino.name.toLowerCase().includes(lowerSearch)
            );
            setFilteredDinosaurs(filtered);
        }
    }, [searchTerm]);
    const dinoToDisplay = searchTerm.trim() === '' ? dinosaurs : filteredDinosaurs;
    return(
        <div className="catalog-page">
            <h1 className="font-serif">Catalog Page</h1>
            <p className="font-serif">Welcome to the Catalog of Dinotopia!</p>
                <input 
                className="search"
                id="searchInput"
                type="text"
                placeholder='Search for a dinosaur'
                onChange={e => setSearchTerm(e.target.value)}
                />
            <div className="dino-grid">
                {dinoToDisplay.map((dino => (
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