package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PostDetailResDto {
	// post
	private Long postId;
	private String diseaseName;
	private String causeOfDisease;
	private String cureProcess;
	private String tip;

	// user
	private Long userId;
	private String nickname;
	private Integer userType;

	// hospital
	private String hospitalName;
	private String address;
	private String phone;

	// department
	private String departmentName;

	private String createdAt;
	private String updatedAt;
}
