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
    const [inputError, setInputError] = useState<FormProps>({} as FormProps)

    const setForm = (value: string, input: string) => {
        setInputForm((prev) => {
            return { ...prev, [input]: value }
        })
    }

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
                        error={inputForm.name}
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='email'
                        type='email'
                        label='E-mail'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='password'
                        type='password'
                        label='Senha'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='cep'
                        type='text'
                        label='CEP 00000-00'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='road'
                        type='text'
                        label='Rua'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='numero'
                        type='number'
                        label='Número'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='district'
                        type='text'
                        label='Bairro'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='city'
                        type='text'
                        label='Cidade'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                    />

                    <InputReact
                        name='state'
                        type='text'
                        label='Estado'
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
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
