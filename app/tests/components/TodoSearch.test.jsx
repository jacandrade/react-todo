var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


import {TodoSearch} from 'TodoSearch';

 describe('TodoSearch', () => {
     it('should exist', () => {
         expect(TodoSearch).toExist();
     });

     it('should dispatch setSearchText on entered input text', () => {
         var action = {
             type:'SET_SEARCH_TEXT',
             searchText: 'troll'
        };

         var spy = expect.createSpy();
         var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);

         todoSearch.refs.searchText.value = action.searchText;
         TestUtils.Simulate.change(todoSearch.refs.searchText);

         expect(spy).toHaveBeenCalledWith(action);

     });

     it('should dispatch TOGGLE_SHOW_COMPLETED when checkbox checked ', () => {

         var action = {
             type: 'TOGGLE_SHOW_COMPLETED'
         };
         var spy = expect.createSpy();
         var todoSearch = TestUtils.renderIntoDocument(<TodoSearch dispatch={spy} />);
         todoSearch.refs.showCompleted.checked = true;
         TestUtils.Simulate.change(todoSearch.refs.showCompleted);

         expect(spy).toHaveBeenCalledWith(action);
     });
 });