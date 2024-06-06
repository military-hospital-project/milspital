package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class FilterResDto {

	private String state;
	private String abusive;
	private String error;
}
