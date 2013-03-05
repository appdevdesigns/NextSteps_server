# ************************************************************
# Sequel Pro SQL dump
# Version 4004
#
# http://www.sequelpro.com/
# http://code.google.com/p/sequel-pro/
#
# Host: localhost (MySQL 5.6.10)
# Database: ad_db
# Generation Time: 2013-03-04 18:34:05 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table nextsteps_contact
# ------------------------------------------------------------

DROP TABLE IF EXISTS `nextsteps_contact`;

CREATE TABLE `nextsteps_contact` (
  `contact_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `contact_guid` varchar(60) NOT NULL,
  `viewer_id` int(11) unsigned NOT NULL,
  `device_id` varchar(40) NOT NULL,
  `contact_recordId` int(11) unsigned DEFAULT NULL,
  `contact_firstName` text NOT NULL,
  `contact_lastName` text NOT NULL,
  `contact_nickname` text,
  `contact_campus` text NOT NULL,
  `year_id` int(11) NOT NULL DEFAULT '0',
  `contact_phone` text,
  `contact_phoneId` text,
  `contact_email` text,
  `contact_emailId` text,
  `contact_notes` text,
  `contact_preEv` date DEFAULT NULL,
  `contact_conversation` date DEFAULT NULL,
  `contact_Gpresentation` date DEFAULT NULL,
  `contact_decision` date DEFAULT NULL,
  `contact_finishedFU` date DEFAULT NULL,
  `contact_HSpresentation` date DEFAULT NULL,
  `contact_engaged` date DEFAULT NULL,
  `contact_ministering` date DEFAULT NULL,
  `contact_multiplying` date DEFAULT NULL,
  PRIMARY KEY (`contact_id`),
  UNIQUE KEY `contact_guid` (`contact_guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `contact_guid_trigger` BEFORE INSERT ON `nextsteps_contact` FOR EACH ROW BEGIN
SET NEW.contact_guid = CONCAT(NEW.contact_id, '/', NEW.device_id);
END */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;


# Dump of table nextsteps_group
# ------------------------------------------------------------

DROP TABLE IF EXISTS `nextsteps_group`;

CREATE TABLE `nextsteps_group` (
  `group_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `group_guid` varchar(60) NOT NULL,
  `viewer_id` int(11) unsigned NOT NULL,
  `device_id` varchar(40) NOT NULL,
  `group_name` text NOT NULL,
  `group_filter` text NOT NULL,
  PRIMARY KEY (`group_id`),
  UNIQUE KEY `group_guid` (`group_guid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DELIMITER ;;
/*!50003 SET SESSION SQL_MODE="NO_ENGINE_SUBSTITUTION" */;;
/*!50003 CREATE */ /*!50017 DEFINER=`root`@`localhost` */ /*!50003 TRIGGER `group_guid_trigger` BEFORE INSERT ON `nextsteps_group` FOR EACH ROW BEGIN
SET NEW.group_guid = CONCAT(NEW.group_id, '/', NEW.device_id);
END */;;
DELIMITER ;
/*!50003 SET SESSION SQL_MODE=@OLD_SQL_MODE */;


# Dump of table nextsteps_year_data
# ------------------------------------------------------------

DROP TABLE IF EXISTS `nextsteps_year_data`;

CREATE TABLE `nextsteps_year_data` (
  `year_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`year_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `nextsteps_year_data` WRITE;
/*!40000 ALTER TABLE `nextsteps_year_data` DISABLE KEYS */;

INSERT INTO `nextsteps_year_data` (`year_id`)
VALUES
	(1),
	(2),
	(3),
	(4),
	(5),
	(6),
	(7),
	(8);

/*!40000 ALTER TABLE `nextsteps_year_data` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table nextsteps_year_trans
# ------------------------------------------------------------

DROP TABLE IF EXISTS `nextsteps_year_trans`;

CREATE TABLE `nextsteps_year_trans` (
  `trans_id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `year_id` int(11) NOT NULL DEFAULT '0',
  `language_code` varchar(25) NOT NULL DEFAULT '',
  `year_label` text NOT NULL,
  PRIMARY KEY (`trans_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `nextsteps_year_trans` WRITE;
/*!40000 ALTER TABLE `nextsteps_year_trans` DISABLE KEYS */;

INSERT INTO `nextsteps_year_trans` (`trans_id`, `year_id`, `language_code`, `year_label`)
VALUES
	(1,1,'en','Unknown'),
	(2,2,'en','Freshman'),
	(3,3,'en','Sophmore'),
	(4,4,'en','Junior'),
	(5,5,'en','Senior'),
	(6,6,'en','Graduated'),
	(7,7,'en','Teacher'),
	(8,8,'en','Other');

/*!40000 ALTER TABLE `nextsteps_year_trans` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
