const defaultHeaders = {
    'Content-Type': 'application/json',
    Accept: '*/*',
    'Accept-Encoding': 'gzip, deflate, br',
}

export const Get = async ( inputURL: string, body?: {}, headers?: HeadersInit ): Promise<any> => {
    let fetchParams = {}

    if (headers) {
        fetchParams = { ...fetchParams, headers: headers }
    } else {
        fetchParams = {
            ...fetchParams,
            headers: defaultHeaders,
        }
    }

    if (body) {
        fetchParams = { ...fetchParams, body: JSON.stringify(body) }
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(inputURL, {
            method: `GET`,
            ...fetchParams,
        })
            .then((res: any) => {
                return res.json()
            })
            .then((dados) => {
                return resolve(dados)
            })
            .catch((error) => {
                console.error(error)
                return reject(error)
            })
    })
    return apiPromese
}

export const Post = async ( inputURL: string, body?: {}, headers?: HeadersInit ): Promise<any> => {
    let fetchParams = {}

    if (headers) {
        fetchParams = { ...fetchParams, headers: headers }
    } else {
        fetchParams = {
            ...fetchParams,
            headers: defaultHeaders,
        }
    }

    if (body) {
        fetchParams = { ...fetchParams, body: JSON.stringify(body) }
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(inputURL, {
            method: `POST`,
            ...fetchParams,
        })
            .then((res: Response) => {
                return res.json()
            })
            .then((dados) => {
                return resolve(dados)
            })
            .catch((error) => {
                console.error(error)
                return reject(error)
            })
    })
    return apiPromese
}

export const Put = async ( inputURL: string, body?: {}, headers?: HeadersInit ): Promise<any> => {
    let fetchParams = {}

    if (headers) {
        fetchParams = { ...fetchParams, headers: headers }
    } else {
        fetchParams = {
            ...fetchParams,
            headers: defaultHeaders,
        }
    }

    if (body) {
        fetchParams = { ...fetchParams, body: JSON.stringify(body) }
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(inputURL, {
            method: `PUT`,
            ...fetchParams,
        })
            .then((res: any) => {
                return res.json()
            })
            .then((dados) => {
                return resolve(dados)
            })
            .catch((error) => {
                console.error(error)
                return reject(error)
            })
    })
    return apiPromese
}

export const Delete = async ( inputURL: string, body?: {}, headers?: HeadersInit ): Promise<any> => {
    let fetchParams = {}

    if (headers) {
        fetchParams = { ...fetchParams, headers: headers }
    } else {
        fetchParams = {
            ...fetchParams,
            headers: defaultHeaders,
        }
    }

    if (body) {
        fetchParams = { ...fetchParams, body: JSON.stringify(body) }
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(inputURL, {
            method: `DELETE`,
            ...fetchParams,
        })
            .then((res: any) => {
                return res.json()
            })
            .then((dados) => {
                return resolve(dados)
            })
            .catch((error) => {
                console.error(error)
                return reject(error)
            })
    })
    return apiPromese
}

export const Patch = async ( inputURL: string, body?: {}, headers?: HeadersInit ): Promise<any> => {
    let fetchParams = {}

    if (headers) {
        fetchParams = { ...fetchParams, headers: headers }
    } else {
        fetchParams = {
            ...fetchParams,
            headers: defaultHeaders,
        }
    }

    if (body) {
        fetchParams = { ...fetchParams, body: JSON.stringify(body) }
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(inputURL, {
            method: `PATCH`,
            ...fetchParams,
        })
            .then((res: any) => {
                return res.json()
            })
            .then((dados) => {
                return resolve(dados)
            })
            .catch((error) => {
                console.error(error)
                return reject(error)
            })
    })
    return apiPromese
}

export const FetchAPI = {
    Get: Get,
    Post: Post,
    Put: Put,
    Delete: Delete,
    Patch: Patch,
}

export default FetchAPI
