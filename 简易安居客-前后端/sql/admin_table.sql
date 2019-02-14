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

 Date: 14/02/2019 19:15:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin_table
-- ----------------------------
DROP TABLE IF EXISTS `admin_table`;
CREATE TABLE `admin_table` (
  `ID` varchar(32) NOT NULL,
  `username` varchar(32) NOT NULL,
  `password` varchar(32) NOT NULL,
  `b_house` bit(1) DEFAULT NULL,
  `b_ad` bit(1) DEFAULT NULL,
  `b_link` bit(1) DEFAULT NULL,
  `b_broker` bit(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin_table
-- ----------------------------
BEGIN;
INSERT INTO `admin_table` VALUES ('2ae816e7688f4afe859ba3f89cfe53f2', 'xvling', 'e10adc3949ba59abbe56e057f20f883e', b'1', b'0', b'1', b'0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
