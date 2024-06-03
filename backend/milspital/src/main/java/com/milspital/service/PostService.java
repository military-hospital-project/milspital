package com.milspital.service;

import com.milspital.domain.Post;
import com.milspital.domain.User;
import com.milspital.dto.PostResDto;
import com.milspital.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class PostService {

	private final PostRepository postRepository;

	/**
	 * 게시글 전체 조회
	 * @return 게시글 전체 List
	 */
	public List<PostResDto> getPosts() {
		List<Post> posts = postRepository.findAll();
		List<PostResDto> postListResDto = new ArrayList<>();

		for (Post post : posts) {
			User writer = post.getWriter();

			postListResDto.add(PostResDto.builder()
					.id(post.getId())
					.diseaseName(post.getDiseaseName())
					.causeOfDisease(post.getCauseOfDisease())
					.cureProcess(post.getCureProcess())
					.tip(post.getTip())
					.nickname(writer.getNickname())
					// TODO : 병원 이름, 진료과 수정 필요
					.hospitalName("병원 이름")
					.departmentName("진료과")
					.createdAt(post.getCreatedAt())
					.updatedAt(post.getUpdatedAt())
					.build());
		}

		return postListResDto;
	}
}
