import React from 'react'
import { Link } from 'react-router-dom'

export default function AllForms() {
  return (
   <>

    <header className="bg-dark px-4 py-6 text-primary-foreground md:px-6 md:py-8">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl text-light font-bold pt-4 sm:text-4xl md:text-5xl">Support Our Cause</h1>
          <p className="pb-5 fs-4 text-lg  text-light  md:text-xl">
            Your donation will make a real difference. Choose your preferred payment method to complete your
            contribution.
          </p>
        </div>
      </header>


   <div className="container py-5 px-3">
  <div className="mb-5 text-center">
    <h1 className="h3 mb-3 font-weight-bold">Support Our Cause</h1>
    <p className="text-muted">Choose from one of the options below to make a donation.</p>
  </div>
  <div className="row">
    <div className="col-sm-4 mb-4">
      <div className="card text-center h-100">
        <div className="card-body">
          <div className="mb-3">
            {/* <CreditCardIcon className="mx-auto h-8 w-8 text-primary" /> */}
            <i className="fa-solid fa-credit-card fa-3x"></i>
          </div>
          <h5 className="card-title">Visa Payment</h5>
          <p className="card-text text-muted">Securely donate using your Visa card.</p>
          <Link to={`/payment`} className="btn btn-primary mt-3">Donate with Visa</Link>
        </div>
      </div>
    </div>
    <div className="col-sm-4 mb-4">
      <div className="card text-center h-100">
        <div className="card-body">
          <div className="mb-3">
            {/* <WalletCardsIcon className="mx-auto h-8 w-8 text-primary" /> */}
            <i className="fa-solid fa-wallet fa-3x"></i>
          </div>
          <h5 className="card-title">Wallet Payment</h5>
          <p className="card-text text-muted">Donate using your digital wallet.</p>
          <Link href="#" className="btn btn-primary mt-3">Donate with Wallet</Link>
        </div>
      </div>
    </div>
    <div className="col-sm-4 mb-4">
      <div className="card text-center h-100">
        <div className="card-body">
          <div className="mb-3">
            {/* <DollarSignIcon className="mx-auto h-8 w-8 text-primary" /> */}
            <i className="fa-solid fa-handshake-angle fa-3x"></i>
          </div>
          <h5 className="card-title">Donation Form</h5>
          <p className="card-text text-muted">Fill out the form to make a donation.</p>
          <Link to={`/donationform`} className="btn btn-primary mt-3">Donate Now</Link>
        </div>
      </div>
    </div>
  </div>

</div>

   
   </>
  )
}
