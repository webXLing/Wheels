package com.xxl.pojo;

import lombok.Data;
import tk.mybatis.mapper.annotation.KeySql;

import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;
import java.util.Date;

@Data
@Table(name= "tb_user")
public class User {
    @Id
    //自增主键  回显
    @KeySql(useGeneratedKeys = true)
    private Long id;
    private String userName;
    private String password;
    private Integer age;
    private Integer sex;
    private Date birthday;

    private String note;
    private Date created;
    private Date updated;

//    @Transient //不会同步到数据库


}
