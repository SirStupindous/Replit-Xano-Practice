require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

async function createCheckoutSession() {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: 'Rank Authority Pro Plan',
        },
        unit_amount: 1999,
      },
      quantity: 1,
    }],
    mode: 'payment',
    success_url: 'https://yourdomain.com/success',
    cancel_url: 'https://yourdomain.com/cancel',
  });

  console.log(session.url);
}

createCheckoutSession();
