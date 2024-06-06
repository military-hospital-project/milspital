package com.milspital.dto.request;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class CommentReqDto {

	private Long userId;
	private Long postId;
	private String content;
}