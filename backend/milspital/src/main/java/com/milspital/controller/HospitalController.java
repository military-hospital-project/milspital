package com.milspital.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.milspital.dto.response.HospitalResDto;
import com.milspital.service.HospitalService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hospitals")
public class HospitalController {

	private final HospitalService hospitalService;

	/**
	 * 병원 전체 목록을 조회한다.
	 *
	 * @return List<HospitalResDto> - 200
	 */
	@GetMapping
	public ResponseEntity<List<HospitalResDto>> getHospitals() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(hospitalService.getHospitals());
	}
}
