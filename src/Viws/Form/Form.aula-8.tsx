import { useState } from 'react'
import { Post } from '../../API/drag-network-api'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
import { InputReact } from '../../Components/ReactImput/ReactImput'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'

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

export function FormAula8() {
    const [inputForm, setInputForm] = useState<FormProps>({} as FormProps)

    const setForm = (value: string, input: string) => {
        setInputForm((prev) => {
            return { ...prev, [input]: value }
        })
    }

    // const inputError = (value:<T>):boolean => {
    //     if(value) {
    //         return false
    //     } else {
    //         return true
    //     }
        
    // }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

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
        console.log(inputForm)
    }

    return (
        <div>
            <Title text="Cadastro de Usuário" />
            <form onSubmit={onSubmit}>
                <div className='grid'>
                    <InputReact
                        name='name'
                        type='text'
                        label='Nome'
                        value={inputForm.name}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='email'
                        type='email'
                        label='E-mail'
                        value={inputForm.email}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='password'
                        type='password'
                        label='Senha'
                        value={inputForm.password}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='cep'
                        type='text'
                        label='CEP 00000-00'
                        value={inputForm.password}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='road'
                        type='text'
                        label='Rua'
                        value={inputForm.road}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='numero'
                        type='number'
                        label='Número'
                        value={inputForm.numero}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='district'
                        type='text'
                        label='Bairro'
                        value={inputForm.district}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='city'
                        type='text'
                        label='Cidade'
                        value={inputForm.city}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />

                    <InputReact
                        name='state'
                        type='text'
                        label='Estado'
                        value={inputForm.state}
                        onChange={(event) => {
                            if(event.target.value) {
                                setForm(event.target.value, event.target.name)
                            }
                        }}
                    />
                </div>
                <ReactButton
                        title={`Enviar`}
                        type={'submit'}
                    />
            </form>
            <ReactSpan content="aula - 8" />
        </div>
    )
}
