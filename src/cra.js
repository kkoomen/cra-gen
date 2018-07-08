const config = require('./config');
const path = require('path');
const fs = require('fs');
const utils = require('./utils');
require('shelljs/global');

const generate = (type, name) => {
  const rootDir = config.paths.root();

  switch (type.split(':')[0]) {
    // Generate options:
    // - component                     AwesomeComponent
    // - component:stateless           AwesomeComponent
    // - component:connected           AwesomeComponent
    // - component:stateless:connected AwesomeComponent
    case 'component': {
      let destinationDir = path.join(rootDir, `src/components/${name}`);
      let destinationFile = path.join(destinationDir, 'index.jsx');

      let templatePath = null;
      if (type == 'component:stateless:connected') {
        templatePath = utils.getTemplatePath('component.stateless.connected');
      } else if (type == 'component:connected') {
        templatePath = utils.getTemplatePath('component.connected');
      } else if (type == 'component:stateless') {
        templatePath = utils.getTemplatePath('component.stateless');
      } else if (type == 'component'){
        templatePath = utils.getTemplatePath('component');
      } else {
        usage();
        console.error('Unknown component ');
        process.exit(3);
      }

      if (!fs.existsSync(destinationDir)){
        fs.mkdirSync(destinationDir);
      }

      console.log('-- path --');
      console.log(`templatePath: ${templatePath}`);
      console.log(`destinationDir: ${destinationDir}`);
      console.log(`destinationFile: ${destinationFile}`);
      fs.copyFile(templatePath, destinationFile, (err) => {
        if (err) throw err;
        console.log('source.txt was copied to destination.txt');
      });
      sed('-i', '%NAME%', name, destinationFile);
    }
    case 'container': {
      //
    }
    case 'reducer': {
      //
    }
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
  console.log('reducer');
  console.log('action');
  console.log('');
  console.log('Examples:');
  console.log('  cra-gen component:stateless MyAwesomeComponent');
  console.log('  cra-gen reducer userReducer');
  console.log('');
}

module.exports = {
  usage,
  generate,
}
