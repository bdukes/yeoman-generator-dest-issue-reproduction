import Generator from "yeoman-generator";

export default class extends Generator {
  writing() {
    this.fs.copy(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt"),
      { globOptions: {} },
    );
  }
}
