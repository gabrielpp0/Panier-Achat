import './Produit.css';

export default function Produit(props) {
    return (
        <li className="Produit">
            <div className="image">
                <img src={'images-produits/' + props.id + '.wedp'} alt={props.nom}/>
            </div>
            <div className='info'>
                <h3 className='nom'>{props.nom}</h3>
                <p className='prix'>{props.prix}</p>
                <button> Ajouter au panier</button>
            </div>
        </li>
    );
}