'use strict';

const fs = require('fs');
const pathFn = require('path');
const osenv = require('osenv');
const chalk = require('chalk');
const yosay = require('yosay');
const mkdirp = require('mkdirp');
const Generator = require('yeoman-generator');
const shell = require('shelljs');
// const OfflineAPI = require('@tencent/ak-api');
const Validate = require('./validate');
const User = require('./user');
const Utils = require('./utils');
const Loading = require('./loading');
const logger = require('./logger');

const log = logger({});

/**
 * Copyright (c) 2018 Tencent Inc. All rights reserved.
 *
 * A template which aims to create high-quality and effective project code.
 * This template suite for NOW web project, you can also use for other Tencent business.
 *
 * @author lewischeng(https://github.com/cpselvis)
 * @date   2018/3/10(A pleasant afternoon)
 * @type {module.exports}
 */
module.exports = class extends Generator {

  constructor() {
    super(...arguments);

    this.answers = {};
  }

  /**
   * Show template basic message.
   */
  initializing() {
    this.log(yosay('feflow工程脚手架'));
    this.log(
      chalk.magenta(
        '这是一款基于Webpack打包的模板, Powered by http://www.feflowjs.org/.' +
        '\n'
      )
    );
  }

  /**
   * Interact with developer.
   */
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: '请输入项目名称(不要写空格和汉字)',
      default: 'feflow-react-app'
    }, {
      type: 'input',
      name: 'description',
      message: '请输入项目描述信息(至少5个汉字)'
    }, {
      type: 'input',
      name: 'version',
      message: '请输入版本 (1.0.0):',
      default: '1.0.0'
    }]).then((answers) => {
      this.answers = answers;
    });
  }

  /**
   * Validate developer input message.
   */
  validate() {
    const { name, description, isRequiredRepo } = this.answers;

    log.info('即将开始校验输入的项目基本信息');

    if (!Validate.validateProjectName(name)) {
      log.info('项目名称不要写空格和汉字，请重新输入!');
      return this.prompting();
    }

    if (!Validate.validateStrLength(description, 10)) {
      log.info('项目描述信息至少需要5个汉字，请重新输入!');
      return this.prompting();
    }
  }

  /**
   * Generator project files.
   */
  writing() {
    const { name, description, version } = this.answers;

    const match = name.match(/^(.*)-(.*)-(.*)/);
    const moduleName = match && match[2] || name;
    const bizName = match && match[3] || name;
    const outDir = 'dist';

    const _copyTemplates = () => {
      // If current folder doesn't exist project folder ( Eg: not clone successfully or user doesn't need remote repo.)
      if (pathFn.basename(this.destinationPath()) !== name) {
        mkdirp(name);
      }

      shell.cd(name);

      this.destinationRoot(this.destinationPath(name));

      this.fs.copyTpl(
        this.templatePath('_package.json'),
        this.destinationPath('package.json'),
        {
          name: name,
          description: description,
          version: version
        }
      );

      this.fs.copyTpl(
        this.templatePath('_config.json'),
        this.destinationPath('config.json')
      );

      this.fs.copyTpl(
        this.templatePath('_feflow.json'),
        this.destinationPath('feflow.json'),
        {
          moduleName: moduleName,
          bizName: bizName,
          outDir: outDir
        }
      );

      this.fs.copy(
        this.templatePath('_vcmrc'),
        this.destinationPath('.vcmrc')
      );

      this.fs.copy(
        this.templatePath('gitignore'),
        this.destinationPath('.gitignore')
      );

      this.fs.copy(
        this.templatePath('gitattributes'),
        this.destinationPath('.gitattributes')
      );

      this.fs.copy(
        this.templatePath('editorconfig'),
        this.destinationPath('.editorconfig')
      );

      this.fs.copyTpl(
        this.templatePath('_README.md'),
        this.destinationPath('README.md'),
        {
          moduleName: moduleName,
          bizName: bizName,
        }
      );

      this.fs.copy(
        this.templatePath('_eslintrc.js'),
        this.destinationPath('.eslintrc.js')
      );

      this.fs.copy(
        this.templatePath('_babelrc'),
        this.destinationPath('.babelrc')
      );

      const sourceDir = pathFn.join(this.templatePath(), './src/');
      const filePaths = Utils.read(sourceDir);

      filePaths.map((filePath) => {
        if(/index.html/.test(filePath)) {
          this.fs.copyTpl(
            this.templatePath('./src/' + filePath),
            this.destinationPath('./src/' + filePath),
            {
            }
          );
        } else if (/index$/.test(filePath)) {
          this.fs.copyTpl(
            this.templatePath('./src/' + filePath),
            this.destinationPath('./src/' + filePath + '.js'),
            {
            }
          );
        } else if (/init$/.test(filePath)) {
          this.fs.copyTpl(
            this.templatePath('./src/' + filePath),
            this.destinationPath('./src/' + filePath + '.js'),
            {
            }
          );
        } else {
          this.fs.copy(
            this.templatePath('./src/' + filePath),
            this.destinationPath('./src/' + filePath)
          );
        }
      });
    };

    _copyTemplates();
  }

  install() {
    log.info('代码生成完成, 即将安装项目依赖, 大概需要 1 ~ 2 分钟');
    log.info('开始安装项目根目录基础依赖');

    const loading = new Loading('正在安装依赖...');

    shell.exec('npm install', { silent: true });
    shell.cd('src');
    shell.exec('npm install', { silent: true });
    shell.cd('../');
    loading.success();

    log.info('项目依赖安装完成');
  }

  end() {
    log.info('本次初始化过程结束, 请通过 feflow dev 运行项目');
  }
};
