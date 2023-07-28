import React from "react";
import './Payment.css'
import { Link } from "react-router-dom";
function Payment() {
return (
<div class="wrapper">
        <h2>Payment Form</h2>
        <form method="POST">
            <h4>Account</h4>
            <div class="input-group3">
                <div class="input-box4">
                    <input type="text" placeholder="Full Name" required class="name"/>
                    <i class="fa fa-user icon"></i>
                </div>
                <div class="input-box4">
                    <input type="text" placeholder="Nick Name" required class="name"/>
                    <i class="fa fa-user icon"></i>
                </div>
            </div>
            <div class="input-group3">
                <div class="input-box4">
                    <input type="email" placeholder="Email Adress" required class="name"/>
                    <i class="fa fa-envelope icon"></i>
                </div>
            </div>
            <div class="input-group3">
                <div class="input-box4">
                    <h4> Date of Birth</h4>
                    <input type="text" placeholder="DD" class="dob"/>
                    <input type="text" placeholder="MM" class="dob"/>
                    <input type="text" placeholder="YYYY" class="dob"/>
                </div>
                <div class="input-box4">
                    <h4> Gender</h4>
                    <input type="radio" id="b1" name="gendar" checked class="radio"/>
                    <label for="b1">Male</label>
                    <input type="radio" id="b2" name="gendar" class="radio"/>
                    <label for="b2">Female</label>
                </div>
            </div>
            <div class="input-group3">
                <div class="input-box4">
                    <h4>Payment Details</h4>
                    <input type="radio" name="pay" id="bc1" checked class="radio"/>
                    <label for="bc1"><span><i class="fa fa-cc-visa"></i> Credit Card/Debit Card</span></label>
                    <input type="radio" name="pay" id="bc2" class="radio"/>
                    <label for="bc2"><span><i class="fa fa-cc-paypal"></i> UPI</span></label>
                </div>
            </div>
            <div class="input-group3">
                <div class="input-box4">
                    <input type="tel" placeholder="Card Number" required class="name"/>
                    <i class="fa fa-credit-card icon"></i>
                </div>
            </div>
            <div class="input-group3">
                <div class="input-box4">
                    <input type="tel" placeholder="Card CVC" required class="name"/>
                    <i class="fa fa-user icon"></i>
                </div>
                <div class="input-box4">
                    <select>
                        <option>01 jul</option>
                        <option>02 jul</option>
                        <option>03 jul</option>
                    </select>
                    <select>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                    </select>
                </div>
            </div>
            <div class="input-group3">
                <div class="input-box4">
                    <Link to="/Booktrip"><button className="paybtn" type="submit">PAY NOW</button></Link>
                </div>
            </div>
        </form>
    </div>
);
}
export default Payment;