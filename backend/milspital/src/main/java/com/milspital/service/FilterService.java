package com.milspital.service;

import java.time.Duration;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import com.milspital.dto.request.FilterReqDto;
import com.milspital.dto.response.FilterResDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class FilterService {

	private final WebClient webClient;

	/**
	 * 욕설이 포함된 텍스트인지 확인한다.
	 *
	 * @param text 확인할 텍스트(글자수 500자 이내)
	 * @return boolean - 욕설이 포함되지 않은 경우 true, 포함된 경우 false
	 */
	public boolean filterText(String text) {
		ResponseEntity<FilterResDto> response = webClient.post()
				.uri("/check-sentences")
				.bodyValue(FilterReqDto.builder().text(text).build())
				.retrieve()
				.toEntity(FilterResDto.class)
				// 에러 발생 시 3회 재시도
				// .retry(3)
				// 타임아웃 설정
				.timeout(Duration.ofSeconds(1))
				.block();

		if (!response.getStatusCode().is2xxSuccessful()) {
			throw new RuntimeException("Filtering failed");
		}

		return !response.getBody().getAbusive().equals("1");
	}
}
