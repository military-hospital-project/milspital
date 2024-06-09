drop table if exists scrap;
drop table if exists comment;
drop table if exists post;
drop table if exists department;
drop table if exists hospital;
drop table if exists user;

create table user (
                      user_id bigint not null auto_increment,
                      name varchar(10) not null,
                      army_number varchar(11) not null,
                      specialty_number varchar(4),
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
);
