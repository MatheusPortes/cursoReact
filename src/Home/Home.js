export default Home = () => {
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
    </>
  );
};
