export default function Payment()
{
   return(
    <div>
        <div className="payment1">
               <h1> Pay Now</h1>
        </div>
        <div className="payment2">
            <h5>Credit/Debit Card -</h5>
            <input type="text" placeholder="Enter Card Number"/>
            <input type="text" placeholder="Enter CVV"/>
            <button>Submit</button>
        </div>
        <div >
            <div className="payment3">
            <h5>UPI , Paytm -</h5>
            <input type="text" placeholder="Enter Upi id"/>
            <button>Submit</button>
            </div>
        </div>
        <div>
            <div className="cod">
                <h5>CASH ON DELIVERY -</h5>
                <button>CLICK HERE</button>
            </div>
        </div>
        <div>
            <div className="coupon">
                <h5>Apply Coupon - </h5>
                <input type="text" placeholder="Enter Code"  />
            </div>
        </div>
    </div>
   )
}