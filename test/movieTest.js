//MOVIE LAB According to the description of R­rated films: Children under 17 require an accompanying parent 

//or adult guardian (age 21 or older) and adults 25 years and under must show ID.

//And children under the age of 6 are not allowed in after 6:00pm. 

//Deadpool is an R­rated movie. 

//Write a JavaScript function named canIWatch  that will take  age  as a parameter.

'use strict';
var expect = require('expect');
var age = require('../app/movieCode.js');

describe ('canIWatch tests', function(){
	it('Should return the appropriate message for age less than 6', function (){
	expect(canIWatch(5)).toEqual('You are not allowed to watch Deadpool after 6.00pm.');
});

it('Should return the appropriate message for age less than 17', function (){
	expect(canIWatch(15)).toEqual('You must be accompanied by a guardian who is 21 or older.');	
	});

it('Should return the appropriate message for age less than 25', function (){
	expect(canIWatch(20)).toEqual('You are not allowed to watch Deadpool, right after you show some ID.');
	});

it('Should return the appropriate message for age above 25 than 6', function (){
	expect(canIWatch(30)).toEqual('Yay! You can watch Deapool with no strings attached!.');
	});

it('Should return the appropriate message if provided age is invalid', function (){
	expect(canIWatch(-1)).toEqual('Invalid age.');
	});

});