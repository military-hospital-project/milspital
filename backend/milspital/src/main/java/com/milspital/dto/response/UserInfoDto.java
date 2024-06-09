package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class UserInfoDto {

	private String nickname;
	private String militaryNumber;
	private Integer postCount;
	private Integer scrapCount;
}
