package com.milspital.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.milspital.domain.Department;
import com.milspital.domain.Hospital;
import com.milspital.domain.Post;
import com.milspital.domain.Scrap;
import com.milspital.domain.User;
import com.milspital.dto.response.PostResDto;
import com.milspital.repository.ScrapRepository;
import com.milspital.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ScrapService {

	private final ScrapRepository scrapRepository;
	private final UserRepository userRepository;

	/**
	 * 스크랩한 글 목록을 조회한다.
	 *
	 * @param userId 사용자 id
	 * @return List<PostResDto> 스크랩한 글 목록
	 */
	public List<PostResDto> getScraps(Long userId) {
		User user=  userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));

		List<Scrap> scraps = scrapRepository.findByUser(user);
		List<PostResDto> postListResDto = new ArrayList<>();

		for (Scrap scrap : scraps) {
			Post post = scrap.getPost();
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
