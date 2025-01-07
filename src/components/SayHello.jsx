const SayHello = function (props) {
  // props è SEMPRE un oggetto!
  // conterrà al suo interno TUTTE le prop ricevute da questo componente
  console.log(props);

  return (
    <>
      <h2>Questo è un componente di benvenuto</h2>
      <h4>Diamo il benvenuto a {props.personName}</h4>
    </>
  );
};

export default SayHello;
