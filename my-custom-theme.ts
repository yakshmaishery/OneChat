
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
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "0 0 0",
		"--on-surface": "255 255 255",
		// =~= Theme Colors  =~=
		// primary | #2c65b8 
		"--color-primary-50": "223 232 244", // #dfe8f4
		"--color-primary-100": "213 224 241", // #d5e0f1
		"--color-primary-200": "202 217 237", // #cad9ed
		"--color-primary-300": "171 193 227", // #abc1e3
		"--color-primary-400": "107 147 205", // #6b93cd
		"--color-primary-500": "44 101 184", // #2c65b8
		"--color-primary-600": "40 91 166", // #285ba6
		"--color-primary-700": "33 76 138", // #214c8a
		"--color-primary-800": "26 61 110", // #1a3d6e
		"--color-primary-900": "22 49 90", // #16315a
		// secondary | #0aa83e 
		"--color-secondary-50": "218 242 226", // #daf2e2
		"--color-secondary-100": "206 238 216", // #ceeed8
		"--color-secondary-200": "194 233 207", // #c2e9cf
		"--color-secondary-300": "157 220 178", // #9ddcb2
		"--color-secondary-400": "84 194 120", // #54c278
		"--color-secondary-500": "10 168 62", // #0aa83e
		"--color-secondary-600": "9 151 56", // #099738
		"--color-secondary-700": "8 126 47", // #087e2f
		"--color-secondary-800": "6 101 37", // #066525
		"--color-secondary-900": "5 82 30", // #05521e
		// tertiary | #8292ec 
		"--color-tertiary-50": "236 239 252", // #eceffc
		"--color-tertiary-100": "230 233 251", // #e6e9fb
		"--color-tertiary-200": "224 228 250", // #e0e4fa
		"--color-tertiary-300": "205 211 247", // #cdd3f7
		"--color-tertiary-400": "168 179 242", // #a8b3f2
		"--color-tertiary-500": "130 146 236", // #8292ec
		"--color-tertiary-600": "117 131 212", // #7583d4
		"--color-tertiary-700": "98 110 177", // #626eb1
		"--color-tertiary-800": "78 88 142", // #4e588e
		"--color-tertiary-900": "64 72 116", // #404874
		// success | #a1c48f 
		"--color-success-50": "241 246 238", // #f1f6ee
		"--color-success-100": "236 243 233", // #ecf3e9
		"--color-success-200": "232 240 227", // #e8f0e3
		"--color-success-300": "217 231 210", // #d9e7d2
		"--color-success-400": "189 214 177", // #bdd6b1
		"--color-success-500": "161 196 143", // #a1c48f
		"--color-success-600": "145 176 129", // #91b081
		"--color-success-700": "121 147 107", // #79936b
		"--color-success-800": "97 118 86", // #617656
		"--color-success-900": "79 96 70", // #4f6046
		// warning | #c63de7 
		"--color-warning-50": "246 226 251", // #f6e2fb
		"--color-warning-100": "244 216 250", // #f4d8fa
		"--color-warning-200": "241 207 249", // #f1cff9
		"--color-warning-300": "232 177 245", // #e8b1f5
		"--color-warning-400": "215 119 238", // #d777ee
		"--color-warning-500": "198 61 231", // #c63de7
		"--color-warning-600": "178 55 208", // #b237d0
		"--color-warning-700": "149 46 173", // #952ead
		"--color-warning-800": "119 37 139", // #77258b
		"--color-warning-900": "97 30 113", // #611e71
		// error | #e3bea0 
		"--color-error-50": "251 245 241", // #fbf5f1
		"--color-error-100": "249 242 236", // #f9f2ec
		"--color-error-200": "248 239 231", // #f8efe7
		"--color-error-300": "244 229 217", // #f4e5d9
		"--color-error-400": "235 210 189", // #ebd2bd
		"--color-error-500": "227 190 160", // #e3bea0
		"--color-error-600": "204 171 144", // #ccab90
		"--color-error-700": "170 143 120", // #aa8f78
		"--color-error-800": "136 114 96", // #887260
		"--color-error-900": "111 93 78", // #6f5d4e
		// surface | #4c05a0 
		"--color-surface-50": "228 218 241", // #e4daf1
		"--color-surface-100": "219 205 236", // #dbcdec
		"--color-surface-200": "210 193 231", // #d2c1e7
		"--color-surface-300": "183 155 217", // #b79bd9
		"--color-surface-400": "130 80 189", // #8250bd
		"--color-surface-500": "76 5 160", // #4c05a0
		"--color-surface-600": "68 5 144", // #440590
		"--color-surface-700": "57 4 120", // #390478
		"--color-surface-800": "46 3 96", // #2e0360
		"--color-surface-900": "37 2 78", // #25024e
		
	}
}