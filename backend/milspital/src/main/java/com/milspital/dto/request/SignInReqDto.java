package com.milspital.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignInReqDto {

	private String armyNumber;
	private String password;
}
