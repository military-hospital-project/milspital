package com.milspital.repository;

import com.milspital.domain.Department;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DepartmentRepository extends JpaRepository<Department, Long> {
	Optional<Department> findByDepartmentName(String departmentName);
}
