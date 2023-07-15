import Input from '../form/Input';
import Button from './Button';
function SignInModel(props) {
    const { form, setForm, handleSignIn, handleSignUp } = props;
    const handleFormChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="sign-in">
            <div className="sign-in__container">
                <div className="sign-in__header">
                    <h1 className="sign-in__heading">Sign In</h1>
                    <p className="typography-3 color-light sign-in__sub-heading">
                        {form.feedback}
                    </p>
                </div>
                <div className="sign-in__body">
                    <Input
                        name="email"
                        value={form.email}
                        setValue={handleFormChange}
                        type="email"
                        placeholder="Email"
                        label="Email"
                        isRequired={true}
                    />
                    <Input
                        name="password"
                        value={form.password}
                        setValue={handleFormChange}
                        type="password"
                        placeholder="Password"
                        label="Password"
                        isRequired={true}
                    />
                </div>
                <div className="sign-in__footer">
                    <Button color="primary" full={true} onClick={handleSignIn}>
                        Sign In
                    </Button>
                    <Button
                        color="secondary"
                        full={true}
                        onClick={handleSignUp}
                    >
                        Sign Up
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignInModel;
