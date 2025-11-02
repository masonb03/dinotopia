import { Link } from 'react-router-dom';
import { dinosaurs } from '../data/dinosaurs';
import '../styles/Catalog.css';
import { useState , useEffect } from 'react';


export default function Catalog() {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredDinosaurs, setFilteredDinosaurs] = useState([...dinosaurs]);
    const [dietFilter, setDietFilter] = useState('');

    useEffect(() => {
  let filtered = [...dinosaurs];

  if (searchTerm.trim() !== '') {
    const lowerSearch = searchTerm.toLowerCase();
    filtered = filtered.filter(dino =>
      dino.name.toLowerCase().includes(lowerSearch)
    );
  }

  if (dietFilter) {
    filtered = filtered.filter(dino =>
      dino.diet.toLowerCase() === dietFilter.toLowerCase() 
    );
  }

  setFilteredDinosaurs(filtered);
}, [searchTerm, dietFilter]);

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
                <div className="catalog-content">
                    <aside className="filter">
                        <button onClick={() => setDietFilter('')}>All</button>
                        <button onClick={() => setDietFilter('Carnivore')}>Carnivores</button>
                        <button onClick={() => setDietFilter('Herbivore')}>Herbivores</button>
                        <button onClick={() => setDietFilter('Piscivore')}>Piscivores</button>
                        <button onClick={() => setDietFilter('Air')}>Air</button>
                        <button onClick={() => setDietFilter('Water')}>Water</button>
                    </aside>
                    <div className="dino-grid">
                        {filteredDinosaurs.map((dino => (
                            <Link className="dino-card-cover"
                            to={`/dino/${dino.id}`} 
                            key={dino.id}>
                        <img className="image-container"    src={dino.image}
                        alt={dino.name}/>
                            <div className="dino-title">
                                <h2>{dino.name}</h2>
                                <p>Era: {dino.era}</p>
                            </div>
                        </Link>
                    )))}
                </div>
            </div>
        </div>
    )
}