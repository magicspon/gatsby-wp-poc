/* eslint-disable compat/compat */
const path = require(`path`)
const glob = require('glob')
const hash = require('string-hash')
const merge = require('webpack-merge')

require('dotenv').config({
	path: `.env`
})


exports.onCreateWebpackConfig = ({ actions, stage, getConfig, rules }) => {
	const prevConfig = getConfig()
	const imgsRule = rules.images()

	prevConfig.module.rules = [
		// Remove the base url-loader images rule entirely
		...prevConfig.module.rules.filter(rule => {
			if (rule.test) {
				return rule.test.toString() !== imgsRule.test.toString()
			}
			return true
		}),
		// Put it back without SVG loading
		{
			...imgsRule,
			test: new RegExp(
				imgsRule.test
					.toString()
					.replace('svg|', '')
					.slice(1, -1)
			)
		}
	]

	actions.replaceWebpackConfig(
		merge(prevConfig, {
			output: {
				globalObject: 'this' // required for webworkers
			},

			resolve: {
				alias: {
					'@': path.resolve(__dirname, 'src')
				},
				mainFields: ['browser', 'module', 'main']
			},

			module: {
				rules: [
					{
						test: /\.(ttf|woff|woff2|eot)$/,
						use: 'file-loader?name=[name].[ext]',
						exclude: /icons/,
						include: path.resolve(__dirname, 'static')
					},
					{
						test: /\.svg$/,
						include: path.resolve(__dirname, 'src/icons'),
						use: ({ resource }) => [
							{
								loader: ['svg-react-loader'],
								options: {
									jsx: true,
									svgo: {
										plugins: [
											{
												cleanupIDs: {
													prefix: `svg${hash(
														path.relative(__dirname, resource)
													)}`
												}
											}
										]
									}
								}
							}
						]
					}
				]
			}
		})
	)

}
