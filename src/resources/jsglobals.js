//
// JS GLOBAL VARIABLES
// -------------------
//
// Global values to be used across all js files.
// This file is imported via import, to allow 
// for maintainability.
// 
// NOTE: The media query values should agree
// with those from the cssglobals file.
//


//
// MEDIA QUERIES
// -------------
//
export const TABLET = 600;
export const DESKTOP = 1024;
export const MediaEnum = Object.freeze({ 
	mobile: 0,
	tablet: 1,
	desktop: 2,
})


//
// NAVBAR
// ------
//
export const NAVBAR_HEIGHT_M = 65;
export const NAVBAR_HEIGHT = 140;
export const NAVBAR_TOP = 50;
export const NAVBAR_TOTAL = NAVBAR_HEIGHT + NAVBAR_TOP;
