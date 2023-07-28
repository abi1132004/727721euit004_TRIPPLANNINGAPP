
package com.example.myapp.service;
import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.myapp.model.Register;
import com.example.myapp.repository.RegisterRepo;

@Service
public class RegisterService 
{
	@Autowired
	RegisterRepo repo;
	
	public Register saveDetails(Register e)
	{
		return repo.save(e);
	}
	
	public List<Register> getDetails()
	{
		return repo.findAll();
	}
	}
	
