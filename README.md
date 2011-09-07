# README

This project is a simple sandbox for me to play around and try different ideas for structuring JavaScript files in web project since at it's inception, there is very little guidance on such.

## Goals:
- Build a file directory structure that promotes a more consistent and pattern.
- Keep 3rd party frameworks in a separate directory
- Keep tests in a separate directory
- Promote Code Reusability
- Focus on Concepts more than framework integration.

## General Structure:
- lib - used for 3rd party libraries (e.g. jQuery)
- src - home of custom source files
- tests - home of test files
- tests-lib - home for 3rd party libraries used solely for testing.

## Current Dependencies:
- jQuery <http://www.jquery.com> (MIT, GPL)
- json2.js <http://www.JSON.org/js.html> (public domain)
- JsTestDriver <http://code.google.com/p/js-test-driver/>
- jQuery-Mockjax <http://github.com/appendto/jquery-mockjax> (MIT, GPL)

## Current Changelog:
2011 July 02 - Initial Project Setup.
2011 Sept 06 - Added Utils directory
             - Setup Utils namespace and rewrote Ajax object to reflect.
             - Decided to keep test-lib dir for testing-only libraries.