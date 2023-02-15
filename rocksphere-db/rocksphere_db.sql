-- phpMyAdmin SQL Dump
-- version 4.8.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:30804
-- Tiempo de generación: 14-02-2023 a las 23:48:40
-- Versión del servidor: 5.7.19-log
-- Versión de PHP: 5.6.14

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `rocksphere_db`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `albums`
--

CREATE TABLE `albums` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `company` varchar(20) NOT NULL,
  `year` smallint(4) NOT NULL,
  `price` int(10) NOT NULL,
  `imagen` varchar(100) NOT NULL,
  `idGenre` int(11) NOT NULL,
  `idArtist` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `albums`
--

INSERT INTO `albums` (`id`, `title`, `company`, `year`, `price`, `imagen`, `idGenre`, `idArtist`) VALUES
(1, '13', 'Elektra Records', 1969, 8990, '13-the-doors.jpg', 1, 3),
(2, 'Adriana Daleeeeeee', 'Columbia Records', 1969, 10000, 'imagen-1676257428898.jpg', 2, 14),
(3, 'Born in the USA', 'Columbia Records', 1984, 7990, 'born-bruce-springsteen.jpg', 1, 6),
(4, 'Brain Salad Surgery', 'Atlantic Records', 1973, 8590, 'brain-salad-emerson-lake-palmer.jpg', 6, 5),
(5, 'Dark Side of the Moon', 'AbbeyRoad Records', 1973, 8690, 'darksideportada.jpg', 1, 2),
(6, 'Disraeli Gears', 'Atlantic Records', 1967, 6990, 'disraeli-cream.jpg', 1, 9),
(7, 'England\'s Newest', 'London Records', 1964, 11500, 'eng-the-rolling-stones.jpg', 1, 4),
(8, 'No puedo creerlo!!!!!!', 'Pude!!!!!', 2023, 50000, 'imagen-1676258961054.jpg', 2, 10),
(9, 'Love', 'AbbeyRoad Records', 2006, 10990, 'love-the-beatles.jpg', 1, 1),
(10, 'A night at the Opera', 'Emi Records', 1975, 10990, 'opera-queen.jpg', 1, 13),
(11, 'A day at the Races', 'Elektra Records', 1976, 7990, 'races-queen.jpg', 1, 13),
(12, 'Sticky Fingers', 'Rolling Stones Recor', 1979, 10990, 'sticky-fingers-the-rolling-stones.jpg', 1, 4),
(13, 'The Razors Edge', 'Atlantic Records', 1979, 9990, 'the-razors-ac-dc.jpg', 1, 12),
(14, 'The Wall', 'Columbia Records', 1979, 11590, 'the-wall-pink-floyd.jpg', 1, 2),
(15, 'Tommy', 'Sound Lab records', 1969, 11990, 'tommy-the-who.jpg', 6, 14),
(17, 'Wish You Were Here', 'Columbia Records', 1975, 10990, 'wish-pink-floyd.jpg', 1, 2),
(20, 'Abbey Road', 'Columbia Records', 1969, 9990, 'imagen-1676176316968.jpg', 2, 14),
(21, 'Abbey Road modificado', 'Columbia Records', 1969, 10, 'imagen-1676256252154.jpg', 1, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `artists`
--

CREATE TABLE `artists` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `idGenre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `artists`
--

INSERT INTO `artists` (`id`, `name`, `idGenre`) VALUES
(1, 'The Beatles', 3),
(2, 'Pink Floyd', 1),
(3, 'The Doors', 1),
(4, 'Rolling Stones', 1),
(5, 'Emerson Lake and Palmer', 6),
(6, 'Bruce Springsteen', 1),
(7, 'Eric Clapton', 1),
(8, 'Fletwood Mac', 1),
(9, 'Cream', 1),
(10, 'David Bowie', 1),
(11, 'Roxy Music', 2),
(12, 'Ac Dc', 7),
(13, 'Queen', 1),
(14, 'The Who', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detailorders`
--

CREATE TABLE `detailorders` (
  `id` int(11) NOT NULL,
  `quantity` int(10) NOT NULL,
  `total` int(11) NOT NULL,
  `idOrder` int(11) NOT NULL,
  `idAlbum` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `genres`
--

CREATE TABLE `genres` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `genres`
--

INSERT INTO `genres` (`id`, `name`) VALUES
(1, 'Rock'),
(2, 'Blues'),
(3, 'Pop'),
(4, 'Jazz'),
(5, 'HipHop'),
(6, 'Rock Sinfónico'),
(7, 'Heavy Metal'),
(8, 'Hard Rock');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL,
  `payment` varchar(20) NOT NULL,
  `total` int(10) NOT NULL,
  `idUser` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `contrasena` varchar(45) NOT NULL,
  `confContr` varchar(45) NOT NULL,
  `address` varchar(45) NOT NULL,
  `idGenre` int(10) NOT NULL,
  `imagen` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `contrasena`, `confContr`, `address`, `idGenre`, `imagen`) VALUES
(1, 'Avatar lunes 13', 'adri@gmail.com', 'adriadri', 'adriadri', 'Mendoza', 2, 'imagen-1676260444362.jpg'),
(2, 'Bianca Fuentes', 'bianca@gmail.com', 'bianqui', 'bianqui', 'San Juan', 2, 'imagen2.jpg'),
(3, 'Maria Solange', 'maria@gmail.com', 'validamendte', 'validamente', 'Mendoza', 5, 'imagen-1676097125936.jpg'),
(4, 'Jorge Samarian', 'adriana@gmail.com', 'adriana321', 'adriana321', 'San Luis', 2, 'imagen-1676176427314.jpg'),
(5, 'Tomas Victor', 'pepe@pepe.com.ar', 'pepito', 'peito', 'Neuquen', 2, 'imagen-1676176546872.jpg'),
(6, 'Emilio Francella', 'emi@gmail.com', 'emilio', 'emilio', 'Cordoba', 1, 'imagen-1676217706000.jpg'),
(7, 'Andrea Lourdes', 'bianca@gmail.com', 'bianqui', 'buianqui', 'Buenos Aires', 6, 'imagen-1676218221188.jpg'),
(8, 'Lucas Lucario', 'lucas@gmail.com', 'luchas123', 'lucas123', 'Mendoza', 7, 'imagen-1676224055415.jpg'),
(9, 'Ismael Serrao', 'isma@gmail.com', 'sorte123', 'sorte123', 'San Luis', 4, 'imagen-1676224774591.jpg'),
(10, 'Maria', 'maria@yahoo.com.ar', 'validamendte', 'validamente', '0', 3, 'imagen-1676243347415.jpg'),
(11, 'Adriana Mendez', 'adrianita@gmail.com', 'adriadri', 'adriadri', 'Mendoza', 2, '13-the-doors.jpg'),
(12, 'Alexis Heredia', 'alexis@gmail.com', '$2a$10$BHqHHjVUZl1v5yDQCN.hxeJnvzzYmrUouNztHb', '$2a$10$Ct9oxGA3SWd.7IgK6ctLhu7m6mOo9eD1ARAOff', 'parana 2756', 2, 'imagen-1676346409407.jpg'),
(13, 'Luis Castelat', 'lcastelat@gmail.com', '$2a$10$fv0HHzRA/kmyxPbWfo4hue.D0TGXOyhKZrROhA', '$2a$10$nzlFM.iZ2pOdRMiHM7AlNeYHfgV9LN2SafTkkK', 'San Cristobal 1765', 7, 'imagen-1676347031453.jpg'),
(14, 'Natalia Profe', 'natalia@yahoo.com.ar', 'natalia123456', 'natalia123456', 'peru 1112', 1, 'imagen-1676423595874.jpg'),
(15, 'Martina Villegas', 'lcastelat@gmail.com', 'martina123', 'martina123', 'juan 123', 2, 'imagen-1676423765011.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `albums`
--
ALTER TABLE `albums`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_artist` (`idArtist`),
  ADD KEY `id_genre` (`idGenre`);

--
-- Indices de la tabla `artists`
--
ALTER TABLE `artists`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_genre` (`idGenre`);

--
-- Indices de la tabla `detailorders`
--
ALTER TABLE `detailorders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_order` (`idOrder`),
  ADD KEY `id_album` (`idAlbum`);

--
-- Indices de la tabla `genres`
--
ALTER TABLE `genres`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_user` (`idUser`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `users_id_genre_Id_foreign` (`idGenre`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `albums`
--
ALTER TABLE `albums`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `artists`
--
ALTER TABLE `artists`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `detailorders`
--
ALTER TABLE `detailorders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `genres`
--
ALTER TABLE `genres`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `albums`
--
ALTER TABLE `albums`
  ADD CONSTRAINT `albums_ibfk_1` FOREIGN KEY (`idArtist`) REFERENCES `artists` (`id`),
  ADD CONSTRAINT `albums_ibfk_2` FOREIGN KEY (`idGenre`) REFERENCES `genres` (`id`);

--
-- Filtros para la tabla `artists`
--
ALTER TABLE `artists`
  ADD CONSTRAINT `artists_ibfk_1` FOREIGN KEY (`idGenre`) REFERENCES `genres` (`id`);

--
-- Filtros para la tabla `detailorders`
--
ALTER TABLE `detailorders`
  ADD CONSTRAINT `detailorders_ibfk_1` FOREIGN KEY (`idOrder`) REFERENCES `orders` (`id`),
  ADD CONSTRAINT `detailorders_ibfk_2` FOREIGN KEY (`idAlbum`) REFERENCES `albums` (`id`);

--
-- Filtros para la tabla `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_id_genre_Id_foreign` FOREIGN KEY (`idGenre`) REFERENCES `genres` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
