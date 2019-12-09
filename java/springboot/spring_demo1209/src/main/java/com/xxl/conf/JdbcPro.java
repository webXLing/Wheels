package com.xxl.conf;


import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

//@ConfigurationProperties(prefix = "jdbc")
@Data
public class JdbcPro {
    String url;
    String driverClassName;
    String username;
    String password;

}
