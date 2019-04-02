-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2018 a las 13:24:21
-- Versión del servidor: 10.1.29-MariaDB
-- Versión de PHP: 7.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `meteo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_mast_meteo_stations`
--

CREATE TABLE `tbl_mast_meteo_stations` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `longitude` double NOT NULL,
  `latitude` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_mast_meteo_stations`
--

INSERT INTO `tbl_mast_meteo_stations` (`id`, `name`, `longitude`, `latitude`) VALUES
(1, 'Meteo 1', 41.646749, -0.586661),
(2, 'Meteo 2', 40.168905, -2.826892),
(3, 'Meteo 3', 41.794352, -6.34098),
(4, 'Meteo 4', 41.974296, 2.026942);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_mast_meteo_variables`
--

CREATE TABLE `tbl_mast_meteo_variables` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `unit` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `tbl_mast_meteo_variables`
--

INSERT INTO `tbl_mast_meteo_variables` (`id`, `name`, `unit`) VALUES
(1, 'Temperature', 'ºC'),
(2, 'Wind', 'km/h'),
(3, 'Precipitation', 'mm'),
(4, 'Presure', 'hPa'),
(5, 'Humidity', '%');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_mast_meteo_stations`
--
ALTER TABLE `tbl_mast_meteo_stations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `tbl_mast_meteo_variables`
--
ALTER TABLE `tbl_mast_meteo_variables`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_mast_meteo_stations`
--
ALTER TABLE `tbl_mast_meteo_stations`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tbl_mast_meteo_variables`
--
ALTER TABLE `tbl_mast_meteo_variables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
