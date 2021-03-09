import React from 'react'
import './Payment.css'
import {useStateValue} from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import {Link} from 'react-router-dom'
import { useElements,useStripe,CardElement } from '@stripe/react-stripe-js'
function Payment() {
    const [{basket,user},dispatch]=useStateValue();

    return (
        <div className="payment">
            <div className="payment_container">
                <h1>
                    Checkout (<Link to='/checkout'>{basket?.length} items</Link>)
                </h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>React Lane</p>
                        <p>Berhampore,Murshidabad.</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Items and delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item=>(
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_deatils">
                        <form>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment