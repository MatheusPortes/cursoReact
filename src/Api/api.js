
export const API = async (URL) => {
  const apiPromese = new Promise( (resolve, reject) => {
    fetch(URL)
      .then( res => {
        if(!res.ok) throw new Error('Erro na requisição\nstatus: ', res.status, )
        return res.json()
      })
      .then( dados => {
        return resolve({ content: dados, status: 200 })
      })
      .catch((error) => {
        console.error(error)
        return reject({ content: error, status: 'error' })
      })
  }) 
  return apiPromese
}

export default API