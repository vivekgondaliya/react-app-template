# React Project Template

Below is information reagarding getting started with new React Project for our client(s)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 


TODO - devDependecies vs Dependencies
TODO - See deployment for notes on how to deploy the project on a live system.


### Best Practices
* Commit your package-lock.json - improves installation process 
* Commit package-lock.json individually to avoid noise to our diffs

### Prerequisites

What things you need to install the software and how to install them*
* Visual Studio Code (or preferred Editor)
* node and npm (or yarn, brew, etc) 


### Installing

Clone repo into your local

```bash
git clone https://github.com/vivekgondaliya/react-app-template.git
```
```bash
cd react-app-template
```
```bash
npm install
``` 

### Local Deployment
```bash
npm run watch 
``` 
This will create 'dist' folder with app.bundle.js and index.html that will be used to deploy to production. Will create latest version of both when any file changes in the project.

Open a new terminal window
```bash
npm run start
```
Will server the content from 'dist' folder at 'localhost:8080'. 
On file save change(s) will automatically refresh the page

## Webpack Configuration
* entry point - ./src/index.js
* output - ./dist - app.bundle.js and index.html
* plugins

    * CleanWebpackPlugin() - cleans up ./dist on file changes
    * HtmlWebpackPlugin() - uses intended index.html template instead of generic one with required app.bundle.js. We use this to define custom content in the <head> section such as semantic-ui css
    * HotModuleReplacementPlugin() - helps with automatic page refresh when project file changes
* module - rules defined to interpret js/jsx, css/scss, images
* devtool - helps with debugging indivdaul .js file rathen than app.bundle.js
* devServer - define development server(ie localhost:8080) behavior  
* mode - development | production - TODO

## Running the tests

TODO: Explain how to run the automated tests for this system


### And coding style tests

Explain what these tests test and why

```
Give an example
```




## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
