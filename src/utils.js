const config = require('./config');
const fs = require('fs');
const path = require('path');

exports.getTemplatePath = (type) => {
  let localTemplate = null;
  let userTemplate = null;

  switch (type) {
    // Components
    case 'component': {
      localTemplate = path.join(config.paths.templates, 'component', 'component.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'component', 'component.jsx');
      break;
    }
    case 'component.stateless': {
      localTemplate = path.join(config.paths.templates, 'component', 'component.stateless.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'component', 'component.stateless.jsx');
      break;
    }
    case 'component.connected': {
      localTemplate = path.join(config.paths.templates, 'component', 'component.connected.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'component', 'component.connected.jsx');
      break;
    }
    case 'component.stateless.connected': {
      localTemplate = path.join(config.paths.templates, 'component', 'component.stateless.connected.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'component', 'component.stateless.connected.jsx');
      break;
    }

    // Containers
    case 'container': {
      localTemplate = path.join(config.paths.templates, 'container', 'container.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'container', 'container.jsx');
      break;
    }
    case 'container.stateless': {
      localTemplate = path.join(config.paths.templates, 'container', 'container.stateless.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'container', 'container.stateless.jsx');
      break;
    }
    case 'container.connected': {
      localTemplate = path.join(config.paths.templates, 'container', 'container.connected.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'container', 'container.connected.jsx');
      break;
    }
    case 'container.stateless.connected': {
      localTemplate = path.join(config.paths.templates, 'container', 'container.stateless.connected.jsx');
      userTemplate = path.join(config.paths.userTemplates, 'container', 'container.stateless.connected.jsx');
      break;
    }

    // Reducers
    case 'reducer': {
      localTemplate = path.join(config.paths.templates, 'reducer', 'reducer.js');
      userTemplate = path.join(config.paths.userTemplates, 'reducer', 'reducer.js');
      break;
    }
  }

  return fs.existsSync(userTemplate) ? userTemplate : localTemplate;
}

exports.capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

exports.lowerCaseFirstLetter = (str) =>
  str.charAt(0).toLowerCase() + str.slice(1);

/**
 * mkdirSync
 *   Create the given path recursively if it doesn't exists yet.
 *
 * Thanks to
 *   https://stackoverflow.com/questions/31645738/how-to-create-full-path-with-nodes-fs-mkdirsync#answer-40686853
 */
exports.mkdirSync = (targetDir) => {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : '';
  const baseDir = '.';

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === 'EEXIST') { // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac
      // and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === 'ENOENT') {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ['EACCES', 'EPERM', 'EISDIR'].indexOf(err.code) > -1;
      if (!caughtErr || caughtErr && targetDir === curDir) {
        // Throw if it's just the last created dir.
        throw err;
      }
    }

    return curDir;
  }, initDir);
}
