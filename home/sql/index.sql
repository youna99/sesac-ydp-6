use codingon; -- 데이터 베이스 사용 선언

-- 실습1.
create table authors (
	author_id int primary key,
    first_name varchar(50),
    last_name varchar(50),
    email varchar(50)
);

create table books (
	book_id int primary key,
    title varchar(100),
    author_id int,
    publication_date date,
    foreign key (author_id) references authors(author_id) on update cascade on delete cascade
);

create table orders (
	order_id int primary key,
    book_id int,
    customer_name varchar(50),
    order_date date,
    foreign key (book_id) references books(book_id) on update cascade on delete cascade
);

desc authors;
desc books;
desc orders;

-- 실습2.
INSERT INTO authors (author_id, first_name, last_name, email)
VALUES (1, 'J.K.', 'Rowling', 'jkrowling@gmail.com'),
       (2, 'George R.R.', 'Martin', 'grmartin@yahoo.com'),
       (3, 'Stephen', 'King', 'sking@hotmail.com');

INSERT INTO books (book_id, title, author_id, publication_date)
VALUES (1, 'Harry Potter and the Philosopher''s Stone', 1, '1997-06-26'),
       (2, 'A Game of Thrones', 2, '1996-08-06'),
       (3, 'The Shining', 3, '1977-01-28');
       
INSERT INTO orders (order_id, book_id, customer_name, order_date)
VALUES (1, 1, 'John Smith', '2022-02-15'),
       (2, 2, 'Jane Doe', '2022-02-16'),
       (3, 3, 'Bob Johnson', '2022-02-17');
       
SELECT * FROM authors;
SELECT * FROM books;
SELECT * FROM orders;

-- 1. author_id가 1인 작성자의 이메일을 jkrowling@yahoo.com으로 업데이트하는 SQL 문을 작성합니다.
update authors set email = 'jkrowling@yahoo.com' where author_id = 1;
-- 2. books 테이블에서 book_id 2인 책을 삭제하는 SQL 문을 작성합니다.
delete from orders where book_id = 2;
delete from books where book_id = 2;
-- 3. 다음 세부 정보가 포함된 새 책을 삽입하는 SQL 문을 작성합니다.
-- 책 ID: 4
-- 제목: The Stand
-- 저자 ID: 3
-- 발행일자 : 1978-01-01
insert into books values (4, 'The Stand', 3, '1978-01-01');
-- 4. book_id 1인 책의 출판 날짜를 1997-06-30으로 업데이트하는 SQL 문을 작성하십시오.
update books set publication_date = '1997-06-30' where book_id = 1;
-- 5. 2022-02-17 이전에 접수된 모든 주문을 삭제하는 SQL 문을 작성합니다.
set sql_safe_updates=0;
delete from orders where order_date < '2022-02-17';
-- 6. 다음 세부 정보와 함께 새 주문을 삽입하는 SQL 문을 작성합니다.
-- 주문 ID: 4
-- 책 ID: 1
-- 고객 이름: Sarah Johnson
-- 주문일자 : 2022-02-18
insert into orders values (4, 1, 'Sarah Johnson', '2022-02-18');
-- 7. order_id가 1인 주문의 고객 이름을 Jack Smith로 업데이트하는 SQL 문을 작성합니다.
update orders set customer_name = 'Jack Smith' where order_id = 1;
-- 8. 다음 세부 정보와 함께 새 작성자를 삽입하는 SQL 문을 작성합니다.
-- 저자 ID: 4
-- 이름: agatha
-- 성: christie
-- 이메일: agatha.christie@example.com
insert into authors values (4, 'agatha', 'christie', 'agatha.christie@example.com');
-- 9. author_id 2인 작성자의 성을 Martinez로 업데이트하는 SQL 문을 작성합니다.
update authors set last_name = 'Martinez' where author_id = 2;
-- 10. author_id 3인 저자가 쓴 모든 책을 삭제하는 SQL 문을 작성합니다.
delete from books where author_id = 3;
delete from authors where author_id = 3;

select * from authors;
select * from books;
select * from orders;

-- 실습3.
CREATE TABLE departments (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  location VARCHAR(50)
);
DESC departments;

CREATE TABLE employees (
  id INT PRIMARY KEY,
  name VARCHAR(50),
  age INT,
  department_id INT,
  FOREIGN KEY (department_id) REFERENCES departments(id)
);
DESC employees;

INSERT INTO departments (id, name, location)
VALUES
  (1, 'Sales', 'New York'),
  (2, 'Marketing', 'San Francisco'),
  (3, 'Engineering', 'Seattle');

INSERT INTO employees (id, name, age, department_id)
VALUES
  (1, 'John Doe', 25, 1),
  (2, 'Jane Smith', 30, 1),
  (3, 'Bob Johnson', 40, 2),
  (4, 'Alice Lee', 35, 3),
  (5, 'Tom Wilson', 28, 3);
  
SELECT * from departments;
SELECT * from employees;

-- 1. 모든 직원을 직원 테이블에 나열합니다.
select * from employees;
-- 2. 나이순으로 직원 테이블에 있는 모든 직원을 나이순(내림차순)으로 나열합니다.
select * from employees order by age desc;
-- 3. 직원 테이블에 30세 이상인 직원의 이름과 나이를 나열합니다.
select name, age from employees where age >= 30;
-- 4. 영업부에서 근무하는 직원의 이름과 부서 ID를 직원 표에 나열합니다.
select e.name, e.department_id from employees e join departments d
on e.department_id = d.id where d.id = 1;
-- 5. 엔지니어링 부서에 근무하고 30세 미만인 직원의 이름과 나이를 직원 테이블에 나열합니다.
select e.name, e.age from employees e join departments d on e.department_id = d.id
where d.id = 3 and e.age < 30;
-- 6. 직원 테이블에서 직원 수를 계산합니다.
select count(*) from employees;
-- 7. 직원 테이블에서 각 부서의 직원 수를 계산합니다.
select d.name, count(*) from employees e  join departments d
on e.department_id = d.id
group by department_id;
-- 8. 직원 평균 나이를 계산합니다.
select avg(age) from employees;
-- 9. 부서별 평균 나이를 계산합니다.
select d.name, avg(age) from employees e join departments d
on e.department_id = d.id
group by department_id;
-- 10. 부서 테이블에서 지역 컬럼의 두번째 글자가 e인 부서를 계산합니다.
select * from departments where location like '_e%';
-- 11. 부서 테이블에서 지역 컬럼에 공백이 들어가는 부서를 계산합니다.
select * from departments where location like '% %';
-- 12. 직원 테이블에서 이름 컬럼에서 마지막 글자가 n인 사원을 계산합니다.
select * from employees where name like '%_n';