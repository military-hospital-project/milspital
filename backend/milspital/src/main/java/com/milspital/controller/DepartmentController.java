package com.milspital.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.milspital.dto.response.DepartmentResDto;
import com.milspital.service.DepartmentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/departments")
public class DepartmentController {

	private final DepartmentService departmentService;

	/**
	 * 진료과 전체 목록을 조회한다.
	 *
	 * @return List<DepartmentResDto> - 200
	 */
	@GetMapping
	public ResponseEntity<List<DepartmentResDto>> getHospitals() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(departmentService.getDepartments());
	}
}
