package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PostResDto {
	// post
	private Long postId;
	private String diseaseName;
	private String causeOfDisease;
	private String cureProcess;
	private String tip;

	// user
	private Long writerId;
	private String nickname;

	// hospital
	private String hospitalName;

	// department
	private String departmentName;

	private String createdAt;
	private String updatedAt;
}
