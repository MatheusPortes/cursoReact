import { ReactSpan } from '../../Components/ReactSpan/ReactSpan'
import { Title } from '../../Components/Title/Title'

export const Home = () => {
    return (
        <div>
            <Title text="Home" />
            <strong>
                <p>Esta é a Home do site</p>
            </strong>
            <ReactSpan content="aula - 1" />
        </div>
    )
}
