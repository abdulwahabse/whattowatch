import Input from '../form/Input';
import Button from './Button';
function SignUp(props) {
    const { form, setForm, handleSignUp, handleSignIn } = props;
    const handleFormChange = (e) => {
        setForm((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="sign-up">
            <div className="sign-up__container">
                <div className="sign-up__header">
                    <h1 className="sign-up__heading">Sign Up</h1>
                </div>
                <div className="sign-up__body">
                    <Input
                        name="name"
                        value={form.name}
                        setValue={handleFormChange}
                        type="text"
                        placeholder="Name"
                        label="Name"
                        isRequired={true}
                    />
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
                    <Input
                        name="file"
                        value={form.file}
                        setValue={handleFormChange}
                        type="file"
                        placeholder="Profile Picture"
                        label="Profile Picture"
                    />
                </div>
                <div className="sign-up__footer">
                    <Button color="primary" full={true} onClick={handleSignUp}>
                        Sign Up
                    </Button>
                    <Button
                        color="secondary"
                        full={true}
                        onClick={handleSignIn}
                    >
                        Sign In
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
