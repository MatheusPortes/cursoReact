const Protudos = () => {
  const protudos = [
    {
      nome: 'smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      nome: 'nodebook',
      preco: 'R$ 3000',
      cores: ['#ffdbd5', '#d4394b', '#f37c59'],
    },
    {
      nome: 'smartphone',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1cb', '#f95786'],
    },
  ];

  const filtro = (array) => {
    let newArrey;
    newArrey = array.filter((f) => f.preco.replace('R$', '') > 1500);
    return newArrey;
  };
  let ts = filtro(protudos);
  console.log(ts);

  return (
    <>
      {ts.map(({ nome, preco, cores }) => (
        <>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: '#fff' }} key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
};

export default Protudos