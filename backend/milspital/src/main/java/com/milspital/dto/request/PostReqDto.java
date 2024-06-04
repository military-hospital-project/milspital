package com.milspital.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PostReqDto {
	// user
	private Long userId;

	// post
	private String diseaseName;
	private String causeOfDisease;
	private String cureProcess;
	private String tip;

	// hospital
	private String hospitalName;

	// department
	private String departmentName;
}
