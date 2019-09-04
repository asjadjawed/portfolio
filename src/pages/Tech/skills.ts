import adobeXDIcon from "./tech-icons/adobexd.svg";
import apacheIcon from "./tech-icons/apache.svg";
import aspDotNetIcon from "./tech-icons/aspdotnet.svg";
import babelIcon from "./tech-icons/babel.svg";
import bcryptIcon from "./tech-icons/bcrypt.svg";
import bemIcon from "./tech-icons/bem.svg";
import bootstrapIcon from "./tech-icons/bootstrap.svg";
import bulmaIcon from "./tech-icons/bulma.svg";
import chromeDevToolsIcon from "./tech-icons/chromedevtools.svg";
import csharpIcon from "./tech-icons/csharp.svg";
import css3Icon from "./tech-icons/css3.svg";
import digitalOceanIcon from "./tech-icons/digitalocean.svg";
import dotNetIcon from "./tech-icons/dotnet.svg";
import esLintIcon from "./tech-icons/eslint.svg";
import expressIcon from "./tech-icons/express.svg";
import figmaIcon from "./tech-icons/figma.svg";
import gitIcon from "./tech-icons/git.svg";
import gitHubIcon from "./tech-icons/github.svg";
import googleAnalyticsIcon from "./tech-icons/google-analytics.svg";
import handlebarsIcon from "./tech-icons/handlebars.svg";
import herokuIcon from "./tech-icons/heroku.svg";
import html5Icon from "./tech-icons/html5.svg";
import httpIcon from "./tech-icons/http.svg";
import javascriptIcon from "./tech-icons/javascript.svg";
import jestIcon from "./tech-icons/jest.svg";
import jqueryIcon from "./tech-icons/jquery.svg";
import jwtIcon from "./tech-icons/jwt.svg";
import knexJSIcon from "./tech-icons/knex.js.svg";
import linuxIcon from "./tech-icons/linux.svg";
import materializeIcon from "./tech-icons/materialize.svg";
import mongoDBIcon from "./tech-icons/mongodb.svg";
import mongooseIcon from "./tech-icons/mongoose.svg";
import mySQLIcon from "./tech-icons/mysql.svg";
import nginxIcon from "./tech-icons/nginx.svg";
import nodejsIcon from "./tech-icons/node.js.svg";
import npmIcon from "./tech-icons/npm.svg";
import openGraphIcon from "./tech-icons/open-graph.svg";
import parcelIcon from "./tech-icons/parcel.svg";
import phpIcon from "./tech-icons/php.svg";
import postgreSQLIcon from "./tech-icons/postgresql.svg";
import pythonIcon from "./tech-icons/python.svg";
import reactIcon from "./tech-icons/react.svg";
import reactRouterIcon from "./tech-icons/react-router.svg";
import reduxIcon from "./tech-icons/redux.svg";
import regExIcon from "./tech-icons/regex.svg";
import restApiIcon from "./tech-icons/restapi.svg";
import sassIcon from "./tech-icons/sass.svg";
import typescriptIcon from "./tech-icons/typescript.svg";
import virtualBoxIcon from "./tech-icons/virtualbox.svg";
import visualStudioIcon from "./tech-icons/visualstudio.svg";
import visualStudioCodeIcon from "./tech-icons/visualstudiocode.svg";
import webpackIcon from "./tech-icons/webpack.svg";
import windowsIcon from "./tech-icons/windows.svg";
import wordPressIcon from "./tech-icons/wordpress.svg";

const skills = {
  backEnd: [
    ["Linux", "https://www.kernel.org/", linuxIcon],
    ["Windows", "https://www.microsoft.com/en-us/windows", windowsIcon],
    ["TypeScript", "https://www.typescriptlang.org/", typescriptIcon],
    ["C#", "http://csharp.net/", csharpIcon],
    ["Python", "https://www.python.org/", pythonIcon],
    ["PHP", "https://secure.php.net/", phpIcon],
    ["Node.js", "https://nodejs.org/en/", nodejsIcon],
    [".net", "https://dotnet.microsoft.com/", dotNetIcon],
    ["asp.net", "https://dotnet.microsoft.com/apps/aspnet", aspDotNetIcon],
    ["Express", "https://expressjs.com/", expressIcon],
    ["Apache", "https://httpd.apache.org/", apacheIcon],
    ["nginx", "https://nginx.org/", nginxIcon],
    ["HTTP", "https://www.w3.org/Protocols/History.html", httpIcon],
    [
      "REST API",
      "https://en.wikipedia.org/wiki/Representational_state_transfer",
      restApiIcon
    ],
    ["MySQL", "https://www.mysql.com/", mySQLIcon],
    ["PostgreSQL", "https://www.postgresql.org/", postgreSQLIcon],
    ["MongoDB", "https://www.mongodb.com/", mongoDBIcon],
    ["Knex.js", "https://knexjs.org/", knexJSIcon],
    ["Mongoose", "https://mongoosejs.com/", mongooseIcon],
    ["Handlebars", "https://handlebarsjs.com/", handlebarsIcon],
    ["Wordpress", "https://wordpress.org/", wordPressIcon],

    ["JWT", "https://jwt.io/", jwtIcon],
    ["bcrypt", "https://www.npmjs.com/package/bcrypt", bcryptIcon]
  ],
  devOps: [
    ["Git", "https://git-scm.com/", gitIcon],
    ["GitHub", "https://github.com/", gitHubIcon],
    ["RegEx", "https://en.wikipedia.org/wiki/Regular_expression", regExIcon],
    ["NPM", "https://www.npmjs.com/", npmIcon],
    ["Webpack", "https://webpack.js.org/", webpackIcon],
    ["Parcel", "https://parceljs.org/", parcelIcon],
    [
      "Chrome DevTools",
      "https://developers.google.com/web/tools/chrome-devtools/",
      chromeDevToolsIcon
    ],
    ["Jest", "https://jestjs.io/", jestIcon],
    ["Google Analytics", "https://analytics.google.com", googleAnalyticsIcon],
    ["Open Graph Protocol", "http://ogp.me/", openGraphIcon],
    ["ESLint", "https://eslint.org/", esLintIcon],
    ["DigitalOcean", "https://www.digitalocean.com/", digitalOceanIcon],
    ["Heroku", "https://www.heroku.com/", herokuIcon],
    ["VirtualBox", "https://www.virtualbox.org/wiki/Downloads", virtualBoxIcon],
    ["Visual Studio", "https://visualstudio.microsoft.com/", visualStudioIcon],
    ["VS Code", "https://code.visualstudio.com/", visualStudioCodeIcon]
  ],
  frontEnd: [
    ["HTML5", "https://www.w3.org/html/", html5Icon],
    ["CSS3", "https://www.w3.org/Style/CSS/", css3Icon],
    [
      "JavaScript",
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      javascriptIcon
    ],
    ["TypeScript", "https://www.typescriptlang.org/", typescriptIcon],
    ["React", "https://reactjs.org/", reactIcon],
    ["Redux", "https://redux.js.org/", reduxIcon],
    [
      "React-Router",
      "https://reacttraining.com/react-router/",
      reactRouterIcon
    ],
    ["Sass", "https://sass-lang.com/", sassIcon],
    ["BEM", "https://en.bem.info/", bemIcon],
    ["Adobe XD", "https://www.adobe.com/products/xd.html", adobeXDIcon],
    ["Figma", "https://www.figma.com/", figmaIcon],
    ["Babel", "https://babeljs.io/", babelIcon],
    ["Bootstrap4", "https://getbootstrap.com/", bootstrapIcon],
    ["Materialize", "https://materializecss.com/", materializeIcon],
    ["Bulma", "https://bulma.io/", bulmaIcon],
    ["jQuery", "https://jquery.com/", jqueryIcon]
  ]
};

export default skills;
