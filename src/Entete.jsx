import './Entete.scss';
import SommairePanier from './SommairePanier';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

function Entete(props) {
    let etatCacherSommaire = true;

    function basculerSommairePanier(props) {
        etatCacherSommaire = (etatCacherSommaire) ? false : true;
        console.log(etatCacherSommaire);
    }

    return (
        <header className="Entete">
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
                    <Badge onClick={basculerSommairePanier} badgeContent="5" color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                    <SommairePanier cacher={etatCacherSommaire} />
                </li>
                <li>
                    Mon compte
                </li>
            </ul>
        </header> 
    );   
}

export default Entete;