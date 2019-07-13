module.exports = function () {
  var instanceRoot = "C:\\inetpub\\wwwroot\\sc910.sc";
  var config = {
    websiteRoot: instanceRoot + "\\",
    sitecoreLibraries: instanceRoot + "\\bin",
    licensePath: instanceRoot + "\\App_Data\\license.xml",
    packageXmlBasePath: ".\\src\\Project\\site910\\Habitat\\code\\App_Data\\packages\\habitat.xml",
    packagePath: instanceRoot + "\\App_Data\\packages",
    solutionName: "Habitat",
    buildConfiguration: "Debug",
    buildToolsVersion: 15.0,
    buildMaxCpuCount: 0,
    buildVerbosity: "minimal",
    buildPlatform: "Any CPU",
    publishPlatform: "AnyCpu",
    runCleanBuilds: false
  };
  return config;
}
