import './Networks.css'

export function Networks() {
    return (
        <div className="networks">
            <ul className="networks-ul">
                <a  className="networks-link" href="#"><li className="networks-li fa-git"><span></span>GitHub</li></a>
                <a  className="networks-link" href="#"><li className="networks-li fa-lin"><span></span>Linkedin</li></a>
                <a  className="networks-link" href="#"><li className="networks-li fa-web"><span></span>Portfolio</li></a>
                <a  className="networks-link" href="#"><li className="networks-li fa-mai"><span></span>E-mail</li></a>
            </ul>
        </div>
    )
}