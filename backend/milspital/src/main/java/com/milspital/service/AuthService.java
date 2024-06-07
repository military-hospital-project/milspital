package com.milspital.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.milspital.domain.User;
import com.milspital.dto.request.SignInReqDto;
import com.milspital.dto.request.SignUpReqDto;
import com.milspital.dto.response.LoginResDto;
import com.milspital.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

	private final PasswordEncoder passwordEncoder;

	private final UserRepository userRepository;

	/**
	 * 로그인 요청을 처리한다.
	 *
	 * @param signInReqDto 로그인 요청 dto
	 * @return LoginResDto
	 */
	public LoginResDto signIn(SignInReqDto signInReqDto) {
		User user = userRepository.findByArmyNumber(signInReqDto.getArmyNumber())
			.orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));

		String rawPassword = signInReqDto.getPassword();

		if (!passwordEncoder.matches(rawPassword, user.getPassword())) {
			throw new IllegalArgumentException("비밀번호가 일치하지 않습니다.");
		}

		return LoginResDto.builder()
			.userId(user.getId())
			.nickname(user.getNickname())
			.userType(user.getUserType())
			.build();
	}

	/**
	 * 회원가입 요청을 처리한다.
	 *
	 * @param signUpReqDto 회원가입 요청 dto
	 * @return LoginResDto
	 */
	public LoginResDto signUp(SignUpReqDto signUpReqDto) {

		if (userRepository.findByArmyNumber(signUpReqDto.getArmyNumber()).isPresent()) {
			throw new IllegalArgumentException("이미 가입된 사용자입니다.");
		}

		String encodedPassword = passwordEncoder.encode(signUpReqDto.getPassword());

		User user = User.builder()
			.name(signUpReqDto.getName())
			.armyNumber(signUpReqDto.getArmyNumber())
			.password(encodedPassword)
			.nickname(signUpReqDto.getNickname())
			.userType(signUpReqDto.getUserType())
			.build();

		userRepository.save(user);

		return LoginResDto.builder()
			.userId(user.getId())
			.nickname(user.getNickname())
			.userType(user.getUserType())
			.build();
	}
}
