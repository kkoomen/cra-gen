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
