import { dinosaurs } from '../data/dinosaurs';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import '../styles/DinoCard.css';

export default function SingleDino(){
    const navigate = useNavigate();
    const { id } = useParams();
    const dino = dinosaurs.find(dino => dino.id === parseInt(id));

    if (!dino) return
    <p className="p-6"> Dinosaur not found.</p>

    return(
        <div>
            <h1>Single Dinosaur Page</h1>
            <p>Details about a specific dinosaur will be displayed here.</p>
            <div className="DinoCard">
                <div>
                    <h2>{dino.name}</h2>
                    <img src={dino.image}
                    width="500"/>
                    <p>Era: {dino.era}</p>
                    <p>Height: {dino.height}</p>
                    <p>Length: {dino.length}</p>
                    <p>Weight: {dino.weight}</p>
                    <p>Diet: {dino.diet}</p>
                    <p>Description: {dino.description}</p>
                </div>
                <button onClick={() => navigate(-1)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                    Back
                </button>
            </div>
        </div>
    )
}