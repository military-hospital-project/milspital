package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class LoginResDto {

	private Long userId;
	private String nickname;
	private Integer userType;
}
