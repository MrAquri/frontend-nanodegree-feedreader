/*
 * feedreader.js
 * All of the tests are placed within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* Test to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('URLs are not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].length).not.toBe(0);
            }
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].length).not.toBe(0);
            }
        });
    });

    describe('The menu', function() {

        //Declaring variables used in the suite
        let icon = document.querySelector('.menu-icon-link');
        let body = document.getElementsByTagName('body');

        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('the menu is hidden', function() {
            expect(body[0].className).toMatch('menu-hidden');
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked.
         */
        it('the menu changes visibility', function() {
            //First click
            icon.click();
            expect(body[0].className).not.toMatch('menu-hidden')
            //Second click
            icon.click();
            expect(body[0].className).toMatch('menu-hidden');
        });
    });

    describe('Initial Entries', function() {

        //Declaring variables used in the suite
        let feed = document.querySelector('.feed');
        let entry = document.getElementsByClassName('entry');

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
        beforeEach(function(done) {
            loadFeed(0);
            done();
        });

        it('the feed container is not empty', function(done) {
            expect(feed).not.toBe(0);
            expect(entry).toBeDefined();
            expect(entry).not.toBe(0);
            done();
        });
    });

    describe('New Feed Selection', function() {

        //Declaring variables used in the suite
        let feed = document.querySelector('.feed');
        let oldFeed, newFeed;

        beforeEach(function(done) {
            loadFeed(0);
            oldFeed = feed.innerHTML;
            done();
        });
        // Used for cleanup, after the beforeEach is used
        afterEach(function(done) {
            loadFeed(1);
            newFeed = feed.innerHTML;
            done();
        });

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
        it('the new feed is loaded', function(done) {
            expect(oldFeed).not.toBe(newFeed);
            done();
        });

    });
}());
