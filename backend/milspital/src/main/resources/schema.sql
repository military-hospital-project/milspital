DROP TABLE IF EXISTS Scrap;
DROP TABLE IF EXISTS Comment;
DROP TABLE IF EXISTS Post;
DROP TABLE IF EXISTS Department;
DROP TABLE IF EXISTS Hospital;
DROP TABLE IF EXISTS User;

CREATE TABLE User (
                      USER_ID BIGINT NOT NULL AUTO_INCREMENT,
                      NAME VARCHAR(10) NOT NULL,
                      ARMY_NUMBER VARCHAR(255) NOT NULL,
                      PASSWORD VARCHAR(200) NOT NULL,
                      NICKNAME VARCHAR(10) NOT NULL,
                      USER_TYPE INT NOT NULL,
                      CREATED_AT VARCHAR(14) NOT NULL,
                      UPDATED_AT VARCHAR(14) NOT NULL,
                      PRIMARY KEY (USER_ID)
);

CREATE TABLE Hospital (
                          HOSPITAL_ID BIGINT NOT NULL AUTO_INCREMENT,
                          HOSPITAL_NAME VARCHAR(30) NOT NULL,
                          PHONE VARCHAR(11) NULL,
                          ADDRESS VARCHAR(200) NULL,
                          PRIMARY KEY (HOSPITAL_ID)
);

CREATE TABLE Department (
                            DEPARTMENT_ID BIGINT NOT NULL AUTO_INCREMENT,
                            DEPARTMENT_NAME VARCHAR(50) NOT NULL,
                            PRIMARY KEY (DEPARTMENT_ID)
);

CREATE TABLE Post (
                      POST_ID BIGINT NOT NULL AUTO_INCREMENT,
                      WRITER_ID BIGINT NOT NULL,
                      HOSPITAL_ID BIGINT NOT NULL,
                      DEPARTMENT_ID BIGINT NOT NULL,
                      DISEASE_NAME TEXT NOT NULL,
                      CAUSE_OF_DISEASE TEXT NOT NULL,
                      CURE_PROCESS TEXT NOT NULL,
                      TIP TEXT NULL,
                      CREATED_AT VARCHAR(14) NOT NULL,
                      UPDATED_AT VARCHAR(14) NOT NULL,
                      PRIMARY KEY (POST_ID),
                      FOREIGN KEY (WRITER_ID) REFERENCES User(USER_ID),
                      FOREIGN KEY (HOSPITAL_ID) REFERENCES Hospital(HOSPITAL_ID),
                      FOREIGN KEY (DEPARTMENT_ID) REFERENCES Department(DEPARTMENT_ID)
);

CREATE TABLE Comment (
                         COMMENT_ID BIGINT NOT NULL AUTO_INCREMENT,
                         WRITER_ID BIGINT NOT NULL,
                         POST_ID BIGINT NOT NULL,
                         CONTENT TEXT NOT NULL,
                         CREATED_AT VARCHAR(14) NOT NULL,
                         UPDATED_AT VARCHAR(14) NOT NULL,
                         PRIMARY KEY (COMMENT_ID),
                         FOREIGN KEY (WRITER_ID) REFERENCES User(USER_ID),
                         FOREIGN KEY (POST_ID) REFERENCES Post(POST_ID)
);

CREATE TABLE Scrap (
                       SCRAP_ID BIGINT NOT NULL AUTO_INCREMENT,
                       USER_ID BIGINT NOT NULL,
                       POST_ID BIGINT NOT NULL,
                       CREATED_AT VARCHAR(14) NOT NULL,
                       UPDATED_AT VARCHAR(14) NOT NULL,
                       PRIMARY KEY (SCRAP_ID),
                       FOREIGN KEY (USER_ID) REFERENCES User(USER_ID),
                       FOREIGN KEY (POST_ID) REFERENCES Post(POST_ID)
);

