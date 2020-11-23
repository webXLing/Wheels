-- SELECT  username, age 年龄, math, math +IFNULL(age,0) AS 总分 FROM user_table;

-- 年龄不等于 5
-- SELECT * FROM user_table WHERE age!=5;
-- SELECT * FROM user_table WHERE age <> 5; 

-- 年龄在2 - 10 之间
-- SELECT * FROM user_table WHERE age  BETWEEN 2 AND 10;

-- 查询年龄为 2 10 0
-- SELECT * FROM user_table WHERE age IN (2,10,0); 

-- 查询 age 为Null 
-- SELECT * FROM user_table WHERE age IS NULL;

-- 不为null
-- SELECT * FROM user_table WHERE age IS NOT NULL;

-- like 模糊查询  _单个任意字符  %多个任意字符
-- SELECT * FROM user_table WHERE username LIKE "_l%"; 

-- 1.DQL 查询语句
-- 1，排序查询
-- ** ORDER BY 字段1 方式1 , 字段2 方式2 
-- SELECT * FROM user_table ORDER BY age ; -- 默认升序 ASC
-- SELECT * FROM user_table ORDER BY age DESC; -- 降序 
-- SELECT * FROM user_table ORDER BY age DESC,math ASC;


-- 2,聚合函数  排除数据为null；
-- * 将一列数据作为一组  进行纵向计算
-- 1.count 计算个数
-- ****SELECT COUNT(age) AS 总数 FROM user_table; 
-- SELECT COUNT(IFNULL(age,0)) AS 总数 FROM user_table;  -- 可以用 IFNULL 解决 或者直接用主键查 
-- 2.max 最大值
-- SELECT MAX(age) FROM user_table  ;
-- 3.min 最小值
-- SELECT MIN(age) FROM user_table  ;
-- 4.agv 平均值
-- SELECT AVG(age) FROM user_table  ;
-- 5.sum 总和
-- SELECT SUM(age) FROM user_table  ;
-- 5.查询年龄最大的 学生信息
-- select * from user_table where age=(select max(age) from user_table);



-- 3，分组查询 
-- *** 按照性别分组 查询男女同学的人数 以及平均分
-- SELECT  sex , AVG(math),COUNT(id) FROM user_table GROUP BY sex;
-- *** 按照性别分组 查询男女同学的人数 以及平均分  分数在大于0分的才进行分组  分组后的结果 只显示每组数量大于2的组
-- SELECT sex, AVG(math), COUNT(id) FROM user_table WHERE math >= 0 GROU P  BY sex HAVING COUNT(id)>2;
--  
-- 4，分页查询 LIMIT 是mysql 的方言
-- SELECT * FROM user_table LIMIT 0,3;

-- 2.约束 对表中的数据 完整性 有效性
-- ··· 分类
-- ····1.主键约束
-- ····2.非空约束
-- ····3.唯一约束 可以为NULL
-- CREATE TABLE usr(
-- id INT,
-- phone_num VARCHAR(20) UNIQUE -- 不能重复 
-- )

-- 删除唯一索引
-- ALTER TABLE usr DROP INDEX phone_num;
-- 在创建表之后再添加唯一索引 （不能重复）
-- ALTER TABLE usr MODIFY phone_num VARCHAR(20) UNIQUE;


-- ····3.外键约束 :foreign key
-- 主表 部门表
-- CREATE TABLE department(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- -- 	AUTO_INCREMENT
-- 	dep_name VARCHAR(20),
-- 	dep_local VARCHAR(20)
-- );
-- 
-- -- 从表 员工表
-- CREATE TABLE employee(
-- 	id INT PRIMARY KEY AUTO_INCREMENT,
-- 	name VARCHAR(20),
-- 	age INT,
-- 	dep_id INT, -- 外键 对应主表
-- 	CONSTRAINT emp_dep FOREIGN KEY (dep_id) REFERENCES  department(id)
-- );
-- 
-- INSERT INTO department VALUES(NULL,"技术部","宁波市"),(NULL,"销售部","广州市");
-- 
-- INSERT INTO employee (name,age,dep_id) VALUES('xl',23,1);
-- INSERT INTO employee (name,age,dep_id) VALUES('小红',22,1);
-- INSERT INTO employee (name,age,dep_id) VALUES('小明',23,1);
-- 
-- INSERT INTO employee (name,age,dep_id) VALUES('小雷',233,2);
-- INSERT INTO employee (name,age,dep_id) VALUES('小建',24,2);
-- INSERT INTO employee (name,age,dep_id) VALUES('小高',26,2);

-- 删除外键
-- ALTER TABLE employee DROP FOREIGN KEY emp_dep;

-- 在表创建后 添加外键
-- ALTER TABLE employee ADD CONSTRAINT emp_dep FOREIGN KEY (dep_id) REFERENCES  department(id) ON UPDATE CASCADE ON DELETE CASCADE;

-- 级联操作 在添加外键的时候 设置级联更新 级联删除
-- ALTER TABLE employee ADD CONSTRAINT emp_dep FOREIGN KEY (dep_id) REFERENCES  department(id) ON UPDATE CASCADE ON DELETE CASCADE;
-- 3.多表直接的关系

-- 4.范式

-- 5.数据库的备份和还原
-- 命令行数据库的备份和还原

-- mysqldump -uroot -p123456 test > /Users/xl/longRoad/MyGit/Keep-Learning/Mysql/save.sql 数据库备份

-- mysql -uroot -p123456 登录

--  drop database test;   删除数据库
-- create database test;  创建数据库
-- use test; 使用数据库

-- source /Users/xl/longRoad/MyGit/Keep-Learning/Mysql/save.sql  还原sql


-- *多表查询*
-- SELECT * FROM employee,department ;
-- 笛卡尔积 A集合有3条数据 B集合有2条数据 总共有3*2 6条数据
-- 		1.内连接查询
-- 					1.隐式内连接
-- 查询所有员工 以及其对应的 部门信息 
-- SELECT * FROM employee,department WHERE employee.dep_id = department.id;
-- SELECT 
-- t1.name,
-- t2.dep_name,
-- t2.dep_local 
-- FROM 
-- employee t1 ,
-- department t2 
-- WHERE 
-- t1.dep_id = t2.id;
-- 					2.显示内连接  查询的是交集的部分
-- SELECT * FROM employee INNER JOIN department ON department .id = employee.dep_id;
-- 		2.外连接查询
-- 					1.左外链接  查询的左表的所有数据以及交集部分
--             SELECT * FROM 表1 LEFT JOIN 表2 ON 条件	 
--             显示所有员工信息  如果有部门信息 则显示部门信息
-- 						SELECT * FROM employee LEFT JOIN department ON employee.dep_id = department.id;
-- 					2.右外链接  查询右标的所有数据 以及交集部分
-- 						SELECT * FROM department RIGHT JOIN employee ON employee.dep_id = department.id;
-- 		3.子查询 查询中嵌套子查询  

-- 		SELECT * FROM employee WHERE employee.age = (SELECT MAX(age) FROM employee);
-- 查询 员工在 平均年龄下的 所有员工
--    SELECT * FROM employee WHERE employee.age <(SELECT AVG(age) FROM employee); 
-- 查询销售部和 技术部里面的所有  员工
-- SELECT * FROM employee WHERE employee.dep_id IN (SELECT id FROM department WHERE department.id=2 OR department.id=4);


-- --事务
-- 开启事务
-- START TRANSACTION;

-- -- 提交
-- COMMIT;

-- -- 回滚
-- ROLLBACK;
-- mysql 是自动提交事务的
-- 每一条 增删改 语句都会自动提交事务

-- SELECT @@ autocommit =0 ; 0 手动提交

--  事务的四大特征
--  
--  1.原子性 不可分割的最小操作单位 要么同时成功要么同时 失败
--  2.持久性 一旦提交 或者 回滚 数据库将会持久化的保存数据 
--  3.隔离性 多个事务之间 相互独立
--  4.一致性 事务操作前后数据总量不变

-- 事务的隔离级别 
-- -- 多个事务之间是相互独立的 但是如果多个事务操作同一批数据 则会引发一些问题 设置不同的隔离级别 就可以解决

-- DCL  管理用户和授权
-- 查询用户
-- use mysql; 
-- SELECT * FROM USER;

-- -- 创建用户
-- CREATE USER '用户名'@'主机名' IDENTIFIED BY '密码';
-- CREATE USER 'test1105'@'localhost' IDENTIFIED BY '123456';
-- CREATE USER 'test'@'localhost' IDENTIFIED BY '123456';

-- -- 删除用户
-- DROP USER 'test1105'@'localhost';

-- -- 修改用户密码 

-- UPDATE USER SET PASSWORD=PASSWORD('123') WHERE USER = 'test';

