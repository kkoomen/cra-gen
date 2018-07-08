const path = require('path');
const findRoot = require('find-root');

exports.paths = {
  templates: path.resolve(path.join(__dirname, './templates/')),
  root: () => {
    try {
      return findRoot(process.cwd())
    } catch (e) {
      console.error('No near package.json found');
      process.exit(2);
    }
  },
};
