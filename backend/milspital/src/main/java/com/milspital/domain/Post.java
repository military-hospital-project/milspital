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

    @ManyToOne
    @JoinColumn(name = "hospital_id")
    private Hospital hospital;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;


    @Builder
    public Post(String diseaseName, String causeOfDisease, String cureProcess, String tip, User writer, Hospital hospital, Department department) {
        this.diseaseName = diseaseName;
        this.causeOfDisease = causeOfDisease;
        this.cureProcess = cureProcess;
        this.tip = tip;
        this.writer = writer;
        this.hospital = hospital;
        this.department = department;
    }
}
