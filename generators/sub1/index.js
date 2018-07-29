'use strict';

const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  initializing() {
    this.generatorName = path.basename(__dirname);
    this.log(`${this.generatorName}: initializing`);
  }

  prompting() {
    this.log(`${this.generatorName}: prompting`);
  }

  configuring() {
    this.log(`${this.generatorName}: configuring`);
  }

  default() {
    this.log(`${this.generatorName}: default`);
  }

  writing() {
    this.log(`${this.generatorName}: writing`);
  }

  conflicts() {
    this.log(`${this.generatorName}: conflicts`);
  }

  install() {
    this.log(`${this.generatorName}: install`);
  }

  end() {
    this.log(`${this.generatorName}: end`);
  }
};
