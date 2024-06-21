-- 데이터베이스: 데이터의 집합
-- DBMS: Database Managment System, 데이터베이스를 운영/관리하는 프로그램
	-- ex. MySQL
-- SQL: 데이터베이스를 구축, 관리하고 활용하기 위해 사용하는 언어
-- 참고) 스키마 == 데이터베이스

-- DDL(Data Definition Language)
-- : 데이터베이스, 테이블을 "정의"하는 언어

-- 1. 데이터베이스 생성.
create database codingon character set utf8mb4 collate utf8mb4_unicode_ci;

-- 2. 데이터베이스 목록
show databases;

-- 3. 데이터베이스 사용 선언
use codingon;

-- 4. 데이터베이스 삭제
drop database codingon;

-- [테이블] 관련 명령어
-- <제약 조건>
-- not null: null을 허용 X (필수로 값이 있어야 함)
-- auto_increment: 자동 숫자 증가
-- primary key: 기본키(중복 x, null x)
-- 		pk 설정된 컬럼은 null 값이 들어올 수 없으므로 not null을 적지 않아도 자동으로 not null이 설정
-- default[xx]: 기본값
-- unique: 중복 허용 x, null o // 한 테이블에 여러 개 설정 가능

-- 1. 테이블 생성
create table products (
	id int auto_increment primary key,
    name varchar(50) not null,
    model_number varchar(15) not null,
    series varchar(30) not null
);

-- 2. 테이블 목록 확인
show tables;

-- 3. 테이블 구조 확인
desc products;

-- 4. 테이블 삭제
drop table products;

-- 5. 테이블 수정
-- 이미 생성된 테이블에 데이터가 추가되었는데, 테이블 구조가 바뀌어야 하는 경-- 5-1. 컬럼 추가
-- : 기존 데이터들은 new_column이 값자기 생겼으니 null 할당
alter table products add new_column varchar(20);
-- 5-2. 컬럼 타입 수정
alter table products modify new_column int;
-- 5-3. 컬럼 삭제
alter table products drop new_column;

-- 9. group by: "~별로"
-- 고객별로 주문한 주문 건수 구하기
-- select 절에서, group by에서 사용한 속성과 집계함수만 사용 가능


select custid, count(*) from orders group by custid;

-- 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount) from orders group by custid;

-- 고객별로 주문한 총 주문액 구하기
select custid, sum(price * amount) from orders group by custid;

-- 응용. 주문총액이 가장 큰 top3
select custid, sum(price * amount) as 'total_pay' from orders group by custid order by total_pay desc limit 3;

-- 상품별로 판매 개수 구하기
select prodname, sum(amount) from orders group by prodname;

-- 10. having: group by 절 이후에 추가 조건

-- 총 주문액이 10000원 이상인 고객에 대해서 // 고객별로 주문한 상품 총 수량 구하기
select custid, sum(amount), sum(price * amount) from orders group by custid
having sum(price * amount) >= 10000;

-- 총 주문액이 10000원 이상인 고객에 대해서 고객별로 주문한 상품 총 수량 구하기
-- (단, custid가 'bunny'인 고객은 제외하고 출력할 것)
select custid, sum(amount), sum(price * amount) from orders
where custid != 'bunny'
group by custid
having sum(price * amount) >= 10000;

/*
where vs. having

having
- 그룹에 대해서 필터링(그래서 group by 와 함께 쓰임)
- group by 보다 뒤에 위치해야함
- 집계 함수랑 함께 사용 가능

where
- 각각의 행을 필터링
- group by 보다 앞에 위치
*/