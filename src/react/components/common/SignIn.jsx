import Input from '../form/Input';
import Button from './Button';
function SignInModel(props) {
    return (
        <div className="sign-in">
            <div className="sign-in__container">
                <div className="sign-in__header">
                    <h1 className="sign-in__heading">Sign In</h1>
                </div>
                <div className="sign-in__body">
                    <Input type="email" placeholder="Email" label="Email" />
                    <Input
                        type="password"
                        placeholder="Password"
                        label="Password"
                    />
                </div>
                <div className="sign-in__footer">
                    <Button
                        color="primary"
                        full={true}
                        onClick={props.handleSignIn}
                    >
                        Sign In
                    </Button>
                    <Button
                        color="secondary"
                        full={true}
                        onClick={props.handleSignUp}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignInModel;
