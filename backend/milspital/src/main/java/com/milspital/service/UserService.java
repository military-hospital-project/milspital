package com.milspital.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.milspital.domain.Department;
import com.milspital.domain.Hospital;
import com.milspital.domain.Post;
import com.milspital.domain.User;
import com.milspital.dto.response.PostResDto;
import com.milspital.dto.response.UserInfoDto;
import com.milspital.repository.PostRepository;
import com.milspital.repository.ScrapRepository;
import com.milspital.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService {

	private final UserRepository userRepository;
	private final PostRepository postRepository;
	private final ScrapRepository scrapRepository;

	/**
	 * 사용자 정보를 조회한다.
	 *
	 * @param userId 사용자 id
	 * @return UserInfoDto - 마이페이지용 사용자 정보
	 */
	public UserInfoDto getUserInfo(Long userId) {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));

		return UserInfoDto.builder()
			.nickname(user.getNickname())
			.militaryNumber(user.getArmyNumber())
			.postCount(postRepository.countByWriter(user))
			.scrapCount(scrapRepository.countByUser(user))
			.build();
	}

	/**
	 * 사용자가 작성한 게시글 목록을 조회한다.
	 *
	 * @param userId 사용자 id
	 * @return List<PostResDto> - 사용자가 작성한 게시글 목록
	 */
	public List<PostResDto> getPostsByUser(Long userId) {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));

		List<Post> posts = postRepository.findByWriter(user);
		List<PostResDto> postListResDto = new ArrayList<>();

		for (Post post : posts) {
			User writer = post.getWriter();
			Hospital hospital = post.getHospital();
			Department department = post.getDepartment();

			postListResDto.add(PostResDto.builder()
				.filter(1)
				.postId(post.getId())
				.diseaseName(post.getDiseaseName())
				.causeOfDisease(post.getCauseOfDisease())
				.cureProcess(post.getCureProcess())
				.tip(post.getTip())
				.writerId(writer.getId())
				.nickname(writer.getNickname())
				.hospitalName(hospital.getHospitalName())
				.departmentName(department.getDepartmentName())
				.createdAt(post.getCreatedAt())
				.updatedAt(post.getUpdatedAt())
				.build());
		}

		return postListResDto;

	}

}
