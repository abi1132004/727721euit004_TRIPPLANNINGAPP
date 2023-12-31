package com.iamneo.security.service;


import java.util.List;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Order;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

import com.iamneo.security.entity.training_details;
import com.iamneo.security.repository.training_repo;
@Service
public class training_serv 

{
	@Autowired
	training_repo repo;
	
	public training_details saveDetails(training_details e)
	{
		return repo.save(e);
	}
	
	public List<training_details> getDetails()
	{
		return repo.findAll();
	}
	public List<training_details> getSorted(String field) {
		return repo.findAll(Sort.by(Sort.Direction.ASC,field));
	}
	public List<training_details> getWithPagination(@PathVariable int offset, @PathVariable int pageSize) {
		Page<training_details> page =repo.findAll(PageRequest.of(offset, pageSize));
		return page.getContent();
	}
	public training_details updateDetails(training_details e1)
	{
		return repo.saveAndFlush(e1);
	}
	public void deleteDetails(Long id) 
	{
		repo.deleteById(id);
	}
    public Stream<Order> getEmployeeById(Long id)
    {
        return repo.findById(id).get();
    }
	
}