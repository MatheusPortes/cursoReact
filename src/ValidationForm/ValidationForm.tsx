
type ObjectErrors = {
    [Keys:string]: string | number | boolean
}

export class ValidationForm {
    errors = {}

    isNumber(fieldName: string, value: any, mensagen: string) {
        if(value) {

        } else {
            
        }
        return this
    }

    isString(fieldName: string, value: any, mensagen: string) {
        if(value) {

        } else {

        }
        return this
    }

    isBoolean(fieldName: string, value: any, mensagen: string) {
        if (value === `true` || value === `false`) {
            //
        } else {
            this.errors = {  ...this.errors , [fieldName]: mensagen }
        }
        return this
    }

    isRequired(fieldName: string, value: any, mensagen: string) {
        return this
    }

    run() {
        return this.errors
    }
}

const test = new ValidationForm()
