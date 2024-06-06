package com.milspital.repository;

import java.util.Optional;

import com.milspital.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
	Optional<User> findByArmyNumber(String armyNumber);
}
