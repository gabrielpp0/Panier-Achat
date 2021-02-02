import './Page.css';
import Entete from './Entete';
import Pied2Page from './Pied2Page';
import ListeProduits from './ListeProduits';

function Page() {
  return (
    <div className="Page">
      <Entete />
      <section className="contenuePrincipale">
        <ListeProduits />
      </section>
      <Pied2Page avecNom='Gabriel Poirier' phrase='Tout droit reserve'/>
    </div>
  );
}

export default Page;