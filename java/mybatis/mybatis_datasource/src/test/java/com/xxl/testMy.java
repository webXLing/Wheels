package com.xxl;


import com.xxl.dao.IUSerDao;
import com.xxl.domain.User;
import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import java.io.InputStream;
import java.util.Date;
import java.util.List;

//**测试
public class testMy {
    private InputStream resourceAsStream;
    private IUSerDao mapper1;
    private SqlSession sqlSession;

//    @Test
//    public void main(String[] args) throws Exception {
//        // 1.读取配置文件
//        InputStream resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
////        2.创建SqlssesionFactory 工厂
//        SqlSessionFactoryBuilder Builder = new SqlSessionFactoryBuilder();
//        SqlSessionFactory factory = Builder.build(resourceAsStream);
//
////        3.使用工厂 产生sqlssesion 对象
//        SqlSession sqlSession = factory.openSession();
////        4.使用sqlssesion 对象 产生dao 代理对象￿
//        IUSerDao mapper1 = sqlSession.getMapper(IUSerDao.class);
////        5.使用代理对象 执行方法
//        List<User> all = mapper1.findAll();
//        for (User user:
//                all) {
//            System.out.println(user);
//         }
////        6.释放资源
//        sqlSession.close();
//        resourceAsStream.close();
//
//     }

    /**
     * 初始化  在测试类之前执行
     * @throws Exception
     */
    @Before
     public void init() throws Exception{
         // 1.读取配置文件
        resourceAsStream = Resources.getResourceAsStream("SqlMapConfig.xml");
//        2.创建SqlssesionFactory 工厂
         SqlSessionFactoryBuilder Builder = new SqlSessionFactoryBuilder();
         SqlSessionFactory factory = Builder.build(resourceAsStream);

//        3.使用工厂 产生sqlssesion 对象
        sqlSession = factory.openSession();
//        4.使用sqlssesion 对象 产生dao 代理对象￿
        mapper1 = sqlSession.getMapper(IUSerDao.class);
     }

     @After // 在测试类执行后执行
     public void destroy() throws Exception{
         //        6.释放资源
         sqlSession.commit();
         sqlSession.close();
         resourceAsStream.close();
     }

    /**
     * 查询所有
     */
    @Test
    public void selectAll() {
//        5.使用代理对象 执行方法
        List<User> all = mapper1.findAll();
        for (User user:
                all) {
            System.out.println(user);
        }
     }

    /**
     * 添加 用户
     */
    @Test
     public void addUser(){
         User user = new User();
         user.setAddress("北京 last_insert_id");
         user.setSex("男");
         user.setUsername("xl");
         user.setBirthday(new Date());
        System.out.println(user);
         mapper1.addUser(user);
        System.out.println(user);
     }

    /**
     * 通过id 查询用户信息
     * @return
     */
    @Test
    public void findUserByUser(){
        User userByUser = mapper1.findUserByUser(52);
        System.out.println(userByUser);
    }


    /**
     * 查询用户 以及账户
     * @return
     */
    @Test
    public void getacount(){
        List<User> all = mapper1.findAll();
        for (User user : all) {
            System.out.println(user);
        }
    }

}
