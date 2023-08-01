package com.courier.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import com.courier.model.Customer;
import com.courier.util.DBHandler;
public class CustomerDAOImpl implements CustomerDAO {
    @Override
    public void createCustomer(Customer customer) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("INSERT INTO customer(cust_name, email_id, phone_number, password, sender_address, recid, recipient_address) VALUES (?, ?, ?, ?, ?, ?, ?)")) {
            ps.setString(1, customer.getCust_name());
            ps.setString(2, customer.getEmail_id());
            ps.setLong(3, customer.getPhone_number());
            ps.setString(4, customer.getPassword());
            ps.setString(5, customer.getSender_address());
            ps.setString(6, customer.getRecid());
            ps.setString(7, customer.getRecipient_address());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error creating customer: " + e.getMessage());
        }
    }
    @Override
    public Customer getCustomerById(int customerId) {
        Customer customer = null;
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("SELECT * FROM customer WHERE customer_id = ?")) {
            ps.setInt(1, customerId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    customer = new Customer();
                    customer.setCustomer_id(rs.getInt("customer_id"));
                    customer.setCust_name(rs.getString("cust_name"));
                    customer.setEmail_id(rs.getString("email_id"));
                    customer.setPhone_number(rs.getLong("phone_number"));
                    customer.setPassword(rs.getString("password"));
                    customer.setSender_address(rs.getString("sender_address"));
                    customer.setRecid(rs.getString("recid"));
                    customer.setRecipient_address(rs.getString("recipient_address"));
                }
            }
        } catch (SQLException e) {
            System.out.println("Error getting customer by ID: " + e.getMessage());
        }
        return customer;
    }

    @Override
    public void updateCustomer(Customer customer) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("UPDATE customer SET cust_name = ?, email_id = ?, phone_number = ?, password = ?, sender_address = ?, recid = ?, recipient_address = ? WHERE customer_id = ?")) {
            ps.setString(1, customer.getCust_name());
            ps.setString(2, customer.getEmail_id());
            ps.setLong(3, customer.getPhone_number());
            ps.setString(4, customer.getPassword());
            ps.setString(5, customer.getSender_address());
            ps.setString(6, customer.getRecid());
            ps.setString(7, customer.getRecipient_address());
            ps.setInt(8, customer.getCustomer_id());

            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error updating customer: " + e.getMessage());
        }
    }

    @Override
    public void deleteCustomer(int customerId) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("DELETE FROM customer WHERE customer_id = ?")) {
            ps.setInt(1, customerId);

            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error deleting customer: " + e.getMessage());
        }
    }
}
//package com.courier.dao;
//
//import com.courier.model.Customer;
//
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.sql.SQLException;
//
//public class CustomerDAOImpl extends abstractDAO<Customer> {
//
//    @Override
//    public void create(Customer customer) {
//        try (PreparedStatement ps = connection.prepareStatement("INSERT INTO customer(cust_name, email_id, phone_number, password, sender_address, recid, recipient_address) VALUES (?, ?, ?, ?, ?, ?, ?)")) {
//            ps.setString(1, customer.getCust_name());
//            ps.setString(2, customer.getEmail_id());
//            ps.setLong(3, customer.getPhone_number());
//            ps.setString(4, customer.getPassword());
//            ps.setString(5, customer.getSender_address());
//            ps.setString(6, customer.getRecid());
//            ps.setString(7, customer.getRecipient_address());
//
//            ps.executeUpdate();
//        } catch (SQLException e) {
//            System.out.println("Error creating customer: " + e.getMessage());
//        }
//    }
//
//    @Override
//    public Customer getById(int customerId) {
//        Customer customer = null;
//        try (PreparedStatement ps = connection.prepareStatement("SELECT * FROM customer WHERE customer_id = ?")) {
//            ps.setInt(1, customerId);
//            try (ResultSet rs = ps.executeQuery()) {
//                if (rs.next()) {
//                    customer = new Customer();
//                    customer.setCustomer_id(rs.getInt("customer_id"));
//                    customer.setCust_name(rs.getString("cust_name"));
//                    customer.setEmail_id(rs.getString("email_id"));
//                    customer.setPhone_number(rs.getLong("phone_number"));
//                    customer.setPassword(rs.getString("password"));
//                    customer.setSender_address(rs.getString("sender_address"));
//                    customer.setRecid(rs.getString("recid"));
//                    customer.setRecipient_address(rs.getString("recipient_address"));
//                }
//            }
//        } catch (SQLException e) {
//            System.out.println("Error getting customer by ID: " + e.getMessage());
//        }
//        return customer;
//    }
//
//    @Override
//    public void update(Customer customer) {
//        try (PreparedStatement ps = connection.prepareStatement("UPDATE customer SET cust_name = ?, email_id = ?, phone_number = ?, password = ?, sender_address = ?, recid = ?, recipient_address = ? WHERE customer_id = ?")) {
//            ps.setString(1, customer.getCust_name());
//            ps.setString(2, customer.getEmail_id());
//            ps.setLong(3, customer.getPhone_number());
//            ps.setString(4, customer.getPassword());
//            ps.setString(5, customer.getSender_address());
//            ps.setString(6, customer.getRecid());
//            ps.setString(7, customer.getRecipient_address());
//            ps.setInt(8, customer.getCustomer_id());
//
//            ps.executeUpdate();
//        } catch (SQLException e) {
//            System.out.println("Error updating customer: " + e.getMessage());
//        }
//    }
//
//    @Override
//    public void delete(int customerId) {
//        try (PreparedStatement ps = connection.prepareStatement("DELETE FROM customer WHERE customer_id = ?")) {
//            ps.setInt(1, customerId);
//
//            ps.executeUpdate();
//        } catch (SQLException e) {
//            System.out.println("Error deleting customer: " + e.getMessage());
//        }
//    }
//}

