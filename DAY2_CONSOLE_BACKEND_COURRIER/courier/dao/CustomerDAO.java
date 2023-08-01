package com.courier.dao;

import com.courier.model.Customer;

public interface CustomerDAO {
    void createCustomer(Customer customer);
    Customer getCustomerById(int customerId);
    void updateCustomer(Customer customer);
    void deleteCustomer(int customerId);
}
