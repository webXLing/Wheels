package com.example.demo.demo2.controler;


import com.example.demo.demo2.pojo.User;
import org.apache.ibatis.annotations.ResultMap;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("getuser")
public class UserCon {
    @Autowired
    private RestTemplate restTemplate;

    @GetMapping
    public User getMap(){
        return restTemplate.getForObject("http://localhost:8087/user/13",User.class);
    }
}
