package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class DepartmentResDto {

	private Long departmentId;
	private String departmentName;
}
