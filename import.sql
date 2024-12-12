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

-- Espaço Fisico

CREATE TABLE Espaco (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT,
    tipo_espaco VARCHAR(50) NOT NULL,
    capacidade INT NOT NULL,
    recursos_disponiveis TEXT,
    data_cadastro DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_procedimento DATETIME,
    situacao ENUM('ativo', 'inativo', 'em_manutencao') NOT NULL DEFAULT 'ativo',
    localizacao VARCHAR(100),
    notas_adicionais TEXT,
    
    -- Índices para melhorar performance em buscas frequentes
    INDEX idx_nome (nome),
    INDEX idx_tipo_espaco (tipo_espaco),
    INDEX idx_situacao (situacao)
);


CREATE TABLE Reserva (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome_evento VARCHAR(150) NOT NULL,
    tipo_evento VARCHAR(50) NOT NULL,
    responsavel_nome VARCHAR(100) NOT NULL,
    responsavel_contato VARCHAR(100),
    data_reserva DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_evento DATE NOT NULL,
    periodo ENUM('manha', 'tarde', 'noite', 'integral') NOT NULL,
    turno ENUM('primeiro', 'segundo', 'terceiro') NOT NULL,
    horario_inicio TIME NOT NULL,
    horario_termino TIME NOT NULL,
    total_participantes INT NOT NULL,
    situacao_reserva ENUM('confirmada', 'cancelada', 'pendente') NOT NULL DEFAULT 'pendente',
    espaco_id INT NOT NULL,
    
    -- Chave estrangeira para relacionar com a tabela de Espaço
    FOREIGN KEY (espaco_id) REFERENCES Espaco(id) ON DELETE RESTRICT ON UPDATE CASCADE,
    
    -- Índices para melhorar performance
    INDEX idx_data_evento (data_evento),
    INDEX idx_situacao_reserva (situacao_reserva),
    INDEX idx_responsavel (responsavel_nome)
);