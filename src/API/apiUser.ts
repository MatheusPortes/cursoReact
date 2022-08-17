export const API = async (URL: string): Promise<any> => {
    const apiPromese = new Promise((resolve, reject) => {
        API(URL)
            .then((res: any) => {
                if (!res.ok)
                    throw new Error('Erro na requisição\nstatus: ', res.status)
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

export const Get = async (
    inputURL: string,
    headers?: HeadersInit,
    body?: BodyInit
): Promise<any> => {
    const apiPromese = new Promise((resolve, reject) => {
        let fetchParams = {}

        if (headers) {
            fetchParams = { ...fetchParams, headers: headers }
        }

        if (body) {
            fetchParams = { ...fetchParams, body: body }
        }

        fetch(inputURL, {
            method: `GET`,
            ...fetchParams,
        })
            .then((res: any) => {
                if (!res.ok)
                    throw new Error('Erro na requisição\nstatus: ', res.status)
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

export const Post = async (
    URL: string,
    body: object,
    header: HeadersInit
): Promise<any> => {
    const fetchConfig: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { ...header },
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(URL, fetchConfig)
            .then((res: any) => {
                if (!res.ok)
                    throw new Error('Erro na requisição\nstatus: ', res.status)
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

export const Put = async (
    URL: string,
    body: object,
    header: HeadersInit
): Promise<any> => {
    const fetchConfig: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { ...header },
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(URL, fetchConfig)
            .then((res: any) => {
                if (!res.ok)
                    throw new Error('Erro na requisição\nstatus: ', res.status)
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

export const Delete = async (
    URL: string,
    body: object,
    header: HeadersInit
): Promise<any> => {
    const fetchConfig: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { ...header },
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(URL, fetchConfig)
            .then((res: any) => {
                if (!res.ok)
                    throw new Error('Erro na requisição\nstatus: ', res.status)
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

export const Patch = async (
    URL: string,
    body: object,
    header: HeadersInit
): Promise<any> => {
    const fetchConfig: RequestInit = {
        method: 'POST',
        body: JSON.stringify(body),
        headers: { ...header },
    }

    const apiPromese = new Promise((resolve, reject) => {
        fetch(URL, fetchConfig)
            .then((res: any) => {
                if (!res.ok)
                    throw new Error('Erro na requisição\nstatus: ', res.status)
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

export const Fetch = {
    Get: Get,
    Post: Post,
    Put: Put,
    Delete: Delete,
    Patch: Patch,
}

export default API
