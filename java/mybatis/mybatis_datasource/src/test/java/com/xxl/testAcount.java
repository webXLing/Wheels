package com.xxl;


import com.xxl.dao.Acount;
import com.xxl.dao.IUSerDao;
import com.xxl.domain.AcountUser;
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
public class testAcount {
    private InputStream resourceAsStream;
    private com.xxl.dao.Acount mapper1;
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
        mapper1 = sqlSession.getMapper(Acount.class);
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
        List<com.xxl.domain.Acount> all = mapper1.getAll();
        System.out.println(all);
        for (com.xxl.domain.Acount acount : all) {
            System.out.println(acount);
        }
     }



    /**
     * 查询所有  和 对应账户的用户信息
     */
    @Test
    public void findAllAndInfo() {
//        5.使用代理对象 执行方法
        List<AcountUser> allInfo = mapper1.findAllInfo();
        for (AcountUser acountUser : allInfo) {
            System.out.println(acountUser);
        }
    }


}
