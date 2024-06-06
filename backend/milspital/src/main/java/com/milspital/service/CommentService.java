package com.milspital.service;

import org.springframework.stereotype.Service;

import com.milspital.domain.Comment;
import com.milspital.domain.Post;
import com.milspital.domain.User;
import com.milspital.dto.request.CommentReqDto;
import com.milspital.dto.response.CommentResDto;
import com.milspital.repository.CommentRepository;
import com.milspital.repository.PostRepository;
import com.milspital.repository.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class CommentService {

	private final FilterService filterService;

	private final CommentRepository commentRepository;
	private final PostRepository postRepository;
	private final UserRepository userRepository;

	/**
	 * 댓글을 생성한다.
	 *
	 * @param postId 게시글 id
	 * @param commentReqDto 댓글 생성 요청 dto
	 * @return CommentResDto
	 */
	public CommentResDto createComment(Long postId, CommentReqDto commentReqDto) {
		User user = userRepository.findById(commentReqDto.getUserId())
				.orElseThrow(() -> new IllegalArgumentException("사용자를 찾을 수 없습니다."));
		Post post = postRepository.findById(postId)
				.orElseThrow(() -> new IllegalArgumentException("게시글을 찾을 수 없습니다."));

		if (filterService.isTextBad(commentReqDto.getContent())) {
			return CommentResDto.builder().filter(0).build();
		}

		Comment comment = Comment.builder()
			.post(post)
			.writer(user)
			.content(commentReqDto.getContent())
			.build();

		commentRepository.save(comment);

		return CommentResDto.builder()
				.filter(1)
				.commentId(comment.getId())
				.build();
	}
}
