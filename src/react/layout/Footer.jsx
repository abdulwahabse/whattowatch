import { Link } from 'react-router-dom';
function Footer() {
    return (
        <footer className="footer">
            <div className="container footer__container">
                <p className="typography-4 color-light footer__copyright">
                    Copyright © 2023 What to Watch. All rights reserved
                </p>
                <div className="footer__links">
                    <Link
                        to="/"
                        className="typography-3 color-light footer__link "
                    >
                        Privacy Policy
                    </Link>
                    <Link
                        to="/"
                        className="typography-3 color-light footer__link "
                    >
                        Careers
                    </Link>
                    <Link
                        to="/"
                        className="typography-3 color-light footer__link "
                    >
                        Help
                    </Link>
                </div>
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
