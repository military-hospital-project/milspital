package com.milspital.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.milspital.dto.request.CommentReqDto;
import com.milspital.dto.response.CommentResDto;
import com.milspital.service.CommentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts/{postId}/comments")
public class CommentController {

	private final CommentService commentService;

	/**
	 * 댓글을 생성한다.
	 *
	 * @param postId 게시글 id
	 * @param commentReqDto 댓글 생성 요청 dto
	 * @return CommentResDto - 201
	 */
	@PostMapping
	public ResponseEntity<CommentResDto> createComment(@PathVariable Long postId, @RequestBody CommentReqDto commentReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(commentService.createComment(postId, commentReqDto));
	}


}
