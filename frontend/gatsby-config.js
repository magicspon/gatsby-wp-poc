const { plugins } = require('./postcss.config')
require('dotenv').config()

module.exports = {
	siteMetadata: {
		title: 'Gatsby CrafWPt'
	},
	plugins: [
		'gatsby-plugin-react-helmet-async',

		{
			resolve: `gatsby-source-wordpress-experimental`,
			options: {
				url: process.env.WPGRAPHQL_URL || 'http://wpgatsby.test/graphql',
				schema: {
					// Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
					typePrefix: `Wp`
				},
				develop: {
					// caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
					hardCacheMediaFiles: true
				},
				type: {
					Post: {
						limit:
							process.env.NODE_ENV === `development`
								? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
								  50
								: // and we don't actually need more than 5000 in production for this particular site
								  5000
					}
				}
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,

		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#345DEE`,
				showSpinner: false
			}
		},

		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: plugins
			}
		}
	]
}
