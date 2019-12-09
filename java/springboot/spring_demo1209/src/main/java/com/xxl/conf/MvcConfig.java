package com.xxl.conf;

import com.xxl.interceptor.MyInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// mvc 配置
@Configuration //让Spring 扫描到
public class MvcConfig implements WebMvcConfigurer {

    // 添加自定义拦截器
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 拦截一切路径
        registry.addInterceptor(new MyInterceptor()).addPathPatterns("/**");
    }
}
