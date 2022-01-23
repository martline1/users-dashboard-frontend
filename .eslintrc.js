module.exports = {
	extends : [
		"eslint:recommended",
		"plugin:react/recommended",
	],
	env : {
		es6     : true,
		node    : true,
		browser : true,
	},
	parserOptions : {
		ecmaVersion       : 9,
		sourceType        : "module",
		requireConfigFile : false,
		ecmaFeatures      : {
			jsx     : true,
			modules : true,

			experimentalObjectRestSpread : true,
		},
	},
	parser  : "@babel/eslint-parser",
	plugins : [
		"react",
		"import",
		"react-hooks",
		"align-import",
		"unused-imports",
	],
	ignorePatterns : ["./src/material-kit-react/**"],
	rules          : {
		indent : [
			"error",
			"tab",
			{
				SwitchCase   : 1,
				// Comment next line when problem is fixed
				ignoredNodes : ["TemplateLiteral"],
			},
		],
		"no-mixed-spaces-and-tabs" : [
			"error",
			"smart-tabs",
		],
		quotes : [
			"error",
			"double",
		],
		semi : [
			"error",
			"always",
		],
		"no-unused-vars" : [
			"warn",
			{
				args : "none",
			},
		],
		"space-before-function-paren" : [
			"error",
			{
				anonymous  : "never",
				named      : "never",
				asyncArrow : "always",
			},
		],
		"comma-dangle" : [
			"error",
			{
				arrays    : "always-multiline",
				objects   : "always-multiline",
				imports   : "always-multiline",
				exports   : "always-multiline",
				functions : "ignore",
			},
		],
		"key-spacing" : [
			"error",
			{
				singleLine : {
					beforeColon : true,
					afterColon  : true,
				},
				multiLine : {
					align       : "colon",
					beforeColon : true,
					afterColon  : true,
				},
			},
		],
		"no-trailing-spaces" : "error",
		"eol-last"           : [
			"error",
			"always",
		],
		"keyword-spacing"     : "error",
		"space-before-blocks" : "error",
		"comma-spacing"       : [
			"error",
			{
				before : false,
				after  : true,
			},
		],
		eqeqeq                             : "error",
		"no-var"                           : "error",
		"prefer-const"                     : "error",
		"no-const-assign"                  : "error",
		"no-invalid-this"                  : "error",
		"no-debugger"                      : process.env.NODE_ENV === "production" ? "error" : "off",
		"react/display-name"               : "off",
		"no-inner-declarations"            : "off",
		"react/prop-types"                 : "off",
		"react/react-in-jsx-scope"         : "off",
		"align-import/align-import"        : "error",
		"align-import/trim-import"         : "error",
		"unused-imports/no-unused-imports" : "warn",
		"no-case-declarations"             : "off",
		"react/no-unescaped-entities"      : "off",
		"no-multiple-empty-lines"          : ["error", { max : 2, maxEOF : 1 }],
		"no-duplicate-imports"             : "error",
		"no-loop-func"                     : "error",
		"import/extensions"                : [
			"error",
			{
				js   : "never",
				jsx  : "always",
				scss : "always",
				json : "always",
				png  : "always",
				jpg  : "always",
				svg  : "always",
				css  : "always",
			},
		],
		"import/no-extraneous-dependencies" : [
			"error",
			{
				devDependencies : true,
			},
		],
		"react/jsx-indent" : [
			1,
			"tab",
		],
		"react/jsx-indent-props" : [
			1,
			"tab",
		],
		"react/jsx-curly-newline" : [
			"error",
			{
				multiline  : "consistent",
				singleline : "consistent",
			},
		],
		"react/jsx-tag-spacing" : [
			"error",
			{
				closingSlash      : "never",
				beforeSelfClosing : "always",
				afterOpening      : "never",
				beforeClosing     : "never",
			},
		],
	},
	settings : {
		react : {
			version : "detect",
		},
	},
};
