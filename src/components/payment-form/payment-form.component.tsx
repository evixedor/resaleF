import { useState, FormEvent } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { StripeCardElement } from "@stripe/stripe-js";
import { useSelector } from "react-redux";

import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";

import {
	PaymentFormContainer,
	FormContainer,
	PaymentButton,
} from "./payment-form.styles";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ifValidCardElement = (
	card: StripeCardElement | null
): card is StripeCardElement => card !== null;

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
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
			body: JSON.stringify({ amount: amount * 100 }),
		}).then((res) => {
			return res.json();
		});

		const cardDetails = elements.getElement(CardElement);

		if (!ifValidCardElement(cardDetails)) return; // type predicate

		const clientSecret = response.paymentIntent.client_secret; // indicator of the confirmation from the stripe db registering the payment intent

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest",
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
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<PaymentButton
					buttonType={BUTTON_TYPE_CLASSES.inverted}
					isLoading={isProcessingPayment}
				>
					Pay Now
				</PaymentButton>
				<h5>use 4242 4242 4242 4242 04/24 242 42424</h5>
			</FormContainer>
		</PaymentFormContainer>
	);
};
export default PaymentForm;
