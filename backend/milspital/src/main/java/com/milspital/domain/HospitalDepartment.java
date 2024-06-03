package com.milspital.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@NoArgsConstructor
public class HospitalDepartment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "hospital_department_id")
	private Long id;

	@ManyToOne
	@JoinColumn(name = "hospital_id")
	private Hospital hospital;

	@ManyToOne
	@JoinColumn(name = "department_id")
	private Department department;
}
