package com.milspital.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.milspital.dto.request.SignInReqDto;
import com.milspital.dto.request.SignUpReqDto;
import com.milspital.dto.response.LoginResDto;
import com.milspital.service.AuthService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
public class AuthController {

	private final AuthService loginService;

	/**
	 * 로그인 요청을 처리한다.
	 *
	 * @param signInReqDto 로그인 요청 dto
	 * @return LoginResDto - 200
	 */
	@PostMapping("/signIn")
	public ResponseEntity<LoginResDto> signIn(@RequestBody SignInReqDto signInReqDto) {
		return ResponseEntity.status(HttpStatus.OK)
				.body(loginService.signIn(signInReqDto));
	}

	/**
	 * 회원가입 요청을 처리한다.
	 *
	 * @param signUpReqDto 회원가입 요청 dto
	 * @return LoginResDto - 201
	 */
	@PostMapping("/signUp")
	public ResponseEntity<LoginResDto> signUp(@RequestBody SignUpReqDto signUpReqDto) {
		return ResponseEntity.status(HttpStatus.CREATED)
				.body(loginService.signUp(signUpReqDto));
	}

}
