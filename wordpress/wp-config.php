<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wpgatsby' );

/** MySQL database username */
define( 'DB_USER', 'homestead' );

/** MySQL database password */
define( 'DB_PASSWORD', 'secret' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '69sEYcv96N5V?E+@~MKD^;8F>HV-FeS#-SrmJR_OIR/7!v)r323`}q]ECWx=jhTd' );
define( 'SECURE_AUTH_KEY',  's3n!,(>[w$Y-4pFW`dPeliNBOkAX/6sr KoU).o!a(>+e(EFEeT+;9` 3fo+$_v%' );
define( 'LOGGED_IN_KEY',    '2amRf9aB/!](qPgQ:WFzUmiV%{;5~3)[9^K[SN&{OH=ePC|O)ALGC0bhL*w&<r*%' );
define( 'NONCE_KEY',        '}5E.:.okR`b1^GzJ#^/0/EQT%d32NN84m,$)Wz#M~&s3R1w=38LqvZX3ZU|*JF+?' );
define( 'AUTH_SALT',        '#!s(h/ISGWTVymV;D@6vD!gRQ6Zmym6f/Vh_R1aJTp^uR>Y$(=_,y.QBa F5W%4V' );
define( 'SECURE_AUTH_SALT', '-~s1I_`4LK^XOE3oyDAk.lB/B$<a#!^b8m41 H4D!?[%73|cRf)99FCn/pi+@%Vb' );
define( 'LOGGED_IN_SALT',   'vDk44t(i:5<4SqaWDN;IK;n6!s`}iZIB@H^@GEW=8URZnozly[OoEm^k5x4RQctn' );
define( 'NONCE_SALT',       's}=Gm}5qTcq[T[gwm;.AM^VVWZn:iI,$EsK/e`6g{66/OWAc7YA]*}Z5#bt$H3Pr' );




/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

define('JWT_AUTH_SECRET_KEY', 'lGJl+kO{Zd+]9?.RC,N II|gUqm9=y)19l3vM:Q$1BsUAA9{L4E?}EQ Do6nIu;Z');
define('JWT_AUTH_CORS_ENABLE', true);

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
