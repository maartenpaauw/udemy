"use strict";

var app = {
  title: 'Indecision App',
  subtitle: 'This is some info'
};
var template = React.createElement("div", null, React.createElement("h1", null, app.title), React.createElement("p", null, app.subtitle), React.createElement("ol", null, React.createElement("li", null, "Item one"), React.createElement("li", null, "Item two")));
var user = {
  name: 'Maarten Paauw',
  age: 25,
  location: 'The Netherlands'
};
var templateTwo = React.createElement("div", null, React.createElement("h1", null, user.name), React.createElement("p", null, "Age: ", user.age), React.createElement("p", null, "Location: ", user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
