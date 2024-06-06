package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class HospitalResDto {

	private Long hospitalId;
	private String hospitalName;
}
