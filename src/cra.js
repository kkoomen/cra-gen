const config = require('./config');
const path = require('path');
const fs = require('fs');
const utils = require('./utils');
require('shelljs/global');

const generate = (type, name) => {
  const rootDir = config.paths.root();

  let destinationDir = null;
  let destinationFile = null;
  let templatePath = null;
  let formattedName = null;

  types = type.split(':');
  switch (types[0]) {
    case 'scaffold': {
      generate('component', name);
      generate('reducer', name);
      break;
    }
    case 'component': {
      destinationDir = path.join(rootDir, 'src/components/', utils.capitalizeFirstLetter(name));
      destinationFile = path.join(destinationDir, 'index.jsx');
      formattedName = utils.capitalizeFirstLetter(path.basename(name));

      const connected = types.indexOf('connected') !== -1;
      const stateless = types.indexOf('stateless') !== -1;
      if (stateless && connected) {
        templatePath = utils.getTemplatePath('component.stateless.connected');
      } else if (connected) {
        templatePath = utils.getTemplatePath('component.connected');
      } else if (stateless) {
        templatePath = utils.getTemplatePath('component.stateless');
      } else {
        templatePath = utils.getTemplatePath('component');
      }
      break;
    }
    case 'container': {
      destinationDir = path.join(rootDir, 'src/containers/', utils.capitalizeFirstLetter(name));
      destinationFile = path.join(destinationDir, 'index.jsx');
      formattedName = utils.capitalizeFirstLetter(path.basename(name));

      const connected = types.indexOf('connected') !== -1;
      const stateless = types.indexOf('stateless') !== -1;
      if (stateless && connected) {
        templatePath = utils.getTemplatePath('container.stateless.connected');
      } else if (connected) {
        templatePath = utils.getTemplatePath('container.connected');
      } else if (stateless) {
        templatePath = utils.getTemplatePath('container.stateless');
      } else {
        templatePath = utils.getTemplatePath('container');
      }
      break;
    }
    case 'reducer': {
      destinationDir = path.join(rootDir, 'src/reducers/', utils.capitalizeFirstLetter(name));
      destinationFile = path.join(destinationDir, 'index.jsx');
      formattedName = utils.lowerCaseFirstLetter(path.basename(name));
      templatePath = utils.getTemplatePath('reducer');

      // When a reducer has been generated we also want to add a folder that
      // contains all its actions.
      const actionsDir = path.join(rootDir, 'src/actions/', utils.capitalizeFirstLetter(name));
      if (!fs.existsSync(actionsDir)) {
        utils.mkdirSync(actionsDir);
      }

      // Create an empty file in the actions directory.
      const actionsFile = path.join(actionsDir, 'index.js');
      fs.closeSync(fs.openSync(actionsFile, 'w'));
      console.log(`Successfully generated ${actionsFile}`);
      break;
    }
  }

  if (!fs.existsSync(destinationDir) && destinationDir) {
    utils.mkdirSync(destinationDir);
  }

  if (destinationFile) {
    fs.copyFile(templatePath, destinationFile, (err) => {
      if (err) throw err;
      sed('-i', '%NAME%', (formattedName || name), destinationFile);
      console.log(`Successfully generated ${destinationFile}`);
    });
  }
};

const usage = () => {
  console.log('Usage: cra-gen <type> <name>');
  console.log('');
  console.log('Available types:');
  console.log('component');
  console.log('component:stateless');
  console.log('component:connected');
  console.log('component:stateless:connected');
  console.log('container');
  console.log('container:stateless');
  console.log('container:connected');
  console.log('container:stateless:connected');
  console.log('reducer');
  console.log('scaffold');
  console.log('');
  console.log('Examples:');
  console.log('  cra-gen component:stateless MyAwesomeComponent');
  console.log('  cra-gen container:stateless MyAwesomeLayoutContainer');
  console.log('  cra-gen reducer myAwesomeReducer');
  console.log('  cra-gen scaffold User');
  console.log('');
  console.log('Generate an all-in-one structure for a single component using the "scaffold" commando.');
  console.log('This will generate a component, reducer and action all at once.');
  console.log('');
}

module.exports = {
  usage,
  generate,
}
