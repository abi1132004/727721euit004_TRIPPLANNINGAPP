package com.example.myapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.myapp.model.HomeData;

import java.util.List;

@Repository 
public interface RequestRepo extends JpaRepository<HomeData, Integer> {

	/*@Query("SELECT r.FirstName, r.LastName, h FROM Register r JOIN HomeData h ON r.id = h.requestid")    
	List<Object[]> getCombinedResults();

	List<HomeData> findAll();*/
}
