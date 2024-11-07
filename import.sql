-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS `modulo_logistica` CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `modulo_logistica`;

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET latin1 COLLATE latin1_swedish_ci NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `email`(`email`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = latin1 COLLATE = latin1_swedish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (1, 'Alice Johnson', 'alice.johnson@example.com');
INSERT INTO `user` VALUES (2, 'Bob Smith', 'bob.smith@example.com');
INSERT INTO `user` VALUES (3, 'Charlie Brown', 'charlie.brown@example.com');
INSERT INTO `user` VALUES (4, 'Diana Prince', 'diana.prince@example.com');
INSERT INTO `user` VALUES (5, 'Ethan Hunt', 'ethan.hunt@example.com');

SET FOREIGN_KEY_CHECKS = 1;