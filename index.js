'use strict';
var fs = require('fs'),
    colors = require('colors/safe'),
    map = {};

fs.readFile('./file.css', 'utf8', parse);

function parse(err, file) {
	var rules;

	if(err) {
		console.error(colors.red(err));
		process.exit(0);
	}

	rules = file.split(/[\}]/g);

	rules.forEach(function(rule) {
		parseRule(rule+'}');
	});
}

function parseRule(rule) {
	var pieces = rule.split(/\{/), selectors;
	if(!pieces) {
		console.error(colors.red('Problem parsing selectors', rule));
		process.exit(0);
	}
	selectors = pieces[0].split(' ');

	parseSelector(selectors, '{'+pieces[1]);
}

function parseSelector(selector, rule) {
	console.log(selector, rule);
}