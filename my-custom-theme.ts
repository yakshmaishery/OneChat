
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "255 255 255",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #7b44d0 
		"--color-primary-50": "235 227 248", // #ebe3f8
		"--color-primary-100": "229 218 246", // #e5daf6
		"--color-primary-200": "222 208 243", // #ded0f3
		"--color-primary-300": "202 180 236", // #cab4ec
		"--color-primary-400": "163 124 222", // #a37cde
		"--color-primary-500": "123 68 208", // #7b44d0
		"--color-primary-600": "111 61 187", // #6f3dbb
		"--color-primary-700": "92 51 156", // #5c339c
		"--color-primary-800": "74 41 125", // #4a297d
		"--color-primary-900": "60 33 102", // #3c2166
		// secondary | #9183e5 
		"--color-secondary-50": "239 236 251", // #efecfb
		"--color-secondary-100": "233 230 250", // #e9e6fa
		"--color-secondary-200": "228 224 249", // #e4e0f9
		"--color-secondary-300": "211 205 245", // #d3cdf5
		"--color-secondary-400": "178 168 237", // #b2a8ed
		"--color-secondary-500": "145 131 229", // #9183e5
		"--color-secondary-600": "131 118 206", // #8376ce
		"--color-secondary-700": "109 98 172", // #6d62ac
		"--color-secondary-800": "87 79 137", // #574f89
		"--color-secondary-900": "71 64 112", // #474070
		// tertiary | #844bb6 
		"--color-tertiary-50": "237 228 244", // #ede4f4
		"--color-tertiary-100": "230 219 240", // #e6dbf0
		"--color-tertiary-200": "224 210 237", // #e0d2ed
		"--color-tertiary-300": "206 183 226", // #ceb7e2
		"--color-tertiary-400": "169 129 204", // #a981cc
		"--color-tertiary-500": "132 75 182", // #844bb6
		"--color-tertiary-600": "119 68 164", // #7744a4
		"--color-tertiary-700": "99 56 137", // #633889
		"--color-tertiary-800": "79 45 109", // #4f2d6d
		"--color-tertiary-900": "65 37 89", // #412559
		// success | #63aee4 
		"--color-success-50": "232 243 251", // #e8f3fb
		"--color-success-100": "224 239 250", // #e0effa
		"--color-success-200": "216 235 248", // #d8ebf8
		"--color-success-300": "193 223 244", // #c1dff4
		"--color-success-400": "146 198 236", // #92c6ec
		"--color-success-500": "99 174 228", // #63aee4
		"--color-success-600": "89 157 205", // #599dcd
		"--color-success-700": "74 131 171", // #4a83ab
		"--color-success-800": "59 104 137", // #3b6889
		"--color-success-900": "49 85 112", // #315570
		// warning | #303e81 
		"--color-warning-50": "224 226 236", // #e0e2ec
		"--color-warning-100": "214 216 230", // #d6d8e6
		"--color-warning-200": "203 207 224", // #cbcfe0
		"--color-warning-300": "172 178 205", // #acb2cd
		"--color-warning-400": "110 120 167", // #6e78a7
		"--color-warning-500": "48 62 129", // #303e81
		"--color-warning-600": "43 56 116", // #2b3874
		"--color-warning-700": "36 47 97", // #242f61
		"--color-warning-800": "29 37 77", // #1d254d
		"--color-warning-900": "24 30 63", // #181e3f
		// error | #80af23 
		"--color-error-50": "236 243 222", // #ecf3de
		"--color-error-100": "230 239 211", // #e6efd3
		"--color-error-200": "223 235 200", // #dfebc8
		"--color-error-300": "204 223 167", // #ccdfa7
		"--color-error-400": "166 199 101", // #a6c765
		"--color-error-500": "128 175 35", // #80af23
		"--color-error-600": "115 158 32", // #739e20
		"--color-error-700": "96 131 26", // #60831a
		"--color-error-800": "77 105 21", // #4d6915
		"--color-error-900": "63 86 17", // #3f5611
		// surface | #330f88 
		"--color-surface-50": "224 219 237", // #e0dbed
		"--color-surface-100": "214 207 231", // #d6cfe7
		"--color-surface-200": "204 195 225", // #ccc3e1
		"--color-surface-300": "173 159 207", // #ad9fcf
		"--color-surface-400": "112 87 172", // #7057ac
		"--color-surface-500": "51 15 136", // #330f88
		"--color-surface-600": "46 14 122", // #2e0e7a
		"--color-surface-700": "38 11 102", // #260b66
		"--color-surface-800": "31 9 82", // #1f0952
		"--color-surface-900": "25 7 67", // #190743
		
	}
}