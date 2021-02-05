import './Produit.scss';
import BtnAjoutPanier from './BtnAjoutPanier';

export default function Produit(props) {
    return (
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.webp'} alt={props.nom}/>
            </div>
            <div className='info'>
                <h3 className='nom'>{props.nom}</h3>
                <p className='prix'>{props.prix}</p>
                <BtnAjoutPanier />
            </div>
        </li>
    );
}