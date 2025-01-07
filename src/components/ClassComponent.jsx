// Questo è un componente a CLASSE
// Questi componenti sono meno veloci da scrivere

import { Component } from 'react';
// "Component" è il più antico componente a classe che c'è!

class ClassComponent extends Component {
  render() {
    // render è OBBLIGATORIO nei componenti a classe
    // ora qui dentro posso ritornare il JSX

    return (
      <div>
        <h3>{this.props.title}</h3>
        {/* this.props contiene i parametri passati al component ed è un OGGETTO */}
        <p>Eccomi qui!</p>
      </div>
    );
  }
}

export default ClassComponent;
