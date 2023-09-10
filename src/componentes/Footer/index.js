import './Footer.css'

const Footer = () => {
    return (
        <footer className="footer-page">
            <section>
                <ul>
                    <li><a href="https://www.facebook.com/hebert.spitzer.39/" target="_blank" rel="noreferrer"><img className="logo_redes_sociais" src='/image/fb.png' alt='Logo Facebook'/></a></li>
                    <li><a href="https://www.instagram.com/_hspitzer_/" target="_blank" rel="noreferrer"><img className="logo_redes_sociais" src='/image/ig.png' alt='Logo Instagram'/></a></li>
                    <li><a href="https://twitter.com/hebertsp03" target="_blank" rel="noreferrer"><img className="logo_redes_sociais" src='/image/tw.png' alt='Logo Twitter'/></a></li>
                </ul>
            </section>
            <section>
                <img className='logo-nutrition' src='/image/logo.png' alt='Logo do site'/>
            </section>
            <section>
                <p>
                    Desenvolvido por Hebert Spitzer
                </p>
            </section>
        </footer>
    )
}

export default Footer