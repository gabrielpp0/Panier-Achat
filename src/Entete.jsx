import './Entete.css';

function Entete(props) {
    return (
        <header>
            <div>
                logo
            </div>
            <ul className="navPrincipale">
                <li>
                    Produits
                </li>
                <li>
                    A propos de nous
                </li>
            </ul>
            <ul className="navUtilisateur">
                <li>
                    Panier
                </li>
                <li>
                    Mon compte
                </li>
            </ul>
        </header> 
    );   
}

export default Entete;