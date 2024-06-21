create database codingon character set utf8mb4 collate utf8mb4_unicode_ci;
use codingon;

create table member (
	id varchar(20) not null primary key,
    name varchar(5) not null,
    age int,
    gender varchar(2) not null,
    email varchar(50),
    promotion varchar(2) default 'x'
);

desc member;

alter table member modify id varchar(10);
alter table member drop age;
alter table member add interest varchar(100);

create table user (
	id varchar(10) primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
);

desc user;

insert into user values
	('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33),
    ('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31),
    ('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53),
    ('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39),
    ('widowmaker', '38ewifh3', '위도우', 'F', '1976-06-27', 47),
    ('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22),
    ('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);
    
select * from user;

-- 1. 모든 회원목록을 가져오는데, 이 때 birtday 컬럼의 값을 기준으로 오름차순 정렬.
select * from user order by birtday;

-- 2. 회원 목록 중 gender 컬럼의 값이 'M'인 회원목록을 가져오는데, 이 때 name 컬럼의 값을 기준으로 내림차순 정렬.
select * from user where gender = 'M' order by name desc;

-- 3. 1990년대에 태어난 회원의 id, name 컬럼을 가져와 목록으로 보여주기
select id, name from user where birthday >= '1990-01-01' and birthday <= '1999-12-31';

-- 4. 6월생 회원의 목록을 birthday 기준으로 오름차순 정렬
select * from user where month(birthday) = 6 order by birthday asc;

-- 5. gender 컬럼의 값이 'M'이고, 1970년대에 태어난 회원의 목록 보여주기
select * from user where gender = 'M' and brithday between '1970-01-01' and '1979-12-31';

-- 6. 모든 회원목록 중 age를 기준으로 내림차순 정렬하여 가져오는데, 그 때 처음 3개의 레코드만 가져오기
select * from user order by age desc limit 3;

-- 7. 모든 회원 목록 중 나이가 25이상 50이하인 회원의 목록
select * from user where age <= 50 and age >= 25;

-- 8. id 컬럼의 값이 hong1234 인 레코드의 pw 컬럼의 값을 12345678로 변경
update user set pw = '12345678' where id = 'hong1234';

-- 9. id 컬럼의 값이 jungkrat인 레코드 삭제
delete from user where id = 'jungkrat';