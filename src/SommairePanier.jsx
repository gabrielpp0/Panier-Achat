import './SommairePanier.scss';

export default function SommairePanier(props) {

    const etatCacher = props.cacher;

    return (
        <div className={'SommairePanier' + (etatCacher?' cacher':'')}>
            <span className="nbArticles">
                Article differents :
            </span>
            <span className="qteArticles">
                Nombres total d'article :
            </span>
            <span className="sousTotal">
                Sous-total :
            </span>
            <span className="tps">
                TPS :
            </span>
            <span className="tvq">
                TVQ :
            </span>
            <span className="total">
                Total :
            </span>
        </div>
    );
}