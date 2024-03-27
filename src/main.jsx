//import React from 'react';
import ReactDOM from 'react-dom/client';
import { Restaurants } from './components/Restaurants/Restaurants';

ReactDOM.createRoot(document.getElementById('root')).render(<Restaurants />);

// React.createElement("div", {
//   children: [
//   React.createElement("h2", {children: restaurants[0].name}),
//   React.createElement("h3", {children: "Menu:"}),
//   React.createElement("ul", {children: [
//     React.createElement("li", {children: restaurants[0].menu[0].name}),
//     React.createElement("li", {children: restaurants[0].menu[1].name}),
//     React.createElement("li", {children: restaurants[0].menu[2].name})
//   ]}),
//   React.createElement("h3", {children: "Reviews:"}),
//   React.createElement("ul", {children: [
//     React.createElement("li", {children: restaurants[0].reviews[0].text}),
//     React.createElement("li", {children: restaurants[0].reviews[1].text}),
//   ]}),
//  })
