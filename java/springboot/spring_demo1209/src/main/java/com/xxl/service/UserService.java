package com.xxl.service;


import com.xxl.mapper.UserMapper;
import com.xxl.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserService  {

    @Autowired
    private UserMapper userMapper; //其实就是dao

    public User getById(int id){
        return userMapper.selectByPrimaryKey(id);
    }

    @Transactional // 开启事务
    public void inserUser(User user){
        userMapper.insert(user);
    }
}
