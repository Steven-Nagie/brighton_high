import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';

class StripeAlumniSpouse extends Component {
  onToken = (token) => {
    fetch('/save-stripe-token', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`Payment Successful, ${data.name}`);
      });
    });
  }

  render() {
    return (
      <div>
        <StripeCheckout
          name="Registration"
          description="Alumni + Spouse"
          panelLabel="Register"
          amount={16700}
          currency="USD"
          stripeKey="pk_test_yFliojp5k9U6cxv0NRVL3W9U"
          shippingAddress
          billingAddress={false}
          zipCode={false}
          allowRememberMe
          token={this.onToken}
          reconfigureOnUpdate={false}
          >
        </StripeCheckout>
      </div>

    )
  }
}

export default StripeAlumniSpouse;