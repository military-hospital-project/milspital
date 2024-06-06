 package com.milspital.dto.response;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CommentResDto {
	private Integer filter;
	private Long commentId;
	private Long writerId;
	private Integer userType;
	private String nickname;
	private String content;
	private String createdAt;
	private String updatedAt;
}
