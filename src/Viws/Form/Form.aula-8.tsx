import { useEffect } from 'react'
import { useState } from 'react'
import { Post } from '../../API/drag-network-api'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
import { InputReact } from '../../Components/ReactImput/ReactImput'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'
import './Form.css'

interface FormProps {
    name: string
    email: string
    password: string
    cep: string
    road: string
    numero: number
    district: string
    city: string
    state: string
}

interface ErrorProps {
    name: string
    email: string
    password: string
    cep: string
    road: string
    numero: string
    district: string
    city: string
    state: string
}

export interface IError {
    messageError: string
    validate: (field: string, inputForm: object) => boolean
    ts: any
}

export function FormAula8() {
    const [inputForm, setInputForm] = useState<FormProps>({} as FormProps)
    const [formErrors, setFormErrors] = useState({} as ErrorProps)

    const converter = (value: string, type: string): number | string | boolean => {
        if ((value === `true` || value === `false`) && type !== `password`) {
            return JSON.parse(value)
        }

        if (Number(value) && type !== `password`) {
            return Number(value)
        }

        return value
    }

    const setForm = (value: string, input: string, type: string) => {
        setInputForm((prev) => {
            return { ...prev, [input]: converter(value, type) }
        })
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

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const error: ErrorProps = validate(inputForm)

        setFormErrors(error)

        // const body = {
        //     user: {
        //         login: 'matheus.lacerda',
        //         password: '123456',
        //         email: 'portes.matheus@outlook.com',
        //     },
        //     person: {
        //         name: 'Matheus Portes Lacerda',
        //         cpf: '01978788637',
        //     },
        // }

        // const ts = await Post('http://localhost:8080/user', body)
    }
console.log(formErrors)
console.log(inputForm)
    return (
        <>
            <Title text="Cadastro de Usuário" />
            <form onSubmit={onSubmit}>
                <div className='grid'>
                    <div className='grid-item'>
                        <InputReact
                            name='name'
                            type='text'
                            label='Nome'
                            error={formErrors.name}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />

                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='email'
                            type='email'
                            label='E-mail'
                            error={formErrors.email}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='password'
                            type='password'
                            label='Senha'
                            error={formErrors.password}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />

                    </div>
                    <div className='grid-item'>
                        <InputReact
                            name='cep'
                            type='text'
                            label='CEP 00000-00'
                            error={formErrors.cep}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='road'
                            type='text'
                            label='Rua'
                            error={formErrors.road}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='numero'
                            type='number'
                            label='Número'
                            error={formErrors.numero}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='district'
                            type='text'
                            label='Bairro'
                            error={formErrors.district}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='city'
                            type='text'
                            label='Cidade'
                            error={formErrors.city}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='state'
                            type='text'
                            label='Estado'
                            error={formErrors.state}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>
                </div>
                <div className='grid'>
                    <div style={{ marginTop: '2em' }}>
                        <ReactButton
                            title={`Enviar`}
                            type={'submit'}
                        />
                    </div>
                </div>
            </form>
            <ReactSpan content="aula - 8" />
        </>
    )
}
