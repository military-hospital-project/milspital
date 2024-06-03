package com.milspital.domain;

import jakarta.annotation.Nonnull;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor
public class Hospital {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hospital_id")
	private Long id;

	@Nonnull
	private String hospitalName;

	private String phone;

	private String address;

	@OneToMany(mappedBy = "hospital")
	private List<HospitalDepartment> hospitalDepartments = new ArrayList<>();
}
