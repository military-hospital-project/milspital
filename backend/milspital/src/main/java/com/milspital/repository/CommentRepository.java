package com.milspital.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.milspital.domain.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long>{
}
