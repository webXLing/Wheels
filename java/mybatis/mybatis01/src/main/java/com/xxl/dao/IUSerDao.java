package com.xxl.dao;

import com.xxl.domain.User;

import java.util.List;

// 用户 持久层接口
public interface IUSerDao {
    /**
     * 查询所有用户
     * @return
     */
    List<User> findAll();

    void addUser(User user);
    void updateUser(User user);

    void delete(Integer id);

    User findUserByUser(Integer id);

    List<User> findByName(String name);

    int selectTotal();
}
