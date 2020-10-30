# reactDeveloper-2020

Complete React Developer in 2020 (w/ Redux, Hooks, GraphQL)

# React Concepts

- Don't touch the DOM [USING virtual DOM]
- Build websites like a lego blocks.
- Undirectional data flow [Data only flows in one way so esy to debug]
- UI, The rest uis up to you

# Job of a react developer

- Decide on components

1.  State v/s Props

- Decide the state and where it lives
  1. when the state changes then the state using components only changing.
- What changes when state changes.

# NPM vs Yarn

- Install dependencies from package.json: npm install == yarn

- Install a package and add to package.json: npm install package --save == yarn add package

- Install a devDependency to package.json: npm install package --save-dev == yarn add package --dev

- Remove a dependency from package.json: npm uninstall package --save == yarn remove package

# React App installaton

- nvm install 12.19.0
- npx create-reat-app monsterss-rolodex


# React Component Container
```When building a React application, it is often desirable to divide components based on their primary responsibility,
into Presentational and Container components.
Presentational components are concerned only with displaying data - they can be regarded as, and are often
implemented as, functions that convert a model to a view. Typically they do not maintain any internal state.
Container components are concerned with managing data. This may be done internally through their own state, or
by acting as intermediaries with a state-management library such as Redux. The container component will not
directly display data, rather it will pass the data to a presentational component.```

#  Container component
import React, { Component } from 'react';
import Api from 'path/to/api';
class CommentsListContainer extends Component {
constructor() {
super();
// Set initial state
this.state = { comments: [] }
}
componentDidMount() {
// Make API call and update state with returned comments
Api.getComments().then(comments => this.setState({ comments }));
}
render() {
// Pass our state comments to the presentational component
return (
<CommentsList comments={this.state.comments} />;
);
}
}
// Presentational Component
const CommentsList = ({ comments }) => (
<div>
{comments.map(comment => (
<div>{comment}</div>
)}
</div>
);
GoalKicker.com – React JS Notes for Professionals 41
CommentsList.propTypes = {
comments: React.PropTypes.arrayOf(React.PropTypes.string)
}

# Part 1: Create a React App

This section introduces React basics. You will learn how to bootstrap a new React app with the Create React App CLI. In subsequent parts of the tutorial, you will gradually add new cloud functionality to your application.

> If you want to integrate Amplify Framework into an existing React application, you can skip Part 1 and start directly to Part 2.

### Install the Create React App CLI and Create a New Project
The easiest way to create an React application is with the Create React App Command Line Interface (CLI). To install the CLI, run the following command in your terminal:

```sh
$ npm install -g create-react-app
```

After the installation, go to a location where you wish to start your new application project and execute the following command to create a new React app:

```sh
$ create-react-app amplify-notes
```

### Install Amplify Framework Libraries

Now, you have a new React project called react-notes! You can switch to your project’s root folder and install required Amplify Framework libraries.

```sh
$ cd react-notes
```

  "start": "react-scripts start",
  "build": "react-scripts build",
  "test": "react-scripts test",
  "eject": "react-scripts eject"

# Create react App

`https://create-react-app.dev/docs/getting-started/`

# Bable will help to run the javascript file in all the versions.

- Build is the folder where the program runs.
- src is our source file

- index.js >> React library >>allows to write the html syntax inside App.js
- reactDOm is a little robot from the previous section.

# Example of jsx

```<div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState({string: 'Hello Sarath'})}> Change Text</button>
          <button onClick={() => this.setState({string : 'Hello Friend'})}>Second button</button>
        </header>
      </div>

```

# JXS is trying to mimc what HTML does!

```
 <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            {this.state.string}
          </p>
          <button onClick={() => this.setState({string: 'Hello Sarath'})}> Change Text</button>
          <button onClick={() => this.setState({string : 'Hello Friend'})}>Second button</button>
        </header>
```

# Array methods

1. includes()
2. map()
3. filter()
4. reduce()
5. find()

# The key will helps react to know which elements is to be updated. So it is important to provide a key in the object.

## Optional map key attribute

```
import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          name: "Frakerstein",
          id: "asc1",
        },
        {
          name: "Dracula",
          id: "asc2",
        },
        {
          name: "Zombie",
          id: "asc3",
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => (
          <h1 key ={monster.id}> {monster.name}</h1>
        ))}
      </div>
    );
  }

}
export default App;
```

- rendrer is comes along with react component
  \*super() helps us with this by calling REact.Component's constructor()

# ComponentDidMount - to fetch the url

# React

- React library helps to manipulate the DOM efficiently.
- Asyncronous will happen sometime in the future.Async will wait for complete the task.
- Props as a parameter in constructor helps to use parameter in state. you canuse this.props inside of a constructor.

# State VS Props

- If the state changed with the `setstate` where the monsters pass down to components will recive new `props` that means the component has to `render()` If that component has a new prop information will pass to other components.

### Each components are the function that is render.

### ALL the components in the setstaate carried out a renedr function.

```
<input
          type='search'
          placeholder='Search monsters'
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        />
```
# .bind is a method to return a new function

# setState()

* The primary way that you make UI updates to your React applications is through a call to the setState() function.
This function will perform a shallow merge between the new state that you provide and the previous state, and will
trigger a re-render of your component and all decedents.

# Parameters
1.  updater: It can be an object with a number of key-value pairs that should be merged into the state or a
function that returns such an object.

2. callback (optional): a function which will be executed after setState() has been executed successfully.
Due to the fact that calls to setState() are not guaranteed by React to be atomic, this can sometimes be
useful if you want to perform some action after you are positive that setState() has been executed
successfully.

# Usage:
The setState method accepts an updater argument that can either be an object with a number of key-value-pairs
that should be merged into the state, or a function that returns such an object computed from prevState and
props.

# Props in React

* props are used to pass data and methods from a parent component to a child component.
Interesting things about props
1. They are immutable.
2. They allow us to create reusable components.


```class Parent extends React.Component{
 doSomething(){
 console.log("Parent component");
 }
 render() {
 return <div>
 <Child
 text="This is the child number 1"
 title="Title 1"
 onClick={this.doSomething} />
 <Child
 text="This is the child number 2"
 title="Title 2"
 onClick={this.doSomething} />
 </div>
 }
}
class Child extends React.Component{
 render() {
 return <div>
 <h1>{this.props.title}</h1>
 <h2>{this.props.text}</h2>
 </div>
 }
}
```
# React Component Container
```When building a React application, it is often desirable to divide components based on their primary responsibility,
into Presentational and Container components.
Presentational components are concerned only with displaying data - they can be regarded as, and are often
implemented as, functions that convert a model to a view. Typically they do not maintain any internal state.
Container components are concerned with managing data. This may be done internally through their own state, or
by acting as intermediaries with a state-management library such as Redux. The container component will not
directly display data, rather it will pass the data to a presentational component.
```

# Container component

import React, { Component } from 'react';
import Api from 'path/to/api';
class CommentsListContainer extends Component {
constructor() {
super();
// Set initial state
this.state = { comments: [] }
}
componentDidMount() {
# Make API call and update state with returned comments
Api.getComments().then(comments => this.setState({ comments }));
}
render() {
// Pass our state comments to the presentational component
return (
<CommentsList comments={this.state.comments} />;
);
}
}
// Presentational Component
const CommentsList = ({ comments }) => (
<div>
{comments.map(comment => (
<div>{comment}</div>
)}
</div>
);
# GoalKicker.com – React JS Notes for Professionals 41
CommentsList.propTypes = {
comments: React.PropTypes.arrayOf(React.PropTypes.string)
}

# Basic Component
* Given the following HTML file:
* index.html
``
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8" />
<title>React Tutorial</title>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.2.1/react-dom.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
</head>
<body>
<div id="content"></div>
<script type="text/babel" src="scripts/example.js"></script>
</body>
</html>
```





