package com.milspital.controller;

import com.milspital.dto.request.PostReqDto;
import com.milspital.dto.response.PostDetailResDto;
import com.milspital.dto.response.PostResDto;
import com.milspital.repository.UserRepository;
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

	private final UserRepository userRepository;

	/**
	 * 게시글 전체 목록을 조회한다.
	 *
	 * @return List<PostResDto> - 200
	 */
	@GetMapping
	public ResponseEntity<List<PostResDto>> getPosts() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(postService.getPosts());
	}

	/**
	 * 게시글 상세 정보를 조회한다. (댓글 포함)
	 *
	 * @param postId 게시글 id
	 * @throws IllegalArgumentException 게시글이 존재하지 않을 경우
	 * @return PostDetailResDto - 200
	 */
	@GetMapping("/{postId}")
	public ResponseEntity<PostDetailResDto> getPostDetail(@PathVariable Long postId) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(postService.getPostDetail(postId));
	}

	/**
	 * 게시글을 생성한다.
	 *
	 * @param postReqDto 게시글 생성 요청 dto
	 * @throws IllegalArgumentException 사용자, 병원, 진료과 정보가 존재하지 않을 경우, 의사인 경우
	 * @return PostResDto - 201
	 */
	@PostMapping
	public ResponseEntity<PostResDto> createPost(@RequestBody PostReqDto postReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(postService.createPost(postReqDto));
	}

	/**
	 * 게시글을 수정한다.
	 *
	 * @param postId 게시글 id
	 * @param postReqDto 게시글 수정 요청 dto
	 * @return - 200
	 */
	@PutMapping("/{postId}")
	public ResponseEntity<PostResDto> updatePost(@PathVariable Long postId, @RequestBody PostReqDto postReqDto) {
		return ResponseEntity.status(HttpStatus.OK)
					.body(postService.updatePost(postId, postReqDto));
	}

	/**
	 * 게시글을 삭제한다.
	 *
	 * @param postId 게시글 id
	 * @return - 204
	 */
	@DeleteMapping("/{postId}")
	public ResponseEntity<Void> deletePost(@PathVariable Long postId) {
		postService.deletePost(postId);
		return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
	}
}
