package com.example.myapp.repository;
import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.myapp.model.Register;



@Repository
public interface RegisterRepo extends JpaRepository<Register, Integer> {
	@Query("SELECT r.EMail AS email, r.Password AS password FROM Register r")
    List<Map<String, Object>> getEmailAndPassword();
}
