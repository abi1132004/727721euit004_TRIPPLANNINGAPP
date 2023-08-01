package com.courier.model;

public class Parcel extends Customer{
    private int parcel_id;
    private String parcel_name;
    private String weight;
    private long phone_number;
    private String sender_address;
    private String recipient_address;
    private int customer_id;
	public String getRecipient_address() {
		return recipient_address;
	}
	public void setRecipient_address(String recipient_address) {
		this.recipient_address = recipient_address;
	}
	public int getCustomer_id() {
		return customer_id;
	}
	public void setCustomer_id(int customer_id) {
		this.customer_id = customer_id;
	}
	public String getSender_address() {
		return sender_address;
	}
	public void setSender_address(String sender_address) {
		this.sender_address = sender_address;
	}
	public long getPhone_number() {
		return phone_number;
	}
	public void setPhone_number(long phone_number) {
		this.phone_number = phone_number;
	}
	public String getWeight() {
		return weight;
	}
	public void setWeight(String weight) {
		this.weight = weight;
	}
	public String getParcel_name() {
		return parcel_name;
	}
	public void setParcel_name(String parcel_name) {
		this.parcel_name = parcel_name;
	}
	public int getParcel_id() {
		return parcel_id;
	}
	public void setParcel_id(int parcel_id) {
		this.parcel_id = parcel_id;
	} 
}
