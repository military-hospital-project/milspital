package com.milspital.repository;

import java.util.List;

import com.milspital.domain.Post;
import com.milspital.domain.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PostRepository extends JpaRepository<Post, Long> {

	List<Post> findByWriter(User user);

}
