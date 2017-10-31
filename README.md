Getting Started With MEAN APP
===================================

## Set up the Project and Dependencies

    echo "# meanapp" >> README.md
   	$ git config --global user.name "Endri Azizi" 
    $ git config --global user.email endri.azizi@gmail.com
    $ git config --list
    git init
    git add .
    $git commit -m "first commit"
    $git remote add origin https://github.com/endriazizi/meanapp.git
    $git push -u origin master


    $ git config --global user.name "Endri Azizi" $ git config --global user.email endri.azizi@gmail.com
    $ git config --list
    $ git init
    $ git commit -m "Set up the Project and Dependencies, create the Main Server File"
    

There are a few dependencies here, so let’s talk through what each of them does:

- ***bcrypt-nodejs*** allows us to use a hashing algorithm to secure passwords stored in our database
- ***body-parser*** is middleware for our express server, that allows us to parse request bodies
- ***cors*** will deal with any Cross Origin Resource Sharing (CORS) issues we might run into
- ***express*** is of course the express server itself, which is a simple server framework for Node
- ***jsonwebtoken*** allows us to create, sign, and read JSON Web Tokens
- mongoose allows us to easily work with objects in our MongoDB database
- ***morgan*** outputs some useful debugging information for us
- passport is our authentication middleware
- ***passport-jwt*** is one of Passport’s authentication “Strategies” which are like plugins
- ***passport-local*** is another Passport Strategy, which uses simple username and password authentication

	- example.

Our package.json how looks like:

    {
      "name": "meanapp",
      "version": "1.0.0",
      "description": "MEAN STACK authentication app",
      "main": "app.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start":"node app"
      },
      "dependencies":{
        "express":"*",
        "mongoose":"*",
        "bcryptjs":"*",
        "cors":"*",
        "jsonwebtoken":"*",
        "body-parser":"*",
        "passport":"*",
        "passport-jwt":"*"
      },
      "author": "Endri Azizi",
      "license": "ISC"
    }



# Node Authentication API

API for registering users with mongodb and authentication using a JWT (json web token). This app uses passport and passport-jwt and uses a JWT strategy

### Version
1.0.0

## Usage

```bash
npm install
```

```bash
npm start
```

##Endpoints
```bash
POST /users/register
```

```bash
POST /users/authenticate   // Gives back a token
```

```bash
GET /users/profile         // Needs json web token to authorize
```

# FRONTEND

Angular4 Frontend:

    npm install -g angular-cli

    ng new MeanAppAngular4

    change di dir on angular-cli.json
    
    http://localhost:4200

CREATE COMPONENT USING ANGULAR CLI

    ng g component navbar


## Some links for more in depth learning
### Hands on / interactive learning
* [Learn Version Control with Git](https://www.git-tower.com/learn/ebook) A website for learning Git. Appears to cost money but has a free html book.


### Purely text based resources
* [Git: No Deep Sh*t](http://rogerdudler.github.io/git-guide/) A super simplified way of explaining git, basically a cheatsheet.



The Git Flow
==================

The following snippet is designed to explain Vincent Driessen's [git branching model](http://nvie.com/posts/a-successful-git-branching-model/), at least as well as I understand it. Special thanks to [Stephen Koch](https://twitter.com/skoch) for being the true master here.

A way to think about Git and Github.
------------
Milestones of milestones of milestones. In other words:

- Open up a text editor.
- Type "Hello World".
- Save this file.
  - You have now created a "milestone" on your hard drive of this text.
	- You can now retreive that milestone by double clicking it to re-open it in your text editor.
	

		git commit -am "By typing this command I am saving a collection of saved files."

- This is great because now we can roll back to old versions of files without having to retype. Aka "source control".
- However, wouldn't it be great if we could further save milestones in the cloud?
	- Aka milestones of milestones of milestones.
		- Github -> Git -> Save
- Github is two things:
	- git, in the cloud
	- a social network around source code
- All you need to do to push to Github:

		git push origin master

- Now one could "clone" that repository on another computer and not just get the latest code but the complete revision history on another computer.



Setting up
------------
Assuming your project is in a folder named "Project" on your Desktop.

### Starting from scratch
	cd ~/Desktop/Project
	git init
	git checkout -b develop
	touch README.md

	
- Determine your SSH clone url. On Github it's probably something like ***git@github.com:USERNAME/PROJECT.git***. Should be on the project's page somewhere.
- Add your remote.
	
		git remote add origin {{the link you just copied}}

- Breaking that down
	- git :: The git command
	- remote add :: We're adding a remote connection for this repository
	- origin :: We're naming the remote "origin". You can also call this "github" or "bananasauraus" if you'd like.


### Cloning an existing repository.

- Determine your SSH clone url. On Github it's probably something like ***git@github.com:USERNAME/PROJECT.git***. Should be on the project's page somewhere.

		cd ~/Desktop
		git clone {{the link you just copied}} Project

- This creates a directory named "Project", clones the repository there and adds a remote named "origin" back to the source.

		cd Project
		git checkout develop

- If that last command fails

		git checkout -b develop

Updating/The Development Cycle
------------
You now have a git repository, likely with two branches: master and develop. Now bake these laws into your mind and process:

####You will never commit to ***master*** directly.
####You will never commit to ***develop*** directly.

Instead, you will create ***feature branches*** on your machine that exist for the purpose of solving singular issues. You will always base your features off the develop branch.
        
        git checkout develop
		git checkout -b my-feature-branch

This last command creates a new branch named "my-feature-branch" based off of develop. You can name that branch whatever you like. You should not have to push it to Github unless you intend to work on multiple machines on that feature.

Make changes.
	
    git add .
	git commit -am "I have made some changes."

This adds any new files to be tracked and makes a commit. Now let's add them to develop.

	git checkout develop
	git merge --no-ff my-feature-branch
	git push origin develop

Releasing
------------
Finished with your project?

- Create a feature branch as normal.
- Update the version history in the README.md file
- Update this to develop as normal.

		git checkout master
		git merge --no-ff develop
		git push origin master
		git tag v1.0.0
		git push origin v1.0.0

Replace 1.0.0 in the snippet here with your appropriate versions. Now you have a tag saved.