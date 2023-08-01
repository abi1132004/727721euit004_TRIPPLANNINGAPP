package com.courier.dao;

import com.courier.model.Payment;

public interface PaymentDAO {
    void create(Payment payment);
    Payment getPaymentById(int paymentId);
    void updatePayment(Payment payment);
    void deletePayment(int paymentId);
}
