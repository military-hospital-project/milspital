package com.milspital.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CommentResDto {

	private Long commentId;
	private Long writerId;
	private String nickname;
	private String content;
	private String createdAt;
	private String updatedAt;
}
