package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class PostResDto {
	private Long postId;
	private String diseaseName;
	private String causeOfDisease;
	private String cureProcess;
	private String tip;
	private String nickname;
	private String hospitalName;
	private String departmentName;
	private String createdAt;
	private String updatedAt;
}
