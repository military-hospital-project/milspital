package com.milspital.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.milspital.domain.Scrap;
import com.milspital.domain.User;

public interface ScrapRepository extends JpaRepository<Scrap, Long> {
	List<Scrap> findByUser(User user);

}
