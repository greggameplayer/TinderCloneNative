import * as React from 'react';
import renderer from 'react-test-renderer';

import CustomButton from '../CustomButton';


it(`renders correctly plain without icon`, () => {
    const tree = renderer.create(<CustomButton title={"Test"} type={"plain"} action={() => {alert('test')}}/>).toJSON();

    expect(tree).toMatchSnapshot();
});

it(`renders correctly outlined without icon`, () => {
    const tree = renderer.create(<CustomButton title={"Test"} type={"outlined"} action={() => {alert('test')}}/>).toJSON();

    expect(tree).toMatchSnapshot();
});

it(`renders correctly outlined with icon`, () => {
    const tree = renderer.create(<CustomButton title={"Test"} type={"outlined"} action={() => {alert('test')}} icon={{name: 'facebook', color: 'pink'}}/>).toJSON();

    expect(tree).toMatchSnapshot();
});

it(`renders correctly plain with icon`, () => {
    const tree = renderer.create(<CustomButton title={"Test"} type={"plain"} action={() => {alert('test')}} icon={{name: 'facebook', color: 'white'}}/>).toJSON();

    expect(tree).toMatchSnapshot();
});
