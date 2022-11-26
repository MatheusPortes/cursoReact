import { useState } from "react";
import { ReactButton } from "src/Components/ReactButton/ReactButton";
import { InputReact } from "src/Components/ReactImput/ReactImput";
import { ReactSpan } from "src/Components/ReactSpan/ReactSpan";
import { Title } from "src/Components/Title/Title";
import { FcApproval, FcHighPriority } from "react-icons/fc"
import './Form.css'

const questions = [
    {
        question: 'Qual método é utilizado para criar componentes?',
        options: [
            'React.makeComponent()',
            'React.createComponent()',
            'React.createElement()',
        ],
        response: 'React.createElement()',
        id: 'p1',
    },
    {
        question: 'Como importamos um componente externo?',
        options: [
            'import Component from "./Component"',
            'require("./Component")',
            'import "./Component"',
        ],
        response: 'import Component from "./Component"',
        id: 'p2',
    },
    {
        question: 'Qual hook não é nativo?',
        options: ['useEffect()', 'useFetch()', 'useCallback()'],
        response: 'useFetch()',
        id: 'p3',
    },
    {
        question: 'Qual palavra deve ser utilizada para criarmos um hook?',
        options: ['set', 'get', 'use'],
        response: 'use',
        id: 'p4',
    },
];

type UserResponsesProps = {
    id: string,
    responses: string[]
}

type ViewResponsesProps = {
    errorCount: number
    successCount: number
    view: boolean
}

export function FormAula10() {
    const [marker, setMarker] = useState(0)
    const [buttonDisplay, setButtonDisplay] = useState(false)
    const [viewResponses, setViewResponses] = useState({ view: false } as ViewResponsesProps)
    const [userResponses, setUserResponses] = useState([] as UserResponsesProps[])

    function nextQuestion() {
        if (marker + 1 < questions.length) {
            setMarker(marker + 1)
        }
    }

    function onSubmit() {
        let contError: number = 0
        let contCorrect: number = 0

        for (const keyY in userResponses) {
            for (const keyX in questions) {

                if (userResponses[keyY].id === questions[keyX].id) {
                    if (userResponses[keyY].responses.length > 1) {
                        contError++
                        continue
                    }

                    const test = userResponses[keyY].responses.find(value => value === questions[keyX].response)

                    if (test) {
                        contCorrect++
                        continue
                    }

                    contError++
                }

            }

        }

        setViewResponses({
            errorCount: contError,
            successCount: contCorrect,
            view: true
        })
    }

    function action() {
        if (questions.length === userResponses.length) {
            onSubmit()
        } else {
            nextQuestion()
            setButtonDisplay(false)
        }
    }

    function getData(event: React.ChangeEvent<HTMLInputElement>) {
        let value = userResponses
        const newValue = { id: event.target.value, responses: [event.target.name] }

        if (!userResponses.length) {
            setUserResponses(prev => {
                return [newValue, ...prev]
            })
            setButtonDisplay(true)
            return
        }

        if (value.filter(value => value.id === event.target.value).length > 0) {
            value = value.map(value => {
                if (value.id === event.target.value) {
                    if (event.target.checked) {
                        value.responses = [...value.responses, event.target.name]
                    } else {
                        value.responses = value.responses.filter(value => value !== event.target.name)
                    }

                    value.responses.length ? setButtonDisplay(true) : setButtonDisplay(false)
                }

                return value
            })
            setUserResponses(value)
            return
        }

        setUserResponses(prev => {
            setButtonDisplay(true)
            return [newValue, ...prev]
        })
    }

    return (<>
        <Title text="Questionário" type='h1' />
        {questions.map(({ id, options, question, response }, index) => {
            return (
                <div key={id + index} >
                    {index === marker &&
                        <>
                            <div className="quiz">
                                {viewResponses.view ?
                                    <div className="quiz-result box-flex">
                                        {viewResponses.successCount === questions.length &&
                                            <>
                                                <FcApproval style={{ fontSize: '3rem', margin: '1rem' }}/>
                                                <p>Parabens!!!</p>
                                                <p>Você Acertou <span>{viewResponses.successCount / questions.length * 100}%</span> das questãos.</p>
                                            </>
                                        }

                                        {viewResponses.successCount > questions.length / 2 &&
                                            viewResponses.successCount !== questions.length &&
                                            <>
                                                <FcApproval style={{ fontSize: '3rem', margin: '1rem' }}/>
                                                <p>Parabens!!!</p>
                                                <p>Você Acertou <span>{viewResponses.successCount / questions.length * 100}%</span> das questãos.</p>
                                            </>
                                        }

                                        {viewResponses.successCount <= viewResponses.errorCount &&
                                            <>
                                                <FcHighPriority style={{ fontSize: '3rem', margin: '1rem' }}/>
                                                <p>Ops!!!</p>
                                                <p>Infelizmente você acertou <span>{viewResponses.successCount / questions.length * 100}%</span> das questãos.</p>
                                            </>
                                        }
                                    </div>
                                    :
                                    <>
                                        <div className="quiz-question ">
                                            {question}
                                        </div>
                                        <div className="quiz-options box-flex">
                                            {options.map((value, index) => {
                                                return (
                                                    <InputReact
                                                        key={index}
                                                        type={'checkbox'}
                                                        label={value}
                                                        value={id}
                                                        name={value}
                                                        onChange={getData}
                                                    />
                                                )
                                            })}
                                        </div>
                                        <div>{response}</div>
                                    </>
                                }
                            </div>
                            {!viewResponses.view &&
                                <div className="quiz-button">
                                    {buttonDisplay &&
                                        <ReactButton title={
                                            questions.length === userResponses.length ?
                                                "Finalisar" :
                                                "Proximo"
                                        } onClick={action} />
                                    }
                                </div>
                            }
                        </>
                    }
                </div>
            )
        })}
        <ReactSpan content="aula - 10" />
    </>)
}