package com.example.myapp.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.myapp.model.HomeData;



@Repository
public interface ClassRepo extends JpaRepository<HomeData, Integer>{

}
