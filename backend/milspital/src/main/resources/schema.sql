<<<<<<< HEAD
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
=======
drop table if exists scrap;
drop table if exists comment;
drop table if exists post;
drop table if exists department;
drop table if exists hospital;
drop table if exists user;

create table user (
                      user_id bigint not null auto_increment,
                      name varchar(10) not null,
                      army_number varchar(255) not null,
                      specialty_number varchar(10),
                      password varchar(200) not null,
                      nickname varchar(10) not null,
                      user_type int not null,
                      created_at varchar(14) not null,
                      updated_at varchar(14) not null,
                      primary key (user_id)
);

create table hospital (
                          hospital_id bigint not null auto_increment,
                          hospital_name varchar(30) not null,
                          phone varchar(11) null,
                          address varchar(200) null,
                          primary key (hospital_id)
);

create table department (
                            department_id bigint not null auto_increment,
                            department_name varchar(50) not null,
                            primary key (department_id)
);

create table post (
                      post_id bigint not null auto_increment,
                      writer_id bigint not null,
                      hospital_id bigint not null,
                      department_id bigint not null,
                      disease_name text not null,
                      cause_of_disease text not null,
                      cure_process text not null,
                      tip text null,
                      created_at varchar(14) not null,
                      updated_at varchar(14) not null,
                      primary key (post_id),
                      foreign key (writer_id) references user(user_id),
                      foreign key (hospital_id) references hospital(hospital_id),
                      foreign key (department_id) references department(department_id)
);

create table comment (
                         comment_id bigint not null auto_increment,
                         writer_id bigint not null,
                         post_id bigint not null,
                         content text not null,
                         created_at varchar(14) not null,
                         updated_at varchar(14) not null,
                         primary key (comment_id),
                         foreign key (writer_id) references user(user_id),
                         foreign key (post_id) references post(post_id)
);

create table scrap (
                       scrap_id bigint not null auto_increment,
                       user_id bigint not null,
                       post_id bigint not null,
                       created_at varchar(14) not null,
                       updated_at varchar(14) not null,
                       primary key (scrap_id),
                       foreign key (user_id) references user(user_id),
                       foreign key (post_id) references post(post_id)
>>>>>>> f5ef55e65c49a78490b3f2787f12d8205e59b3e4
);
