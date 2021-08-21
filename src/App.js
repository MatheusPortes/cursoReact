function App() {
  const luana = {
    nome: 'luana',
    idade: 27,
    compras: [
      { nomePorduto: 'Notebook', preco: 'R$ 2500' },
      { nomePorduto: 'Geladeira', preco: 'R$ 3000' },
      { nomePorduto: 'Smartphone', preco: 'R$ 1500' },
    ],
    ativo: true,
  };

  const mario = {
    nome: 'mario',
    idade: 31,
    compras: [
      { nomePorduto: 'Notebook', preco: 'R$ 2500' },
      { nomePorduto: 'Geladeira', preco: 'R$ 3000' },
      { nomePorduto: 'Smartphone', preco: 'R$ 1500' },
      { nomePorduto: 'guitara', preco: 'R$ 3500' },
    ],
    ativo: true,
  };

  const dado = mario;

  const ttlPreco = (valores) => {
    let ttlPreco = 0;

    for (let index in valores) {
      let valor = parseInt(valores[index].preco.replace('R$ ', ''));
      ttlPreco += valor;
    }
    return ttlPreco;
  };

  const volotT = ttlPreco(dado.compras);

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
      <div id="id">
        <p id="nome">Nome: {dado.nome}</p>
        <p id="idade">Idade: {dado.idade}</p>
        <p id="situação">
          Situação:{' '}
          <span style={dado.ativo ? { color: 'blue' } : { color: 'red' }}>
            {dado.ativo ? 'ativo' : 'desativado'}
          </span>
        </p>
        <p id="ttl">Total gasto: {volotT}</p>
        <p
          id="text"
          style={volotT > 10000 ? { display: 'block' } : { display: 'none' }}
        >
          você esta gastando muito.
        </p>
      </div>
      <hr />

      {ts.map(({ nome, preco, cores }) => (
        <>
          <h1>{nome}</h1>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map(( cor ) => (
              <li style={{ backgroundColor: cor, color: '#fff' }} key={cor}>{cor}
              </li>
            ))}
          </ul>
        </>
      ))}
    </>
  );
}

export default App;
