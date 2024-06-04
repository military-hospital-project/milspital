package com.milspital.repository;

import com.milspital.domain.Hospital;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HospitalRepository extends JpaRepository<Hospital, Long>{
	Optional<Hospital> findByHospitalName(String hospitalName);

}
