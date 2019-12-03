package com.xxl.dao;

import com.xxl.domain.AcountUser;
import com.xxl.domain.User;

import java.util.List;

// 用户 持久层接口
public interface Acount {
    /**
     * 查询所有账户 并且获取当前账户的用户信息
     * @return
     */
    List<com.xxl.domain.Acount> getAll();

    List<AcountUser> findAllInfo();
}
