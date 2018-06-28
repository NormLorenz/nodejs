### https://codewithmosh.teachable.com/courses/293204/lectures/4509750

* Chrome uses V8 javascript engine
* Ryan Dahl invented Node
* In the browser we have a 'window' global scope object which we can attach variables and functions
* The window object is replaced in node as the global object
* However variables and funcions in node are not added to the global object but instead scoped to the file which they reside
* In node every file is considered a module
* Variables and functions defined to are scoped to the file they reside
* A node module is a JSON object - try console.log(module);
* Run jshint from the command line
* module.exports can export a single function or an object
* object destructuring
* nodemon

* immediatly invoked function expression or IIFE is a wrapper around each module (module wrapper function)

```javascript
(function (exports, require, module, __filename, __dirname) {

}
```

* on the require statement an argument without . or ./ etc. is assumbed to be a built in function or class otherwise node will check the path to find the module. The .js can be eliminated.
* you should always use the non blocking functions (asynchronous);
* on the require statement if the var or const are pascal cases, that indicates that this is a class its not a function and it not a simple value
* when a method is in a class it is called a function


* to determine the exact version of each package use 'npm list'
* to determine the high level version use 'npm list --depth=0'
* to view registry info for a package use 'npm view mongoose'
* to view on the dependencies use 'npm view mongoose dependencies'
* to view versions use 'npm view mongoose versions'
* to load a specific version use 'npm install mongoose@2.4.2'
* to find outdated packages use 'npm outdated'
* to update packages use 'npm update'
* to uninstall a package use 'npm uninstall mongoose'
* to find global outdated packages use 'npm -global outdated'
* to update the version minor number use 'npm version minor

* jshint

## SETUP GIT

* setup a git repro on thumbdrive - DONE
  * mkdir esp32-getting-started
  * cd esp32-getting-started
  * git init --bare
* setup a git on local drive - DONE
  * git remote add origin /media/norm/TRAVELDRIVE/gitMaster/nodejs
  * git config branch.master.remote origin
  * git config branch.master.merge refs/heads/master
  * git config --list

## SETUP GIT on GITHUB

### create a new repository on the command line
echo "# nodejs" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/NormLorenz/nodejs.git
git push -u origin master

### push an existing repository from the command line
git remote add origin https://github.com/NormLorenz/nodejs.git
git push -u origin master


