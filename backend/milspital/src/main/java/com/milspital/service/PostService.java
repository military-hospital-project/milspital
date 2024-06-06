package com.milspital.service;

import com.milspital.domain.*;
import com.milspital.dto.request.PostReqDto;
import com.milspital.dto.response.CommentResDto;
import com.milspital.dto.response.PostDetailResDto;
import com.milspital.dto.response.PostResDto;
import com.milspital.repository.DepartmentRepository;
import com.milspital.repository.HospitalRepository;
import com.milspital.repository.PostRepository;
import com.milspital.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class PostService {

	private final FilterService filterService;

	private final PostRepository postRepository;
	private final UserRepository userRepository;
	private final HospitalRepository hospitalRepository;
	private final DepartmentRepository departmentRepository;

	/**
	 * 게시글 전체 목록을 조회한다.
	 *
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
	 * 게시글 상세 정보를 조회한다. (댓글 포함)
	 *
	 * @param postId 글 id
	 * @throws IllegalArgumentException 해당 게시글이 존재하지 않을 경우
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
					.filter(1)
					.commentId(comment.getId())
					.writerId(comment.getWriter().getId())
					.userType(comment.getWriter().getUserType())
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

	/**
	 * 게시글을 생성한다.
	 *
	 * @param postReqDto 게시글 생성 요청 정보
	 * @throws IllegalArgumentException 사용자, 병원, 진료과 정보가 존재하지 않을 경우
	 * @return PostResDto 생성된 게시글 정보
	 */
	public PostResDto createPost(PostReqDto postReqDto) {
		User user = userRepository.findById(postReqDto.getUserId())
				.orElseThrow(() -> new IllegalArgumentException("해당 사용자가 존재하지 않습니다."));

		if (user.getUserType() == 20) {
			throw new IllegalArgumentException("의사는 게시글을 작성할 수 없습니다.");
		}
		
		Hospital hospital = hospitalRepository.findByHospitalName(postReqDto.getHospitalName())
				.orElseThrow(() -> new IllegalArgumentException("해당 병원이 존재하지 않습니다."));

		Department department = departmentRepository.findByDepartmentName(postReqDto.getDepartmentName())
				.orElseThrow(() -> new IllegalArgumentException("해당 진료과가 존재하지 않습니다."));

		// filtering text
		if (filterService.isTextBad(postReqDto.getCureProcess()) || filterService.isTextBad(postReqDto.getTip())) {
			return PostResDto.builder().filter(0).build();
		}

		Post post = Post.builder()
						.diseaseName(postReqDto.getDiseaseName())
						.causeOfDisease(postReqDto.getCauseOfDisease())
						.cureProcess(postReqDto.getCureProcess())
						.tip(postReqDto.getTip())
						.writer(user)
						.hospital(hospital)
						.department(department)
						.build();

		postRepository.save(post);

		return PostResDto.builder()
						.filter(1)
						.postId(post.getId())
						.build();
	}

	/**
	 * 게시글을 수정한다.
	 *
	 * @param postId 게시글 id
	 * @param postReqDto 게시글 수정 요청 정보
	 * @throws IllegalArgumentException 게시글, 병원, 진료과 정보가 존재하지 않을 경우
	 * @throws IllegalArgumentException 작성자가 아닌 경우
	 * @return PostResDto 수정된 게시글 정보(욕설 감지 여부)
	 */
	public PostResDto updatePost(Long postId, PostReqDto postReqDto) {
		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

		User user = post.getWriter();
		if (!user.getId().equals(postReqDto.getUserId())) {
			throw new IllegalArgumentException("해당 사용자가 작성한 게시글이 아닙니다.");
		}

		Hospital hospital = hospitalRepository.findByHospitalName(postReqDto.getHospitalName())
				.orElseThrow(() -> new IllegalArgumentException("해당 병원이 존재하지 않습니다."));

		Department department = departmentRepository.findByDepartmentName(postReqDto.getDepartmentName())
				.orElseThrow(() -> new IllegalArgumentException("해당 진료과가 존재하지 않습니다."));

		// filtering text
		if (filterService.isTextBad(postReqDto.getCureProcess()) || filterService.isTextBad(postReqDto.getTip())) {
			return PostResDto.builder().filter(0).postId(post.getId()).build();
		}

		post.updatePost(postReqDto.getDiseaseName(), postReqDto.getCauseOfDisease(), postReqDto.getCureProcess(),
				postReqDto.getTip(), user, hospital, department);

		postRepository.save(post);

		return PostResDto.builder()
				.filter(1)
				.postId(post.getId())
				.build();
	}

	/**
	 * 게시글을 삭제한다.
	 *
	 * @param postId 게시글 id
	 * @throws IllegalArgumentException 해당 게시글이 존재하지 않을 경우
	 */
	public void deletePost(Long postId) {
		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new IllegalArgumentException("해당 게시글이 존재하지 않습니다."));

		postRepository.delete(post);
	}
}
