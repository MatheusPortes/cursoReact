
export const API = async (URL: string): Promise<any> => {
  const apiPromese = new Promise( (resolve, reject) => {
    fetch(URL)
      .then( (res:any) => {
        if(!res.ok) throw new Error('Erro na requisição\nstatus: ', res.status, )
        return res.json()
      })
      .then( dados => {
        return resolve(dados)
      })
      .catch((error) => {
        console.error(error)
        return reject(error)
      })
  }) 
  return apiPromese
}

export default API