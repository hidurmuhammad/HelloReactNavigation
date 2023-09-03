module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
		[
			"module:react-native-dotenv",
			{
				"safe": true,
				"allowUndefined": false
			}
		], 
    //'react-native-paper/babel',
		//'react-native-reanimated/plugin'
  ],
  plugins: [
      [
		'@babel/plugin-transform-react-jsx', {
        runtime: 'automatic',
      }
	],
    ],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
          },
        },
      ],
    ],
  plugins: [
      'react-native-paper/babel',
      'react-native-reanimated/plugin',
    ], 
  //   env: {
  //     production: {
  //        plugins: [
  //          'react-native-paper/babel'
  //        ],
  //     },
  //  }
};
