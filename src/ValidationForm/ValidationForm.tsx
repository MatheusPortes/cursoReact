const regEmail = /^[a-z0-9\.\-\_]{2,}@[a-z0-9\.\-\_]+\.(com|edu|org)(\.br)?$/gm

type ObjectErrors = {
    [Keys: string]: any
}

export class ValidationForm {
    // private errors: ObjectErrors = {}
    private errors: any
    private valuedNow?: any = undefined

    private HasValue () {
        
    }

    isObject<T extends ObjectErrors>(object: T) {
        // for (const key in object) {
        //     if(object[key] == undefined) {
        //         delete object[key]
        //     }
        // }

        return object
    }

    isNumber(mensagen: string, value?: any) {
        this.errors = undefined

        if(this.valuedNow === undefined && value === undefined) {
            this.errors = 'Value not defined.'
            return this
        }

        if(value === undefined && this.valuedNow) {
            value = this.valuedNow
        }

        this.valuedNow = value

        if (isNaN(Number(value))) {
            this.errors = mensagen
        }

        return this
    }

    isString(mensagen: string, value?: any) {
        this.errors = undefined

        if ((value === `true` || value === `false`)) {
            this.errors = mensagen
        }

        if (Number.isFinite(Number(Number(value)))) {
            this.errors = mensagen
        }

        if (typeof value !== 'string') {
            this.errors = mensagen
        }

        return this
    }

    isBoolean(mensagen: string, value?: any) {
        this.errors = undefined

        if (value !== `true` || value !== `false`) {
            this.errors = mensagen
        }

        return this
    }

    isEmail(mensagen: string, value?: any ) {
        this.errors = undefined

        if(!regEmail.test(value)) {
            this.errors = mensagen
        }
        return this
    }

    isRequired(mensagen: string, value?: any) {
        this.errors = undefined

        if (!value) {
            this.errors = mensagen
        }

        return this
    }

    run() {
        return this.errors
    }
}

function validate<T extends Record<string, any>>(values: T) {
    let errors: any = {}

    const ts = Object.keys(values).map(values => {

    })

    if (!values.name) {
        errors.name = "Username is required !"
    }

    if (!values.email) {
        errors.email = "Email is required !"
    }

    if (!values.password) {
        errors.password = "Password is required !"
    }

    if (!values.cep) {
        errors.cep = "cep is required !"
    }

    if (!values.road) {
        errors.road = "road is required !"
    }

    if (!values.numero) {
        errors.numero = "numero is required !"
    }

    if (!values.district) {
        errors.district = "district is required !"
    }

    if (!values.city) {
        errors.city = "city is required !"
    }

    if (!values.state) {
        errors.state = "state is required !"
    }

    return errors
}
