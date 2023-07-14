import Model from './Model';
import { useState } from 'react';
import SignIn from '../common/SignIn';
import SignUp from '../common/SignUp';

function AuthenticatorModel(props) {
    const [showSignIn, setShowSignIn] = useState(true);
    return (
        <div>
            <Model
                show={props.show}
                setShow={props.setShow}
                size="sm"
                position="tr"
            >
                {showSignIn ? (
                    <SignIn
                        handleSignIn={() => {}}
                        handleSignUp={() => setShowSignIn(false)}
                    />
                ) : (
                    <SignUp
                        handleSignIn={() => setShowSignIn(true)}
                        handleSignUp={() => {}}
                    />
                )}
            </Model>
        </div>
    );
}

export default AuthenticatorModel;
