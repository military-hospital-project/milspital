package com.milspital.controller;

import com.milspital.dto.PostDetailResDto;
import com.milspital.dto.PostResDto;
import com.milspital.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

	private final PostService postService;

	/**
	 * 게시글 전체 목록을 조회한다.
	 * @return List<PostResDto> - 200
	 */
	@GetMapping
	public ResponseEntity<List<PostResDto>> getPosts() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(postService.getPosts());
	}

	/**
	 * 게시글 상세 정보를 조회한다. (댓글 포함)
	 * @param postId 글 id
	 * @return PostDetailResDto - 200
	 */
	@GetMapping("/{postId}")
	public ResponseEntity<PostDetailResDto> getPostDetail(@PathVariable Long postId) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(postService.getPostDetail(postId));
	}
}
