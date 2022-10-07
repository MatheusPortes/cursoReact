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

export interface IError {
    messageError: string
    validate: (field: string, inputForm: object) => boolean
    ts: any
}

export function FormAula8() {
    const [inputForm, setInputForm] = useState<FormProps>({} as FormProps)
    const [formErrors, setFormErrors] = useState({} as any)

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

    function validate(values: any) {
        let errors: any = {}
        // const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i

        if (!values.name) {
            errors.name = "Username is required !"
        }

        if (!values.email) {
            errors.email = "Email is required !"
        }

        if (!values.Password) {
            errors.password = "Password is required !"
        }

        return errors
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        
        setFormErrors(validate(inputForm))

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
