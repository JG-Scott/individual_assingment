-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 20, 2021 at 11:29 PM
-- Server version: 5.7.33
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `johnnysc_individual_assignment_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `Quotes`
--

CREATE TABLE `Quotes` (
  `ID` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Quote` varchar(500) NOT NULL,
  `Identifier` varchar(10) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Quotes`
--

INSERT INTO `Quotes` (`ID`, `Name`, `Quote`, `Identifier`) VALUES
(10, 'Michael Scott', 'Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me.', 'd03efac9'),
(8, 'Gandalf', 'All we have to decide is what to do with the time that is given us.', 'e04e59e6');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Quotes`
--
ALTER TABLE `Quotes`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Quotes`
--
ALTER TABLE `Quotes`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
