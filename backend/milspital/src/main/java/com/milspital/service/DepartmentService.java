package com.milspital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.milspital.domain.Department;
import com.milspital.dto.response.DepartmentResDto;
import com.milspital.repository.DepartmentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class DepartmentService {

	private final DepartmentRepository departmentRepository;

	/**
	 * 병원 전체 목록을 조회한다.
	 *
	 * @return List<DepartmentResDto>
	 */
	public List<DepartmentResDto> getDepartments() {
		List<Department> departments = departmentRepository.findAll();

		return departments.stream()
				.map(department -> DepartmentResDto.builder()
						.departmentId(department.getId())
						.departmentName(department.getDepartmentName())
						.build())
				.toList();
	}
}
