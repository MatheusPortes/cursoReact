import { useState, useEffect } from 'react'
import { useWarning } from 'src/ReactContext/ContextWarning'
import { ReactButton } from '../../Components/ReactButton/ReactButton'
import { InputReact } from '../../Components/ReactImput/ReactImput'
import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'
import { Warning } from '../../Components/Warning/Warning'
import { createUser } from '../../Service/user'
import { ValidationForm } from '../../ValidationForm/ValidationForm'
import './Form.css'

type ErroProps = { 
    message: string,
    stack?: string ,
    name: string,
    cause?: unknown,
}

interface FormProps {
    login: string,
    email: string
    password: string
    name: string
    cpf: number
    rg: number
    birth_date: string
}

interface ErrorProps {
    login?: string,
    email?: string
    password?: string
    name?: string
    cpf?: string
    rg?: string
    birth_date?: string
}

export function FormAula8() {
    const [inputForm, setInputForm] = useState<FormProps>({} as FormProps)
    const [formErrors, setFormErrors] = useState({} as ErrorProps)

    const ER = new ValidationForm()
    const { activateWarning } = useWarning()

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

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        const verified = ER.isObject<ErrorProps>(
            {
                login: ER.isString('Valor para login Invalidos!', inputForm.login)
                    .isRequired('Campo login Obrigatorio!')
                    .run(),
                email: ER.isEmail('Valor para E-mail Invalidos!', inputForm.email)
                    .isString('Tipo E-mail Invalidos!')
                    .isRequired('Campo E-mail Obrigatorio!')
                    .run(),
                password: ER.isRequired('Campo password Obrigatorio!', inputForm.password)
                    .run(),

                name: ER.isString('Valor para Nome Invalidos!', inputForm.name)
                    .isRequired('Campo Nome Obrigatorio!')
                    .run(),
                cpf: ER.isNumber('Valor para CPF Invalidos!', inputForm.cpf)
                    .isRequired('Campo CPF Obrigatorio!')
                    .run(),
                rg: ER.isNumber('Valor para RG Invalidos!', inputForm.rg)
                    .isRequired('Campo RG Obrigatorio!')
                    .run(),
                birth_date: ER.isString('Valor para Data de Nascimento Invalidos!', inputForm.birth_date)
                    .isRequired('Campo Data de Nascimento Obrigatorio!')
                    .run(),
            }
        )
        setFormErrors(verified.ObjectErrors)

        if (!verified.errors) {
            try {
                await createUser({
                    person: {
                        name: inputForm.name,
                        cpf: String(inputForm.cpf),
                        rg: String(inputForm.rg),
                        birth_date: inputForm.birth_date,
                    },
                    user: {
                        email: inputForm.email,
                        login: inputForm.login,
                        password: inputForm.password,
                    }
                })

                activateWarning({ type: 'success', message: 'Usuário criado com sucesso!'})
            } catch (error: any) {
                activateWarning({ type: 'error', message:  error.message as string})
                console.error('Erro inesperado: ', error.message)
            }
        }
    }
    
    return (
        <>
            <Title text="Cadastro de Usuário" type='h1' />
            <form onSubmit={onSubmit}>
                <Title text='Dados de Usuário' type='h4' />
                <div className='grid'>
                    <div className='grid-item'>
                        <InputReact
                            name='login'
                            type='text'
                            label='Login'
                            error={formErrors.login}
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
                </div>

                <Title text='Dados de Pessoas' type='h4' />
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
                            name='cpf'
                            type='text'
                            label='CPF'
                            error={formErrors.cpf}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='rg'
                            type='text'
                            label='RG'
                            error={formErrors.rg}
                            onChange={(event) => {
                                setForm(event.target.value, event.target.name, event.target.type)
                            }}
                        />
                    </div>

                    <div className='grid-item'>
                        <InputReact
                            name='birth_date'
                            type='text'
                            label='Data de Nascimento'
                            error={formErrors.birth_date}
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
