package com.milspital.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
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
	 * 게시글에 해당하는 댓글 목록을 조회한다.
	 *
	 * @param postId 게시글 id
	 * @return CommentResDto - 200
	 */
	@GetMapping("/{postId}")
	public ResponseEntity<List<CommentResDto>> getCommentsByPost(@PathVariable Long postId) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(commentService.getCommentsByPost(postId));
	}

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

	/**
	 * 댓글을 삭제한다.
	 *
	 * @param commentId 댓글 id
	 * @return - 204
	 */
	@DeleteMapping("/{commentId}")
	public ResponseEntity<Void> deleteComment(@PathVariable Long commentId) {
		commentService.deleteComment(commentId);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}

}
