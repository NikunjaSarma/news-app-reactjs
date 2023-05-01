# NEWS APP

Introducing my latest project, a news app built with React and powered by NewsAPI!

With this app, you can stay up-to-date on the latest news from around the world, all in one convenient place. Whether you're interested in politics, technology, sports, or entertainment, you can easily find articles on your favorite topics and discover new ones.

This app is designed with a user-friendly interface that is easy to navigate, making it simple to find the news that matters to you. The app features a clean and modern design, ensuring that the focus is on the content.

One of the key features of this app is its integration with NewsAPI, a powerful news aggregator that provides access to thousands of news sources from around the world. This means that you'll have access to a wide variety of perspectives and viewpoints, ensuring that you're always informed and up-to-date.

But that's not all – this app also includes advanced features like search functionality, filtering by category, and the ability to save your favorite articles for later. And because it's built with React, it's fast and responsive, delivering a seamless user experience.

This news app is now available on GitHub, so you can check out the code and make it your own. Whether you're a seasoned developer or just getting started, this app is a great way to showcase your skills and create something that will be useful for others. So why wait? Check it out today!

## Table of Contents

- [Installation](https://www.notion.so/Git-hub-5039b42d4a544e339821648f5edc1bff)

## Installation

List of steps required to install and set up the project.

```bash
npm install --global yarn
yarn
```

Go to [**NewsApi**](https://newsapi.org/)

Sign in as developer for free API

```bash
// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './Components/Navbar'
import News from './Components/News'

function App() {

// Copy your API key to your clipboard.
// Paste your API key below, replacing the empty string with your actual key:

let ApiKey = "paste-your-api-key-here";
  // const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <News country={"in"} api={ApiKey} pageSize={20}/>

    </>
  )
}

export default App
```
