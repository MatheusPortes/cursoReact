import { Copyright } from '../Copyright/Copyright'
import { Networks } from '../Networks/Networks'
import './Footer.css'

export function Footer() {
    return (
        <footer className="footer footer-color">
            {/* <h1 className="header-h1">Curso ReactJS</h1> */}
            <Copyright />
            <Networks />
        </footer>
    )
}