//eslint-disable-next-line
const regEmail = /^[a-z0-9\.\-\_]{2,}@[a-z0-9\.\-\_]+\.(com|edu|org)(\.br)?$/m

type ObjectErrors = {
    [Keys: string]: any
}

export class ValidationForm {
    private errors: any
    private valuedNow?: any = undefined

    private HasValue (value: any) {
        if(this.valuedNow === undefined && value === undefined) {
            this.errors = 'Value not defined.'
            return this
        }
    }

    private DefaultCheck (value: any) {

        if(value) {
            this.valuedNow = value
        }

        if(value === undefined && this.valuedNow) {
            return value = this.valuedNow
        }

        return value
    }

    isObject<T extends ObjectErrors>(ObjectErrors: T) {
        let errors: boolean = false
        for (const key in ObjectErrors) {
            if(ObjectErrors[key] !== undefined) {
                errors = true
            }
        }

        return { ObjectErrors, errors }
    }

    isNumber(mensagen: string, value?: any) {
        
        this.HasValue(value)
        value = this.DefaultCheck(value)

        if (isNaN(Number(value))) {
            this.errors = mensagen
        }

        return this
    }

    isString(mensagen: string, value?: any) {

        this.HasValue(value)
        value = this.DefaultCheck(value)
        if ((value === `true` || value === `false`)) {
            this.errors = mensagen
        }
        
        if (Number.isFinite(value)) {
            this.errors = mensagen
        }
        
        if (typeof value !== 'string') {
            this.errors = mensagen
        }

        return this
    }

    isBoolean(mensagen: string, value?: any) {
        
        this.HasValue(value)
        value = this.DefaultCheck(value)

        if (value !== `true` || value !== `false`) {
            this.errors = mensagen
        }

        return this
    }

    isEmail(mensagen: string, value?: any ) {
        
        this.HasValue(value)
        value = this.DefaultCheck(value)

        if(!regEmail.test(value)) {
            this.errors = mensagen
        }
        return this
    }

    isRequired(mensagen: string, value?: any) {

        this.HasValue(value)
        value = this.DefaultCheck(value)

        if (!value) {
            this.errors = mensagen
        }

        return this
    }

    run() {
        const resErrors = this.errors
        this.valuedNow = undefined
        this.errors = undefined
        return resErrors
    }
}
