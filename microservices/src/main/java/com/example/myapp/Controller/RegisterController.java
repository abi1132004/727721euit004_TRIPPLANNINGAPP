package com.example.myapp.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.myapp.model.Register;
import com.example.myapp.service.RegisterService;

@RestController
@CrossOrigin
public class RegisterController {
@Autowired
	private RegisterService serv;
	@PostMapping("/send-data")
	public ResponseEntity<String> saveDet(@RequestBody Register e) {
		serv.saveDetails(e);
		return  ResponseEntity.ok("Details Added");
	}
	@GetMapping("/hotelFeedDetails")
	public List<Register> fetchDetails()
	{
		return serv.getDetails();
	}

}