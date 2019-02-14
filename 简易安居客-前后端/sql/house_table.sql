/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50723
 Source Host           : localhost:8889
 Source Schema         : anjuke

 Target Server Type    : MySQL
 Target Server Version : 50723
 File Encoding         : 65001

 Date: 14/02/2019 19:16:06
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for house_table
-- ----------------------------
DROP TABLE IF EXISTS `house_table`;
CREATE TABLE `house_table` (
  `ID` varchar(32) NOT NULL,
  `admin_ID` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `sub_title` varchar(255) DEFAULT NULL,
  `position_main` varchar(255) DEFAULT NULL,
  `position_second` varchar(255) DEFAULT NULL,
  `ave_price` int(11) DEFAULT NULL,
  `area_min` smallint(6) DEFAULT NULL,
  `area_max` smallint(6) DEFAULT NULL,
  `tel` varchar(16) DEFAULT NULL,
  `sale_time` int(11) DEFAULT NULL,
  `submit_time` int(11) DEFAULT NULL,
  `building_type` varchar(32) DEFAULT NULL,
  `main_img_path` varchar(255) DEFAULT NULL,
  `main_img_real_path` varchar(255) DEFAULT NULL,
  `img_paths` text,
  `img_real_paths` text,
  `property_types` text,
  `property_imgs_paths` text,
  `property_img_real_paths` text,
  `location` varchar(32) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of house_table
-- ----------------------------
BEGIN;
INSERT INTO `house_table` VALUES ('16cc957980af4886911360e84e1b1090', '2ae816e7688f4afe859ba3f89cfe53f2', 'aaa改133', '13幢即将开售', '323', '天通苑', 44444, 34, 433, '17858804084', 1546876800, 1548518400, '家用', '118a8116a842c29735fbd81c25acb5bb', 'upload/118a8116a842c29735fbd81c25acb5bb', 'ad91cb263634f0da94cdffe47bbef822', 'upload/ad91cb263634f0da94cdffe47bbef822', '两室一厅', 'eb382907166f822052fb83e1862db543', 'upload/eb382907166f822052fb83e1862db543', '120.539181,31.27663');
INSERT INTO `house_table` VALUES ('2ac1e08602ba4e8f82897bc8380b5a82', '2ae816e7688f4afe859ba3f89cfe53f2', '天通苑1区u43', '23幢即将开售', '北三环', '天通苑', 23222, 90, 120, '17858804084', 1547481600, 1550851200, '家用', 'b16f498e4ba4f96b9469714d8bc344ae', 'upload/b16f498e4ba4f96b9469714d8bc344ae', 'b7e7e04fcd44a93e4eb8ef6c0e2c2057,28a9de7e9c2d82dd2a8674890d9238eb,c95b8c5d1233e3b140b2e2e34a7bc741', 'upload/b7e7e04fcd44a93e4eb8ef6c0e2c2057,upload/28a9de7e9c2d82dd2a8674890d9238eb,upload/c95b8c5d1233e3b140b2e2e34a7bc741', '两室一厅', '9be8a2ac756c3de220cc81ae548752fc', 'upload/9be8a2ac756c3de220cc81ae548752fc', NULL);
INSERT INTO `house_table` VALUES ('3634638d2b3f4026995a20c5b37b2ddc', '2ae816e7688f4afe859ba3f89cfe53f2', '天通苑1区abc', '23幢即将开售', '北三环', '天通苑', 23223, 32, 321, '17858804084', 1550073600, 1550851200, '别墅', '3151c5b5eb092e0b74b60358a783e92e', 'upload/3151c5b5eb092e0b74b60358a783e92e', '1d5f3093c6577262d5f7480db0609124', 'upload/1d5f3093c6577262d5f7480db0609124', '两室一厅', 'd1b5a8369857077f33c1c79e8f1a70e9', 'upload/d1b5a8369857077f33c1c79e8f1a70e9', NULL);
INSERT INTO `house_table` VALUES ('7cb814cabcdc4cdeb7bcb1dceb26beae', '2ae816e7688f4afe859ba3f89cfe53f2', '测试', '23幢即将开售', '北三环', '天通苑', 321233, 21312, 32, '321', 1548691200, 1549468800, '家用', '72aa5fd1a9d8a337454241e1b7714396.jpg', 'upload/72aa5fd1a9d8a337454241e1b7714396', '35be62ecc33d2d311dcf3b422251a3f0.jpg', 'upload/35be62ecc33d2d311dcf3b422251a3f0', '两室一厅', '4c7922aae187447fb37119d6829aabc8.jpg', 'upload/4c7922aae187447fb37119d6829aabc8', NULL);
INSERT INTO `house_table` VALUES ('a2c044625afd4635b39b94864e13047e', '2ae816e7688f4afe859ba3f89cfe53f2', '西河村', '13幢即将开售', '石浦镇', '新鹤村', 66666, 232, 333, '3243242', 1550073600, 1550073600, '家用', 'd900fd83d88237b8d105177bed6656b2', 'upload/d900fd83d88237b8d105177bed6656b2', '8b5c11581baa9730383327e553abdb68,bd7fb07f00f280c48557ee99e41db0a9', 'upload/8b5c11581baa9730383327e553abdb68,upload/bd7fb07f00f280c48557ee99e41db0a9', '两室一厅', '33c4efabdb2b989fb1d88960fc0c134f', 'upload/33c4efabdb2b989fb1d88960fc0c134f', NULL);
INSERT INTO `house_table` VALUES ('a3ff29262d88410787723529a429c759', '2ae816e7688f4afe859ba3f89cfe53f2', '宝地佘山1号', '松江人气榜第1名', ' 松江 泗泾', '嘉松南路与泗凤路交汇处', 41000, 90, 125, '400 019 1382 ', 1546272000, 1577721600, '别墅', 'zhutu.jpg', '/Users/xl/Desktop/longRoad/nodeJs/2019-1-17/upload/zhutu.jpg', 'zi1.jpg,zi2.jpg,zi3.jpg,zi4.jpg', '/Users/xl/Desktop/longRoad/nodeJs/2019-1-17/upload/zi1.jpg,/Users/xl/Desktop/longRoad/nodeJs/2019-1-17/upload/zi2.jpg,/Users/xl/Desktop/longRoad/nodeJs/2019-1-17/upload/zi3.jpg,/Users/xl/Desktop/longRoad/nodeJs/2019-1-17/upload/zi4.jpg', 'Q户型98㎡ 3室2厅1卫,Q户型125㎡ 3室2厅1卫', 'hx1.jpg,hx2.jpg', '/Users/xl/Desktop/longRoad/nodeJs/2019-1-17/upload/hx1.jpg,/Users/xl/Desktop/longRoad/nodeJs/2019-1-17/upload/hx2.jpg', NULL);
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
