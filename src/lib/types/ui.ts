export type UIBaseColor =
	| "danger"
	| "dark"
	| "light"
	| "medium"
	| "primary"
	| "secondary"
	| "success"
	| "tertiary"
	| "warning";

export type UIElevationKey =
	| 0
	| 1
	| 2
	| 3
	| 4
	| 6
	| 8
	| 12
	| 16
	| 24

export type UIElevationMap = {
	0: 0,
	1: 0.05,
	2: 0.07,
	3: 0.08,
	4: 0.09,
	6: 0.11,
	8: 0.12,
	12: 0.14,
	16: 0.15,
	24: 0.16,
}