package com.milspital.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class SignUpReqDto {

	private String name;
	private String armyNumber;
	private String specialtyNumber;
	private String password;
	private String nickname;
}
