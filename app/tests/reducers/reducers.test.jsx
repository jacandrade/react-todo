var expect = require('expect');
var df = require('deep-freeze-strict');

var Reducers = require('reducers');


describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set search text', () => {
            
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'Test'
            };
            var res = Reducers.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('show that the showCompletedStatus is flipped', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            };
            var res = Reducers.showCompletedReducer(df(true), df(action));

            expect(res).toEqual(false);
        });
    });
});