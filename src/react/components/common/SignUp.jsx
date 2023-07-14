import Input from '../form/Input';
import Button from './Button';
function SignUp(props) {
    return (
        <div className="sign-up">
            <div className="sign-up__container">
                <div className="sign-up__header">
                    <h1 className="sign-up__heading">Sign Up</h1>
                </div>
                <div className="sign-up__body">
                    <Input type="text" placeholder="Name" label="Name" />
                    <Input type="email" placeholder="Email" label="Email" />
                    <Input
                        type="password"
                        placeholder="Password"
                        label="Password"
                    />
                    <Input
                        type="file"
                        placeholder="Profile Picture"
                        label="Profile Picture"
                    />
                </div>
                <div className="sign-up__footer">
                    <Button
                        color="primary"
                        full={true}
                        onClick={props.handleSignUp}
                    >
                        Sign Up
                    </Button>
                    <Button
                        color="secondary"
                        full={true}
                        onClick={props.handleSignIn}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
