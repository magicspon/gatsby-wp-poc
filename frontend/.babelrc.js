module.exports = api => {
	const env = api.cache(() => process.env.NODE_ENV)
	const isTest = env === 'test' || process.env.BABEL_ENV === 'test'
	const isStoryBook = process.env.STORYBOOK_ENV
	const isTestBbuild = process.env.TEST_BUILD
	const plugins = []


	if (isStoryBook) {
		plugins.push('@babel/plugin-transform-modules-commonjs')
	}

	if (!isTest && env === 'production' && !isTestBbuild) {
		plugins.push([
			'babel-plugin-jsx-remove-data-test-id',
			{
				attributes: ['data-test-id', 'data-testid']
			}
		])
	}

	if (isTest) {
		plugins.push(
			[
				'module-resolver',
				{
					root: ['./'],
					alias: {
						'@': './src'
					}
				}
			],
			'require-context-hook'
		)
	}

	return {
		presets: [
			[
				isStoryBook || isTest ? '@babel/preset-env' : 'babel-preset-gatsby',
				{
					modules: isTest ? 'commonjs' : false
				}
			],
			(isStoryBook || isTest) && '@babel/preset-react'
		].filter(Boolean),
		plugins
	}
}
