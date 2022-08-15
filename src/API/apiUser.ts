export const Fetch = new Object({Get: Function, Post: Function, Put: Function, Delete: Function})

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

// export const Get = async (URL: string): Promise<any> => {
//   const apiPromese = new Promise( (resolve, reject) => {
//     fetch(URL, {
//       method: `GET`,

//     })
//       .then( (res:any) => {
//         if(!res.ok) throw new Error('Erro na requisição\nstatus: ', res.status, )
//         return res.json()
//       })
//       .then( dados => {
//         return resolve(dados)
//       })
//       .catch((error) => {
//         console.error(error)
//         return reject(error)
//       })
//   }) 
//   return apiPromese
// }

export const Post = async (URL: string, body: object): Promise<any> => {
  const apiPromese = new Promise( (resolve, reject) => {
    fetch(URL, {
      method: `POST`,
      headers: { 'Content-Type':`application/json` },
      body: JSON.stringify(body),
    })
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

// Fetch.Post = Post

export default API