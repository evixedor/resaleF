import { useState } from "react";

import "./sign-in.styles.scss";

import {
	signInWithGooglePopup,
	createUserDocumentFromAuth,
	signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils.js";

import FormInput from "../../components/form-input/form-input.component";
import Button from "../../components/button/button.component";

const defaultFormFields = {
	email: "",
	password: "",
};

const SignIn = () => {
	const [formFields, setFormFields] = useState(defaultFormFields);
	const { email, password } = formFields;

	const signInwithGoogle = async () => {
		const { user } = await signInWithGooglePopup(); // destructuring off the response gotten from this await method
		createUserDocumentFromAuth(user);
	};

	const resetFormFields = () => {
		setFormFields(defaultFormFields);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const { user } = await signInAuthUserWithEmailAndPassword(
				email,
				password
			);

			await createUserDocumentFromAuth(user, { email, password });
			resetFormFields();
		} catch (error) {
			switch (error.code) {
				case "auth/wrong-password":
					alert("incorrect password");
					break;
				case "auth/user-not-found":
					alert("no user associated with this email");
					break;
				default:
					console.log(error);
			}
		}
	};

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formFields, [name]: value }); // spread in an object and update the appropriate field
	};

	return (
		<div className="sign-in-container">
			<h2>I already have an account</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					label="Email"
					type="email"
					required
					onChange={handleChange}
					name="email"
					value={email}
				/>

				<FormInput
					label="Password"
					type="password"
					required
					onChange={handleChange}
					name="password"
					value={password}
				/>
			</form>
			<div className="buttons-container">
				<Button type="submit">SIGN IN</Button>
				<Button type='button' buttonType="google" onClick={signInwithGoogle}>
					Google sign in
				</Button>
			</div>
		</div>
	);
};

export default SignIn;
