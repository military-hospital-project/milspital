package com.milspital.domain;

import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class User extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(unique = true, nullable = false)
    private String armyNumber;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false)
    private String nickname;

    @Column(nullable = false)
    private Integer userType;

    @OneToMany(mappedBy = "user")
    private List<Scrap> scraps = new ArrayList<>();

    @Builder
    public User(String name, String armyNumber, String password, String nickname, Integer userType) {
        this.name = name;
        this.armyNumber = armyNumber;
        this.password = password;
        this.nickname = nickname;
        this.userType = userType;
    }
}
