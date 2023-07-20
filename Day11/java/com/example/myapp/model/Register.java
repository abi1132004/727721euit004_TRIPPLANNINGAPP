package com.example.myapp.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
@Entity
@Table(name = "register")
public class Register { 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	    private String FirstName;
	    private String LastName;
		private String Gender;
	    private int Age;
	    private String EMail;
	    private String Password;
	    private String Phone;
	    private String State;
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		
		public String getGender() {
			return Gender;
		}
		public void setGender(String gender) {
			Gender = gender;
		}
		public int getAge() {
			return Age;
		}
		public void setAge(int age) {
			Age = age;
		}
		public String getFirstName() {
			return FirstName;
		}
		public void setFirstName(String firstName) {
			FirstName = firstName;
		}
		public String getLastName() {
			return LastName;
		}
		public void setLastName(String lastName) {
			LastName = lastName;
		}
		public String getEMail() {
			return EMail;
		}
		public void setEMail(String eMail) {
			EMail = eMail;
		}
		public String getPassword() {
			return Password;
		}
		public void setPassword(String password) {
			Password = password;
		}
		public String getPhone() {
			return Phone;
		}
		public void setPhone(String phone) {
			Phone = phone;
		}
		public String getState() {
			return State;
		}
		public void setState(String state) {
			State = state;
		}
		public Register() {
		}
}
