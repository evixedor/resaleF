import { useState, useContext } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import { CartContext } from '../../contexts/cart.context';
import { UserContext } from '../../contexts/user.context';

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

import {
	PaymentButton,
	FormContainer,
} from "./payment-form.styles";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const { cartTotal, clearItemFromCart, cartItems } = useContext(CartContext);
	const { currentUser } = useContext(UserContext);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);

	const paymentHandler = async (e) => {
		e.preventDefault();
		if (!stripe || !elements) {
			return;
		}
		setIsProcessingPayment(true);
		const response = await fetch("/.netlify/functions/create-payment-intent", {
			method: "post",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ amount: cartTotal * 100 }),
		}).then((res) => {
			return res.json();
		});

		const clientSecret = response.paymentIntent.client_secret;

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest Acc",
				},
			},
		});

		setIsProcessingPayment(false);

		if (paymentResult.error) {
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				alert("Payment Successful!");
			}
		}
	};

	return (
		<FormContainer onSubmit={paymentHandler}>
			<h2>Credit Card Payment: Use 4242 4242 4242 4242 04/28 424 42424</h2>
			<CardElement />
			<PaymentButton
				buttonType={BUTTON_TYPE_CLASSES.inverted}
				isLoading={isProcessingPayment}
			>
				Pay Now
			</PaymentButton>
		</FormContainer>
	);
};
export default PaymentForm;
