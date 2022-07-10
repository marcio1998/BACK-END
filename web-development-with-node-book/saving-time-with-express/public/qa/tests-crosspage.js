var Browser =  require('zombie');
var assert = require('chai').assert;
var browser;

suite('Cross-Page Tests', function(){
    setup(function(){
        browser = new Browser();
    });

    test('request a group rate quote from the hood river tour page' + 'should populate the refferer field', function(done){
        var referrer = 'http://localhost:3000/tours/hood-rivers';
        browser.visit(referrer, function(){
            browser.clickLink('.requestGroupRate', function(){
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('request a group rate quote from the oregon coast tour page' + 'should populate the refferer field', function(done){
        var referrer = 'http://localhost:3000/tours/oregon-coast';
        browser.visit(referrer, function(){
            browser.clickLink('.requestGroupRate', function(){
                assert(browser.field('referrer').value === referrer);
                done();
            });
        });
    });

    test('visitng the request group rate page directly should result' + 'in a empty referrer field', function(done){
        browser.visit('http://localhost:3000/tours/request-group-page', function(){
                assert(browser.field('referrer').value === '');
                done();
        });
    });
});