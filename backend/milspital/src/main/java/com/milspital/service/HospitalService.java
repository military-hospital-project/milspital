package com.milspital.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.milspital.domain.Hospital;
import com.milspital.dto.response.HospitalResDto;
import com.milspital.repository.HospitalRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class HospitalService {

	private final HospitalRepository hospitalRepository;

	/**
	 * 병원 전체 목록을 조회한다.
	 *
	 * @return List<HospitalResDto>
	 */
	public List<HospitalResDto> getHospitals() {
		List<Hospital> hospitals = hospitalRepository.findAll();

		return hospitals.stream()
				.map(hospital -> HospitalResDto.builder()
						.hospitalId(hospital.getId())
						.hospitalName(hospital.getHospitalName())
						.build())
				.toList();
	}
}
