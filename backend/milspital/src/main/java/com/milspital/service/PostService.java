package com.milspital.service;

import com.milspital.domain.*;
import com.milspital.dto.CommentResDto;
import com.milspital.dto.PostDetailResDto;
import com.milspital.dto.PostResDto;
import com.milspital.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

	private final PostRepository postRepository;

	/**
	 * 게시글 전체 목록을 조회한다.
	 * @return List<PostResDto>
	 */
	public List<PostResDto> getPosts() {
		List<Post> posts = postRepository.findAll();
		List<PostResDto> postListResDto = new ArrayList<>();

		for (Post post : posts) {
			User writer = post.getWriter();
			Hospital hospital = post.getHospital();
			Department department = post.getDepartment();

			postListResDto.add(PostResDto.builder()
					.postId(post.getId())
					.diseaseName(post.getDiseaseName())
					.causeOfDisease(post.getCauseOfDisease())
					.cureProcess(post.getCureProcess())
					.tip(post.getTip())
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
	 * 게시글 상세 정보를 조회한다. (댓글 포함)
	 * @param postId
	 * @return PostDetailResDto
	 */
	public PostDetailResDto getPostDetail(Long postId) {
		Post post = postRepository.findById(postId)
						.orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

		User writer = post.getWriter();
		Hospital hospital = post.getHospital();
		Department department = post.getDepartment();
		List<Comment> comments = post.getComments();
		List<CommentResDto> commentResList = new ArrayList<>();

		for (Comment comment : comments) {
			commentResList.add(CommentResDto.builder()
					.commentId(comment.getId())
					.writerId(comment.getWriter().getId())
					.nickname(comment.getWriter().getNickname())
					.content(comment.getContent())
					.createdAt(comment.getCreatedAt())
					.updatedAt(comment.getUpdatedAt())
					.build());
		}

		return PostDetailResDto.builder()
				.postId(post.getId())
				.diseaseName(post.getDiseaseName())
				.causeOfDisease(post.getCauseOfDisease())
				.cureProcess(post.getCureProcess())
				.tip(post.getTip())
				.createdAt(post.getCreatedAt())
				.updatedAt(post.getUpdatedAt())
				.userId(writer.getId())
				.nickname(writer.getNickname())
				.userType(writer.getUserType())
				.hospitalName(hospital.getHospitalName())
				.address(hospital.getAddress())
				.phone(hospital.getPhone())
				.departmentName(department.getDepartmentName())
				.comments(commentResList)
				.build();
	}
}
