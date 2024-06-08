DROP TABLE IF EXISTS scrap;
DROP TABLE IF EXISTS comment;
DROP TABLE IF EXISTS post;
DROP TABLE IF EXISTS department;
DROP TABLE IF EXISTS hospital;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    user_id BIGINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    army_number VARCHAR(255) NOT NULL,
    password VARCHAR(200) NOT NULL,
    nickname VARCHAR(10) NOT NULL,
    user_type INT NOT NULL,
    created_at VARCHAR(14) NOT NULL,
    updated_at VARCHAR(14) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE hospital (
    hospital_id BIGINT NOT NULL AUTO_INCREMENT,
    hospital_name VARCHAR(30) NOT NULL,
    phone VARCHAR(11) NULL,
    address VARCHAR(200) NULL,
    PRIMARY KEY (hospital_id)
);

CREATE TABLE department (
    department_id BIGINT NOT NULL AUTO_INCREMENT,
    department_name VARCHAR(50) NOT NULL,
    PRIMARY KEY (department_id)
);

CREATE TABLE post (
    post_id BIGINT NOT NULL AUTO_INCREMENT,
    writer_id BIGINT NOT NULL,
    hospital_id BIGINT NOT NULL,
    department_id BIGINT NOT NULL,
    disease_name TEXT NOT NULL,
    cause_of_disease TEXT NOT NULL,
    cure_process TEXT NOT NULL,
    tip TEXT NULL,
    created_at VARCHAR(14) NOT NULL,
    updated_at VARCHAR(14) NOT NULL,
    PRIMARY KEY (post_id),
    FOREIGN KEY (writer_id) REFERENCES user(user_id),
    FOREIGN KEY (hospital_id) REFERENCES hospital(hospital_id),
    FOREIGN KEY (department_id) REFERENCES department(department_id)
);

CREATE TABLE comment (
    comment_id BIGINT NOT NULL AUTO_INCREMENT,
    writer_id BIGINT NOT NULL,
    post_id BIGINT NOT NULL,
    content TEXT NOT NULL,
    created_at VARCHAR(14) NOT NULL,
    updated_at VARCHAR(14) NOT NULL,
    PRIMARY KEY (comment_id),
    FOREIGN KEY (writer_id) REFERENCES user(user_id),
    FOREIGN KEY (post_id) REFERENCES post(post_id)
);

CREATE TABLE scrap (
    scrap_id BIGINT NOT NULL AUTO_INCREMENT,
    user_id BIGINT NOT NULL,
    post_id BIGINT NOT NULL,
    created_at VARCHAR(14) NOT NULL,
    updated_at VARCHAR(14) NOT NULL,
    PRIMARY KEY (scrap_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (post_id) REFERENCES post(post_id)
);
