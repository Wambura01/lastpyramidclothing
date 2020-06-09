import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Gs6vgKhnwuxfImgX125Dcycn44QyNfX9E5Jae3WKFmEEnxvBXzvBZS2TfqjLLFjNQIEr0gx6ueO9vxsMcxrwoQz00oxfb0RNy';

	const onToken = (token) => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="LastPyramid_CLOTHING."
			billingAddress
			shippingAddress
			image="https:/svgshare.com/i/CUz.svg"
			description={`Your Total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripCheckoutButton;
