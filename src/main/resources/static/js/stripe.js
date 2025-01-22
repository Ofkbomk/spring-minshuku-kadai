 const stripe = Stripe('pk_test_51Qd56SGhwurLXH1YziL2u9tlIUtLmSswXdbqGpx6cFkvHFwGevw0Lz4TGJqrsFASlXlaOp16OrzZQUR82Aeya5yb00vomECV0Q');
 const paymentButton = document.querySelector('#paymentButton');
 
 paymentButton.addEventListener('click', () => {
   stripe.redirectToCheckout({
     sessionId: sessionId
   })
 });