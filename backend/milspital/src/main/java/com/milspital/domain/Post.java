package com.milspital.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Post extends BaseTimeEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "post_id")
    private Long id;

    @Column(nullable = false)
    private String diseaseName;

    @Column(nullable = false)
    private String causeOfDisease;

    @Column(nullable = false)
    private String cureProcess;

    private String tip;

    @ManyToOne
    @JoinColumn(name = "writer_id")
    private User writer;

    @OneToMany(mappedBy = "post", cascade = CascadeType.ALL)
    private List<Comment> comments = new ArrayList<>();

}
