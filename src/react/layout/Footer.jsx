import { Link } from 'react-router-dom';
import NavLinks from './../components/nav/NavLinks';
function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer__container">
                <div className="footer__links">
                    <NavLinks />
                </div>
                <p className="typography-4 color-light footer__copyright">
                    Copyright © {currentYear} What to Watch. All rights reserved
                </p>

                <p className="typography-3 color-light">
                    Coded by{' '}
                    <a
                        className="footer__credit-name color-lightest"
                        href="https://www.linkedin.com/in/abdulwahabse/"
                    >
                        Abdul Wahab
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
