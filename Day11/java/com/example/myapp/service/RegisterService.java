package com.example.myapp.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.myapp.model.HomeData;
import com.example.myapp.model.Register;
import com.example.myapp.repository.ClassRepo;
import com.example.myapp.repository.RegisterRepo;
import com.example.myapp.repository.RequestRepo;



@Service
public class RegisterService {
	@Autowired
	RegisterRepo stRepo;
	
	@Autowired
	ClassRepo crepo;
	
	@Autowired
	RequestRepo requestRepo;
	
	public Register saveDetails(Register e) {
		return stRepo.save(e);
	}
	
	public List<Register> getDetails() {
		return stRepo.findAll();
	}
	
	public List<Map<String, Object>> getEmailAndPassword() {
	    return stRepo.getEmailAndPassword();
	}
	
	public HomeData save(HomeData e1) {
		return crepo.save(e1);
	}
	
	/*public List<Object[]> getCombinedResults() {
	    return requestRepo.getCombinedResults();
	}*/
}
