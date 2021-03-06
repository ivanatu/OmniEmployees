import React from 'react';
import { shallow, render, mount } from 'enzyme';
import ReactDOM from 'react-dom' 
import toJson from 'enzyme-to-json'
import renderer from 'react-test-renderer'
import Login from '../components/login'
import moxios from 'moxios'
import sinon from 'sinon';
import {MemoryRouter} from 'react-router-dom'

describe('<Login/>', () => {
   
    const wrapper = shallow( <Login/> );

    it('renders without crashing', () => {
    shallow(<Login />);
    expect(wrapper).toMatchSnapshot();
    });
    it('has a valid snapshot', () => {
        const component = renderer.create(
            <MemoryRouter><Login/></MemoryRouter>);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
   
    it('should render <div> without throwing an error', () => {
        expect(wrapper.exists(<div className="login"/>))
    });
    it('should render <div> without throwing an error', () => {
        expect(wrapper.exists(<div className="login-screen"/>))
    });
    it('should render <div> without throwing an error', () => {
        expect(wrapper.exists(<div className="app-title"/>))
    });
    it('should render <div> without throwing an error', () => {
        expect(wrapper.exists(<div className="dropdown"/>))
    });
    it('should render <form> without throwing an error', () => {
        expect(wrapper.exists(<form className="register-form"/>))
    });
    it('renders three div jsx elements', () => {
        expect(wrapper.find("div")).toHaveLength(6);        
    });
    it('renders input tags  elements', () => {
        expect(wrapper.find("input")).toHaveLength(2);        
    });
    it('renders button elements', () => {
        expect(wrapper.find("button")).toHaveLength(1);        
    });
    
    it('should render label without throwing an error', () => {
        expect(wrapper.exists(<label className="login-field-icon fui-user"/>))
    });
    it('should render label without throwing an error', () => {
        expect(wrapper.exists(<label className="login-field-icon fui-lock"/>))
    });
    it('should render form inputs', () => {
        expect(wrapper.find('#country').length).toEqual(1);
        expect(wrapper.find('#firstname').length).toEqual(1);
        expect(wrapper.find('#lastname').length).toEqual(1);
        expect(wrapper.find('#dateOfBirth').length).toEqual(1);
        expect(wrapper.find('#holiday').length).toEqual(1);
    });
    it('input should respond to change event and change the state', () => {
        wrapper.find('#firstname').simulate('change', { target: { name: 'firstname', value: 'ivan' } });
        expect(wrapper.state('firstname')).toEqual('ivan')
    });
    it('input should respond to change event and change the state', () => {
        wrapper.find('#lastname').simulate('change', { target: { name: 'lastname', value: 'baron' } });
        expect(wrapper.state('lastname')).toEqual('baron')
    });
    it('renders login form and submits data', () =>{
        wrapper.find("#login_form").simulate('submit', {preventDefault(){}});
        expect(toJson(wrapper)).toMatchSnapshot();
    });
 
});
