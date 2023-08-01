package com.courier.main;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Scanner;
import com.courier.dao.CustomerDAO;
import com.courier.dao.CustomerDAOImpl;
import com.courier.dao.ParcelDAO;
import com.courier.dao.ParcelDAOImpl;
import com.courier.dao.PaymentDAO;
import com.courier.dao.PaymentDAOImpl;
import com.courier.model.Customer;
import com.courier.model.Parcel;
import com.courier.model.Payment;
import com.courier.util.DBHandler;

public class CourierServiceApp {
    public static void main(String[] args) throws SQLException {
        Scanner scanner = new Scanner(System.in);
        int ch;
        CustomerDAO customerDAO = new CustomerDAOImpl();
        ParcelDAO parcelDAO = new ParcelDAOImpl();
        PaymentDAO paymentDAO = new PaymentDAOImpl();

        do {
            System.out.println("Courier Service Management");
            System.out.println("1. Create Customer");
            System.out.println("2. Create Parcel");
            System.out.println("3. Create Payment");
            System.out.println("4. Get Customer by ID");
            System.out.println("5. Get Parcel by ID");
            System.out.println("6. Get Payment by ID");
            System.out.println("7. Update Customer");
            System.out.println("8. Delete Customer");
            System.out.println("9. Cancel Parcel");
            System.out.println("10. Exit");
            System.out.println("Enter your choice (1-10):");
            ch = scanner.nextInt();
            switch (ch) {
                case 1:
                    // Create new customer
                    System.out.println("Enter customer details:");
                    Customer newCustomer = new Customer();
                    System.out.println("Name:");
                    newCustomer.setCust_name(scanner.next());
                    System.out.println("Email:");
                    newCustomer.setEmail_id(scanner.next());
                    scanner.nextLine();
                    System.out.println("Phone number:");
                    newCustomer.setPhone_number(scanner.nextLong());
                    System.out.println("Password:");
                    newCustomer.setPassword(scanner.next());
                    System.out.println("Sender Address:");
                    newCustomer.setSender_address(scanner.next());
                    System.out.println("Recipient Name:");
                    newCustomer.setRecid(scanner.next());                  
                    System.out.println("Recipient Address:");
                    newCustomer.setRecipient_address(scanner.next());
                    customerDAO.createCustomer(newCustomer);
                    System.out.println("Customer created successfully.");
                    break;
                case 2:
                    // Create new parcel
                    System.out.println("Enter parcel details:");
                    Parcel newParcel = new Parcel();
                    System.out.println("Parcel Name:");
                    newParcel.setParcel_name(scanner.next());
                    System.out.println("Parcel Weight:");
                    newParcel.setWeight(scanner.next());
                    System.out.println("Phone number:");
                    newParcel.setPhone_number(scanner.nextLong());
                    System.out.println("Sender Address:");
                    newParcel.setSender_address(scanner.next());
                    System.out.println("Recipient Address:");
                    newParcel.setRecipient_address(scanner.next());
                    System.out.println("Customer ID (associated with the parcel):");
                    newParcel.setCustomer_id(scanner.nextInt());

                    parcelDAO.create(newParcel);
                    System.out.println("Parcel created successfully.");
                    break;

                case 3:
                    // Create new payment
                    System.out.println("Enter payment details:");
                    Payment newPayment = new Payment();
                    System.out.println("Transaction Type:");
                    newPayment.setTransaction_type(scanner.next());
                    System.out.println("Transaction Status:");
                    newPayment.setTransaction_status(scanner.next());
                    System.out.println("Transaction Amount:");
                    newPayment.setTransaction_amount(scanner.nextLong());
                    System.out.println("Customer ID (associated with the payment):");
                    newPayment.setCustomer_id(scanner.nextInt());

                    paymentDAO.create(newPayment);
                    System.out.println("Payment created successfully.");
                    break;

                case 4:
                    // Get customer by ID
//                    System.out.println("Enter Customer id:");
//                    int customerId = scanner.nextInt();
//                    Customer customer = customerDAO.getCustomerById(customerId);
//                    if (customer != null) {
//                        System.out.println(customer);
//                    } else {
//                        System.out.println("Customer not found.");
//                    }
//                    break;
                	System.out.print("Enter customer ID: ");
                    int customerId = scanner.nextInt();

                    String selectCustomerQuery = "SELECT * FROM customer WHERE customer_id  = ?";
                    try (Connection connection = DBHandler.getConnection()){
                    		PreparedStatement preparedStatement = connection.prepareStatement(selectCustomerQuery);
                        preparedStatement.setInt(1, customerId);
                        try (ResultSet resultSet = preparedStatement.executeQuery()) {
                            if (resultSet.next()) {
                                System.out.println("Customer Details:");
                                System.out.println("Customer ID: " + resultSet.getInt("customer_id"));
                                System.out.println("Name: " + resultSet.getString("cust_name"));
                                System.out.println("Phone: " + resultSet.getLong("phone_number"));                               
                                System.out.println("Sender Address: " + resultSet.getString("sender_address"));
                                System.out.println("Recipient Address: " + resultSet.getLong("recipient_address"));
                                System.out.println("Recipient_Name: "+resultSet.getString("recid"));
                                System.out.println("Email id: "+resultSet.getString("email_id"));
                                System.out.println("Password: "+resultSet.getString("password"));
                                System.out.println("-----------------------------------");
                            } else {
                                System.out.println("Customer not found with ID: " + customerId);
                            }
                    }
                        break;
                  }

                case 5:
                	System.out.print("Enter parcel ID: ");
                    int parcelId = scanner.nextInt();

                    String selectCustomerQuery1 = "SELECT * FROM parcel WHERE parcel_id  = ?";
                    try (Connection connection = DBHandler.getConnection()){
                    		PreparedStatement preparedStatement = connection.prepareStatement(selectCustomerQuery1);
                        preparedStatement.setInt(1, parcelId);
                        try (ResultSet resultSet = preparedStatement.executeQuery()) {
                            if (resultSet.next()) {
                                System.out.println("Parcel Details:");
                                System.out.println("Parcel ID: " + resultSet.getInt("parcel_id"));
                                System.out.println("Parcel Name: " + resultSet.getString("parcel_name"));
                                System.out.println("Phone: " + resultSet.getLong("phone_number"));                               
                                System.out.println("Sender Address: " + resultSet.getString("sender_address"));
                                System.out.println("Recipient Address: " + resultSet.getLong("recipient_address"));
                                System.out.println("Weight: "+resultSet.getString("weight"));
                                System.out.println("-----------------------------------");
                            } else {
                                System.out.println("Parcel not found with ID: " + parcelId);
                            }
                    }
                        break;
                  }
                case 6:
                	System.out.print("Enter customer ID: ");
                    int transactionId = scanner.nextInt();

                    String selectCustomerQuery2 = "SELECT * FROM payment WHERE transaction_id  = ?";
                    try (Connection connection = DBHandler.getConnection()){
                    		PreparedStatement preparedStatement = connection.prepareStatement(selectCustomerQuery2);
                        preparedStatement.setInt(1, transactionId);
                        try (ResultSet resultSet = preparedStatement.executeQuery()) {
                            if (resultSet.next()) {
                                System.out.println("Customer Details:");
                                System.out.println("Transaction ID: " + resultSet.getInt("transaction_id"));
                                System.out.println("Type: " + resultSet.getString("transaction_type"));
                                System.out.println("Status: " + resultSet.getLong("transaction_status"));                               
                                System.out.println("Amount: " + resultSet.getString("transaction_amount"));
                                System.out.println("-----------------------------------");
                            } else {
                                System.out.println("Payment not found with ID: " + transactionId);
                            }
                    }
                        break;
                  }


                case 7:
                    // Update customer
                    System.out.println("Enter Customer ID to update:");
                    int updateCustomerId = scanner.nextInt();
                    Customer updatedCustomer = customerDAO.getCustomerById(updateCustomerId);
                    if (updatedCustomer != null) {
                        System.out.println("Enter updated details for customer:");
                        System.out.println("Name:");
                        updatedCustomer.setCust_name(scanner.next());
                        System.out.println("Email:");
                        updatedCustomer.setEmail_id(scanner.next());
                        System.out.println("Phone number:");
                        updatedCustomer.setPhone_number(scanner.nextLong());
                        System.out.println("Password:");
                        updatedCustomer.setPassword(scanner.next());
                        System.out.println("Sender Address:");
                        updatedCustomer.setSender_address(scanner.next());
                        System.out.println("Recipient ID:");
                        updatedCustomer.setRecid(scanner.next());
                        System.out.println("Recipient Address:");
                        updatedCustomer.setRecipient_address(scanner.next());
                        customerDAO.updateCustomer(updatedCustomer);
                        System.out.println("Customer updated successfully.");
                    } else {
                        System.out.println("Customer not found.");
                    }
                    break;
                case 8:
                    // Delete customer
                    System.out.println("Enter Customer ID to delete:");
                    int deleteCustomerId = scanner.nextInt();
                    customerDAO.deleteCustomer(deleteCustomerId);
                    System.out.println("Customer deleted successfully.");
                    break;

                case 9:
                    // Delete parcel
                    System.out.println("Enter Parcel ID to delete:");
                    int deleteParcelId = scanner.nextInt();
                    parcelDAO.deleteParcel(deleteParcelId);
                    System.out.println("Parcel cancelled successfully.");
                    break;

                case 10:
                    System.out.println("Exiting Courier Service Management. Goodbye!");
                    break;

                default:
                    System.out.println("Invalid choice");
            }
            if (ch != 10) {
                System.out.println("Do you want to continue (yes/no)?");
                String choice = scanner.next();
                if (!choice.equalsIgnoreCase("yes")) {
                    break;
                }
            }
        } while (true);
        scanner.close();
    }
}
