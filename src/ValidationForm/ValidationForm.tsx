
type ObjectErrors = {
    [Keys:string]: string | number | boolean
}

export class ValidationForm {
    // private errors: ObjectErrors = {}
    private errors: any 
    private fieldNow: string = ''
    private valuedNow: any

    isNumber(fieldName: string, value: any, mensagen: string) {
        this.fieldNow = fieldName
        console.log(isNaN(Number(value)))
        if (isNaN(Number(value))) {
            // this.errors = {  ...this.errors , [fieldName]: mensagen }
            this.errors = mensagen
        }

        return this
    }

    isString(fieldName: string, value: any, mensagen: string) {
        this.fieldNow = fieldName

        if ((value === `true` || value === `false`)) {
            // this.errors = {  ...this.errors , [fieldName]: mensagen }
            this.errors = mensagen
        }

        if (Number(value)) {
            // this.errors = {  ...this.errors , [fieldName]: mensagen }
            this.errors = mensagen
        }

        return this
    }

    isBoolean(fieldName: string, value: any, mensagen: string) {
        this.fieldNow = fieldName

        if (value !== `true` || value !== `false`) {
            // this.errors = {  ...this.errors , [fieldName]: mensagen }
            this.errors = mensagen
        }

        return this
    }

    isRequired(fieldName: string, value: any, mensagen: string) {
        this.fieldNow = fieldName

        if (!value) {
            // this.errors = {  ...this.errors , [fieldName]: mensagen }
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

    const ts = Object.keys(values).map( values => {
        
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
