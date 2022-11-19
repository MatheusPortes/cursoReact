import { ReactButton } from "src/Components/ReactButton/ReactButton";
import { InputReact } from "src/Components/ReactImput/ReactImput";
import { ReactSpan } from "src/Components/ReactSpan/ReactSpan";
import { Title } from "src/Components/Title/Title";
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

export function FormAula10() {
    return (<>
        <Title text="Questionário" type='h1' />
        {questions.map(({ id, options, question, response }, index) => {
            return (
                <>
                    <div key={id + index} className="quiz">
                        <div className="quiz-question ">
                            {question}
                        </div>
                        <div className="quiz-options box-flex">
                            {options.map((value) => {
                                return (
                                    <>
                                        <InputReact type={'checkbox'} label={value} />
                                    </>
                                )
                            })}
                        </div>
                        <div>{response}</div>
                    </div>
                    <div className="quiz-button">
                        <ReactButton title="Proximo" />
                    </div>
                </>
            )
        })}
        <ReactSpan content="aula - 10" />
    </>)
}