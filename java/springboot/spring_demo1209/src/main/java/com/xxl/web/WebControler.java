package com.xxl.web;

import com.xxl.pojo.User;
import com.xxl.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.sql.DataSource;

@RestController
@RequestMapping("user")
public class WebControler {
    @Autowired UserService userService;

    @GetMapping("{id}")
    public User Hello(@PathVariable("id") int id) {
         System.out.println("nihao");
         System.out.println(userService.getById(id));
         return userService.getById(id);
    }


    @GetMapping("nihao1")
    @ResponseBody
    public String Hello1() {
        return "你好啊1";
    }

//    @GetMapping("user/login")
//    @PostMapping("user/login")
    @RequestMapping("user/login")
    @ResponseBody
    public String userLogin() {
        return "你好啊";
    }
}
