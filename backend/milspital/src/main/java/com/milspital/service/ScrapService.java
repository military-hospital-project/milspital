package com.milspital.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.milspital.domain.Department;
import com.milspital.domain.Hospital;
import com.milspital.domain.Post;
import com.milspital.domain.Scrap;
import com.milspital.domain.User;
import com.milspital.dto.request.ScrapReqDto;
import com.milspital.dto.response.PostResDto;
import com.milspital.repository.PostRepository;
import com.milspital.repository.ScrapRepository;
import com.milspital.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class ScrapService {

	private final ScrapRepository scrapRepository;
	private final UserRepository userRepository;
	private final PostRepository postRepository;

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

	/**
	 * 게시글을 스크랩한다.
	 *
	 * @param scrapReqDto 스크랩 요청 dto
	 * @return PostResDto 스크랩한 게시글 id
	 */
	public PostResDto createScrap(ScrapReqDto scrapReqDto) {
		User user = userRepository.findById(scrapReqDto.getUserId())
			.orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));

		Post post = postRepository.findById(scrapReqDto.getPostId())
			.orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

		if (scrapRepository.findByUserAndPost(user, post).isPresent()) {
			throw new IllegalArgumentException("이미 스크랩한 게시글입니다.");
		}

		Scrap scrap = Scrap.builder()
							.user(user)
							.post(post)
							.build();

		scrapRepository.save(scrap);

		return PostResDto.builder()
			.postId(post.getId())
			.build();
	}

	@Transactional
	public void deleteScrap(Long userId, List<Integer> deleteList) {
		User user = userRepository.findById(userId)
			.orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));

		for (Integer postId : deleteList) {
			Post post = postRepository.findById(postId.longValue())
				.orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

			Scrap scrap = scrapRepository.findByUserAndPost(user, post)
				.orElseThrow(() -> new IllegalArgumentException("스크랩하지 않은 글입니다."));

			scrapRepository.deleteById(scrap.getId());
		}
	}
}
