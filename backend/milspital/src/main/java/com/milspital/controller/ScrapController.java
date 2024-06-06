package com.milspital.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.milspital.dto.request.ScrapReqDto;
import com.milspital.dto.response.PostResDto;
import com.milspital.service.ScrapService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/scraps")
public class ScrapController {

	private final ScrapService scrapService;

	/**
	 * 스크랩한 게시글 목록을 조회한다.
	 *
	 * @param userId 사용자 id
	 * @return List<ScrapResDto> - 200
	 */
	@GetMapping("/{userId}")
	public ResponseEntity<List<PostResDto>> getScraps(@PathVariable Long userId) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(scrapService.getScraps(userId));
	}

	/**
	 * 게시글을 스크랩한다.
	 *
	 * @param scrapReqDto 스크랩 요청 dto
	 * @return PostResDto - 201
	 */
	@PostMapping
	public ResponseEntity<PostResDto> scrapPost(@RequestBody ScrapReqDto scrapReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(scrapService.scrapPost(scrapReqDto));
	}
}
