package com.courier.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.courier.model.Payment;
import com.courier.util.DBHandler;

public class PaymentDAOImpl implements PaymentDAO {

    @Override
    public void create(Payment payment) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("INSERT INTO payment(transaction_type, transaction_status, transaction_amount, customer_id) VALUES (?, ?, ?, ?)")) {
            ps.setString(1, payment.getTransaction_type());
            ps.setString(2, payment.getTransaction_status());
            ps.setLong(3, payment.getTransaction_amount());
            ps.setInt(4, payment.getCustomer_id());

            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error creating payment: " + e.getMessage());
        }
    }

    @Override
    public Payment getPaymentById(int paymentId) {
        Payment payment = null;
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("SELECT * FROM payment WHERE transaction_id = ?")) {
            ps.setInt(1, paymentId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    payment = new Payment();
                    payment.setTransaction_id(rs.getInt("transaction_id"));
                    payment.setTransaction_type(rs.getString("transaction_type"));
                    payment.setTransaction_status(rs.getString("transaction_status"));
                    payment.setTransaction_amount(rs.getLong("transaction_amount"));
                    payment.setCustomer_id(rs.getInt("customer_id"));
                }
            }
        } catch (SQLException e) {
            System.out.println("Error getting payment by ID: " + e.getMessage());
        }
        return payment;
    }

    @Override
    public void updatePayment(Payment payment) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("UPDATE payment SET transaction_type = ?, transaction_status = ?, transaction_amount = ? WHERE transaction_id = ?")) {
            ps.setString(1, payment.getTransaction_type());
            ps.setString(2, payment.getTransaction_status());
            ps.setLong(3, payment.getTransaction_amount());
            ps.setInt(4, payment.getTransaction_id());

            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error updating payment: " + e.getMessage());
        }
    }

    @Override
    public void deletePayment(int paymentId) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("DELETE FROM payment WHERE transaction_id = ?")) {
            ps.setInt(1, paymentId);

            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error deleting payment: " + e.getMessage());
        }
    }
}
//package com.courier.dao;
//
//import com.courier.model.Payment;
//
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//public class PaymentDAOImpl extends abstractDAO<Payment> {
//
//    @Override
//    public void create(Payment payment) {
//        try (PreparedStatement ps = connection.prepareStatement("INSERT INTO payment(transaction_type, transaction_status, transaction_amount, customer_id) VALUES (?, ?, ?, ?)")) {
//            ps.setString(1, payment.getTransaction_type());
//            ps.setString(2, payment.getTransaction_status());
//            ps.setLong(3, payment.getTransaction_amount());
//            ps.setInt(4, payment.getCustomer_id());
//
//            ps.executeUpdate();
//        } catch (SQLException e) {
//            System.out.println("Error creating payment: " + e.getMessage());
//        }
//    }
//
//    @Override
//    public Payment getById(int paymentId) {
//        Payment payment = null;
//        try (PreparedStatement ps = connection.prepareStatement("SELECT * FROM payment WHERE transaction_id = ?")) {
//            ps.setInt(1, paymentId);
//            try (ResultSet rs = ps.executeQuery()) {
//                if (rs.next()) {
//                    payment = new Payment();
//                    payment.setTransaction_id(rs.getInt("transaction_id"));
//                    payment.setTransaction_type(rs.getString("transaction_type"));
//                    payment.setTransaction_status(rs.getString("transaction_status"));
//                    payment.setTransaction_amount(rs.getLong("transaction_amount"));
//                    payment.setCustomer_id(rs.getInt("customer_id"));
//                }
//            }
//        } catch (SQLException e) {
//            System.out.println("Error getting payment by ID: " + e.getMessage());
//        }
//        return payment;
//    }
//
//    @Override
//    public void update(Payment payment) {
//        try (PreparedStatement ps = connection.prepareStatement("UPDATE payment SET transaction_type = ?, transaction_status = ?, transaction_amount = ? WHERE transaction_id = ?")) {
//            ps.setString(1, payment.getTransaction_type());
//            ps.setString(2, payment.getTransaction_status());
//            ps.setLong(3, payment.getTransaction_amount());
//            ps.setInt(4, payment.getTransaction_id());
//
//            ps.executeUpdate();
//        } catch (SQLException e) {
//            System.out.println("Error updating payment: " + e.getMessage());
//        }
//    }
//
//    @Override
//    public void delete(int paymentId) {
//        try (PreparedStatement ps = connection.prepareStatement("DELETE FROM payment WHERE transaction_id = ?")) {
//            ps.setInt(1, paymentId);
//
//            ps.executeUpdate();
//        } catch (SQLException e) {
//            System.out.println("Error deleting payment: " + e.getMessage());
//        }
//    }
//}
