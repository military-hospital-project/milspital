package com.milspital.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.milspital.dto.response.PostResDto;
import com.milspital.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserController {

	private final UserService userService;

	// TODO : userId 보내면 닉네임, 군번, 작성글 갯수, 스크랩 갯수 보내주는 api 추가

	/**
	 * 사용자가 작성한 게시글 목록을 조회한다.
	 *
	 * @param userId 사용자 id
	 * @return List<PostResDto> - 사용자가 작성한 게시글 목록 - 200
	 */
	@GetMapping("/{userId}/posts")
	public ResponseEntity<List<PostResDto>> getPostsByUser(@PathVariable Long userId) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(userService.getPostsByUser(userId));
	}
}
