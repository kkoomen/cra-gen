const config = require('./config');
const path = require('path');

exports.getTemplatePath = (type) => {
  switch (type) {
    case 'component': {
      return path.join(config.paths.templates, 'component.jsx');
    }
    case 'component.stateless': {
      return path.join(config.paths.templates, 'component--stateless.jsx');
    }
    case 'component.connected': {
      return path.join(config.paths.templates, 'component--connected.jsx');
    }
    case 'component.stateless.connected': {
      return path.join(config.paths.templates, 'component--stateless--connected.jsx');
    }
  }
}
