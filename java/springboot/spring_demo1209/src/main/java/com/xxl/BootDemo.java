package com.xxl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import tk.mybatis.spring.annotation.MapperScan;

@SpringBootApplication
//注册扫描mapper包  使用通用mapper 的集成
@MapperScan("com.xxl.mapper")
public class BootDemo {
    public static void main(String[] args) {
        SpringApplication.run(BootDemo.class,args);
    }
}
