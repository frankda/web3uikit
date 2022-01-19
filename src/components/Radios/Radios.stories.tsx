import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Radios from './Radios';

export default {
    title: 'Interaction/Radios',
    component: Radios,
    parameters: {
        actions: {
            handles: ['onChange', 'changed'],
        },
    },
} as ComponentMeta<typeof Radios>;

const Template: ComponentStory<typeof Radios> = (args) => <Radios {...args} />;

export const RadioGroup = Template.bind({});
RadioGroup.args = {
    id: 'radios',
    items: ['Charmander', 'Squirtle', 'Bulbasaur', 'Pikachu'],
    title: "Who's that Pokemon?",
};

export const RadioGroupWithoutTitle = Template.bind({});
RadioGroupWithoutTitle.args = {
    id: 'radios',
    items: ['Charmander', 'Squirtle', 'Bulbasaur', 'Pikachu'],
};

export const RadiosWithLongText = Template.bind({});
RadiosWithLongText.args = {
    id: 'a formatted id',
    items: [
        'I think anybody who is interested in keeping their money safe from the criminal banking system would want gold, silver, and Bitcoin.',
        'If you like gold, there are many reasons you should like Bitcoin.',
        'Whatever happens to bitcoin, other cryptocurrencies are gaining ground and more respect. Ethereum, for instance, has far more transparency.',
    ],
    title: 'What is your favorite bitCoin quote of 2021?',
};
