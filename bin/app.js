#!/usr/bin/env node
'use strict'
const yargs = require('yargs');
const inquirer = require('inquirer');
const poop = () => console.log('đ©');

// const slicedArgs = process.argv.slice(2); // æćăź2ă€ăŻćăćăŁăćŒæ°ă§ăŻăȘăăźă§é€ć€
const askName = async () => {
    const answers = await inquirer.prompt([
        {
            message: 'What to use as material?',
            name: 'name',
            type: 'string'
        }
    ]);

    console.log(`Hello, ${answers.name}!`);
};

const cmd = (params) => {
    console.log(`Hello, ${params.material}!`);
    console.log(`Hello, ${params.u}!`);
};

const argv = yargs(process.argv.splice(2))
    .command('ask', 'use inquirer to prompt', {}, askName)
    .command('poop', 'return poop', {}, poop)
    .command('cmd <material>', 'return poop', (yargs) => yargs.option('u', {
        alias: 'url',
        describe: 'the URL to make an HTTP request to'
    }), (params) => cmd(params))
    .demandCommand(1, 1, 'choose a command: ask or poop or cmd')
    .strict()
    .help('h').argv;
