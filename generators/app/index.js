import Generator from "yeoman-generator";

export default class extends Generator {
  writing() {
    this.fs.copyTpl(
      this.templatePath("dummyfile.txt"),
      this.destinationPath("dummyfile.txt"),
      { a: "b" },
    );
  }
}
