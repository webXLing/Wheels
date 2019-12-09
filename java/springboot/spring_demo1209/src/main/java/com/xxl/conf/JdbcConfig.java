//package com.xxl.conf;
//
//import com.alibaba.druid.pool.DruidDataSource;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.boot.context.properties.EnableConfigurationProperties;
//import org.springframework.context.annotation.Bean;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.context.annotation.PropertySource;
//
//import javax.sql.DataSource;
//
////告诉spring 这是一个配置类
//@Configuration
////@PropertySource("classpath:application.properties")
//@EnableConfigurationProperties(JdbcPro.class)
//public class JdbcConfig {
//
////
////    @Value("${jdbc.url}")
////    String url;
////
////    @Value("${jdbc.driverClassName}")
////    String driverClassName;
////
////    @Value("${jdbc.username}")
////    String username;
////
////    @Value("${jdbc.password}")
////    String password;
//    @Bean
//    public DataSource dataSource(JdbcPro prop){
//        DruidDataSource druidDataSource = new DruidDataSource();
//
//        druidDataSource.setDriverClassName(prop.getDriverClassName());
//        druidDataSource.setUrl(prop.getUrl());
//        druidDataSource.setUsername(prop.getUsername());
//        druidDataSource.setPassword(prop.getPassword());
//
//        return druidDataSource;
//    }
//}
