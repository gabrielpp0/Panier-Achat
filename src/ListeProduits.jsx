import './ListeProduits.scss';
import Produit from './Produit';
import tabProduits from './data/produits.json';

export default function ListeProduits(props) {
    console.log(tabProduits);
    return (
        <div className="ListeProduits">
            <h2>
                Produits disponibles
            </h2>
            <ul>
                {
                    tabProduits.map((elt) => 
                        <Produit nom={elt.nom} prix={elt.prix} id={elt.id} />
                    )
                }
            </ul>
        </div>
    );
}