package com.milspital.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.milspital.dto.request.CommentReqDto;
import com.milspital.dto.response.CommentResDto;
import com.milspital.service.CommentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/comments")
public class CommentController {

	private final CommentService commentService;

	/**
	 * 댓글을 생성한다.
	 *
	 * @param commentReqDto 댓글 생성 요청 dto
	 * @return CommentResDto - 201
	 */
	@PostMapping
	public ResponseEntity<CommentResDto> createComment(@RequestBody CommentReqDto commentReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(commentService.createComment(commentReqDto.getPostId(), commentReqDto));
	}

	/**
	 * 댓글을 수정한다.
	 *
	 * @param commentId 댓글 id
	 * @param commentReqDto 댓글 수정 요청 dto(수정할 내용)
	 * @return CommentResDto - 200
	 */
	@PutMapping("/{commentId}")
	public ResponseEntity<CommentResDto> updateComment(@PathVariable Long commentId, @RequestBody CommentReqDto commentReqDto) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(commentService.updateComment(commentId, commentReqDto));
	}

}