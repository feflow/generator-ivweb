'use strict';

const yosay = require('yosay');
const chalk = require('chalk');
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

  constructor() {
    super(...arguments);

    this.answers = {};
  }

  /**
   * Print welcome message
   */
  initializing() {
    this.log(yosay('Feflow脚手架示例'));
    this.log(
      chalk.magenta(
        `尊贵的开发者，欢迎您` +
        '\n' +
        '这是腾讯IVWEB团队的项目脚手架, Powered by http://www.feflowjs.org/.' +
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
      message: '请输入项目名称',
      default: 'my-project'
    }, {
      type: 'input',
      name: 'description',
      message: '请输入项目描述信息',
      default: '项目基本描述'
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
   * Copy templates
   */
  writing() {
    const { name } = this.answers;
    this.destinationRoot(this.destinationPath(name));

    this.fs.copyTpl(
        `${this.templatePath()}/**/!(_)*`,
        this.destinationPath(),
        this.answers,
        {},
        { globOptions: { dot: true } }    // Copy all dots files.
    );
  }

  /**
   * Install dependencies
   */
  install() {
    const { logger } = this.options;

    logger.info('安装依赖，过程持续1~2分钟');
    this.npmInstall();
  }

  /**
   * Prompt user to start project
   */
  end() {
    const { name } = this.answers;
    const { logger } = this.options;

    logger.info('本次初始化过程结束, 请通过以下命令运行项目: ');
    console.log();
    console.log(chalk.cyan('  cd'), name);
    console.log(`  ${chalk.cyan('feflow dev')}`);
    console.log();
    logger.info('编码愉快!');
  }
};
