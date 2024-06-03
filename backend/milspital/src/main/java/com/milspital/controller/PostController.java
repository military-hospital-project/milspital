package com.milspital.controller;

import com.milspital.dto.PostResDto;
import com.milspital.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

	private final PostService postService;

	@GetMapping
	public ResponseEntity<List<PostResDto>> getPosts() {
		return ResponseEntity.status(HttpStatus.OK)
				.body(postService.getPosts());
	}
}
