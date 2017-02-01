'use strict'

const foregroundColor = '#cedde0'
const backgroundColor = '#2f3542'
const black = backgroundColor
const blue = '#44C0C6'
const orange = '#FC8458'
const gray = '#3d424b'
const brightBlack = backgroundColor
const brightWhite = foregroundColor

const colors = {
	black: backgroundColor,
	red: blue,
	green: orange,
	yellow: blue,
	blue: orange,
	magenta: blue,
	cyan: gray,
	white: orange,
	lightBlack: backgroundColor,
	lightRed: orange,
	lightGreen: orange,
	lightYellow: blue,
	lightBlue: blue,
	lightMagenta: blue,
	lightCyan: gray,
	lightWhite: orange
}

exports.decorateConfig = config => {
	return Object.assign({}, config, {
		backgroundColor,
		foregroundColor,
		borderColor: '#222430',
		cursorColor: orange,
		colors: colors,
		css: `
			${config.css || ''}
            .tab_tab {
                border: 0;
            }
            .tab_textActive {
                border-bottom: 2px solid ${orange};
            }
		`
	})
}

exports.middleware = () => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      action.config.foregroundColor = foregroundColor
      action.config.backgroundColor = backgroundColor
      action.config.cursorColor = orange
      action.config.colors = colors
  }
  next(action)
}
