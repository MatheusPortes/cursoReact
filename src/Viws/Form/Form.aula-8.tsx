import { useState } from 'react'
import { Post } from '../../API/drag-network-api'
import { ImputReact } from '../../Components/ImputReact/ImputReact'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'

interface formProps {
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

const defaultInit = {
    name: ``,
    email: ``,
    password: ``,
    cep: ``,
    road: ``,
    numero: 0,
    district: ``,
    city: ``,
    state: ``,
}

export function FormAula8() {
    const [inputForm, setInputForm] = useState<formProps>(defaultInit)

    const setForm = (value: string, input: string) => {
        setInputForm((prev) => {
            return { ...prev, [input]: value }
        })
    }

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const body = {
            user: {
                login: 'matheus.lacerda',
                password: '123456',
                email: 'portes.matheus@outlook.com',
            },
            person: {
                name: 'Matheus Portes Lacerda',
                cpf: '01978788637',
            },
        }

        const ts = await Post('http://localhost:8080/user', body)
        console.log(ts)
    }

    return (
        <div>
            <Title text="Create User" />
            <form onSubmit={onSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Martheus Portes Lacerda"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.name}
                    />
                    <label htmlFor="name">E-mail</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="email.usar@com.br"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.email}
                    />
                    <label htmlFor="name">Senha</label>
                    <input
                        type="password"
                        name="password"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.password}
                    />
                    <label htmlFor="name">CEP</label>
                    <input
                        type="text"
                        name="cep"
                        placeholder="00000-000"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.cep}
                    />
                    <label htmlFor="name">Rua</label>
                    <input
                        type="text"
                        name="road"
                        placeholder="Av. Minas Gerais"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.road}
                    />
                    <label htmlFor="number">Numero</label>
                    <input
                        type="text"
                        name="numero"
                        placeholder="000"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.numero}
                    />
                    <label htmlFor="name">Bairro</label>
                    <input
                        type="text"
                        name="district"
                        placeholder="Olimpus"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.district}
                    />
                    <label htmlFor="name">Cidade</label>
                    <input
                        type="text"
                        name="city"
                        placeholder="São Pedro"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.city}
                    />
                    <label htmlFor="name">Estado</label>
                    <input
                        type="text"
                        name="state"
                        placeholder="Distrito federal"
                        onChange={(event) => {
                            setForm(event.target.value, event.target.name)
                        }}
                        value={inputForm.state}
                    />
                </div>

                <ImputReact className='test' name='test'/>
                <input type="submit" value={`Enviar`} />
            </form>
            <ReactSpan content="aula - 8" />
        </div>
    )
}
