package com.milspital.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class Comment extends BaseTimeEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "comment_id")
	private Long id;

	@Column(nullable = false)
	private String content;

	@ManyToOne
	@JoinColumn(name = "writer_id")
	private User writer;

	@ManyToOne
	@JoinColumn(name = "post_id")
	private Post post;

	@Builder
	public Comment(String content, User writer, Post post) {
		this.content = content;
		this.writer = writer;
		this.post = post;
	}

	public void updateComment(String content) {
		this.content = content;
	}
}
