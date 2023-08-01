package com.courier.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.courier.model.Parcel;
import com.courier.util.DBHandler;

public class ParcelDAOImpl implements ParcelDAO {

    @Override
    public void create(Parcel parcel) {
        try (Connection connection = DBHandler.getConnection();
            PreparedStatement ps = connection.prepareStatement("INSERT INTO parcel(parcel_name, weight, phone_number, sender_address, recipient_address, customer_id) VALUES (?, ?, ?, ?, ?, ?)")) {
            ps.setString(1, parcel.getParcel_name());
            ps.setString(2, parcel.getWeight());
            ps.setLong(3, parcel.getPhone_number());
            ps.setString(4, parcel.getSender_address());
            ps.setString(5, parcel.getRecipient_address());
            ps.setInt(6, parcel.getCustomer_id());
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error creating parcel: " + e.getMessage());
        }
    }

    @Override
    public Parcel getParcelById(int parcelId) {
        Parcel parcel = null;
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("SELECT * FROM parcel WHERE parcel_id = ?")) {
            ps.setInt(1, parcelId);
            try (ResultSet rs = ps.executeQuery()) {
                if (rs.next()) {
                    parcel = new Parcel();
                    parcel.setParcel_id(rs.getInt("parcel_id"));
                    parcel.setParcel_name(rs.getString("parcel_name"));
                    parcel.setWeight(rs.getString("weight"));
                    parcel.setPhone_number(rs.getLong("phone_number"));
                    parcel.setSender_address(rs.getString("sender_address"));
                    parcel.setRecipient_address(rs.getString("recipient_address"));
                    parcel.setCustomer_id(rs.getInt("customer_id"));
                }
            }
        } catch (SQLException e) {
            System.out.println("Error getting parcel by ID: " + e.getMessage());
        }
        return parcel;
    }

    @Override
    public void updateParcel(Parcel parcel) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("UPDATE parcel SET parcel_name = ?, weight = ?, phone_number = ?, sender_address = ?, recipient_address = ?, customer_id = ? WHERE parcel_id = ?")) {
            ps.setString(1, parcel.getParcel_name());
            ps.setString(2, parcel.getWeight());
            ps.setLong(3, parcel.getPhone_number());
            ps.setString(4, parcel.getSender_address());
            ps.setString(5, parcel.getRecipient_address());
            ps.setInt(6, parcel.getCustomer_id());
            ps.setInt(7, parcel.getParcel_id());

            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error updating parcel: " + e.getMessage());
        }
    }

    @Override
    public void deleteParcel(int parcelId) {
        try (Connection connection = DBHandler.getConnection();
             PreparedStatement ps = connection.prepareStatement("DELETE FROM parcel WHERE parcel_id = ?")) {
            ps.setInt(1, parcelId);
            ps.executeUpdate();
        } catch (SQLException e) {
            System.out.println("Error deleting parcel: " + e.getMessage());
        }
    }
}
