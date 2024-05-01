import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Footer from '../../components/footer/footer.component';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import PaymentForm from "../../components/payment-form/payment-form.component";

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
  CheckoutInnerContainer
} from './checkout.styles';

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
    
      <CheckoutInnerContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>

        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>Total: ${cartTotal}</Total>

        <PaymentForm />
      </CheckoutInnerContainer>
      
      <Footer />

    </CheckoutContainer>
  );
};

export default Checkout;
