import Model from './Model';
import { useState } from 'react';
import SignIn from '../common/SignIn';
import SignUp from '../common/SignUp';
import { authenticateUser } from '../../../api/titlesAndUserFetcher';
import { useUser } from '../../../contexts/userContext';
import { useModel } from '../../../contexts/modelContext';

function AuthenticatorModel(props) {
    const user = useUser();
    const { hideAuth } = useModel();
    const [showSignIn, setShowSignIn] = useState(true);
    const [feedback, setFeedback] = useState(props.feedback || '');
    const [signInForm, setSignInForm] = useState({
        email: '',
        password: '',
        feedback: '',
    });
    const [signUpForm, setSignUpForm] = useState({
        name: '',
        email: '',
        password: '',
        file: '',
        feedback: '',
    });

    const handleSignIn = (e) => {
        e.preventDefault();
        const isSignInSuccess = authenticateUser(
            signInForm.email,
            signInForm.password
        );
        if (isSignInSuccess) {
            user.setIsLoggedIn(true);
            hideAuth();
        } else {
            setFeedback('Invalid email or password');
        }
    };

    const handleSignUp = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <form>
                <Model
                    show={props.show}
                    hide={props.hide}
                    size="sm"
                    position="tr"
                >
                    {showSignIn ? (
                        <SignIn
                            form={signInForm}
                            setForm={setSignInForm}
                            handleSignIn={handleSignIn}
                            handleSignUp={() => setShowSignIn(false)}
                            feedback={feedback}
                        />
                    ) : (
                        <SignUp
                            form={signUpForm}
                            setForm={setSignUpForm}
                            handleSignIn={() => setShowSignIn(true)}
                            handleSignUp={handleSignUp}
                        />
                    )}
                </Model>
            </form>
        </div>
    );
}

export default AuthenticatorModel;
