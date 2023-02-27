## React Search News App

#### Problem Statement

Create the following application the boilerplate code provided .

## Submission Instructions [Please note]

## Maximum Marks - 16

- The Submission should not contain spaces, for example /rct-101 folder/eval will not work
- Do not push node_modules and package_lock.json to github

```
 ✅ able to submit the app - 1 mark ( minimum score )
 ✅ Check if the news for India is rendered by default on the dashboard  - 3 marks
 ✅ Check if the news for India is rendered by default on the search page - 3 marks
 ✅ Check if sidebar links are working properly - 3 marks
 ✅ Check if clicking enter in the search bar is redirecting to the search page - 3 marks
 ✅ Check if search functionality is working properly - 3 marks
```

## Installation

- Use node version >=14 and <17 (v16.16.0 is recommended)
- please make sure you do not push package-lock.json

- Download and unzip the boilerplate file and then copy the "**contents**" of the unzipped file in the Masai Folder.
- Navigate to the Masai Folder, in VS Code.
- Run the following commands inside,
  - `npm install`
  - `npm start`
  - `npm run server` -> to start the json-server
- **_Note_**:

1. Libraries need to be installed by yourself
2. Make sure that the json-server is up and running at port `8080`
3. Create a .env file. Include `REACT_APP_JSON_SERVER_PORT=8080` in it and restart the react server
4. Use `http://localhost:${process.env.REACT_APP_JSON_SERVER_PORT}` as the json-server url where ever you use `http://localhost:8080`

### Not following the above instructions will lead your test cases to fail

## Problem

**_Note_**: Make sure you start `json-server` on `8080` port with provided `db.json` file, then only you will be able to fetch data on this website.

## Understanding Component Structure

- Routes
- Components
  - Dashboard.jsx (should be rendered on route "/")
  - SearchResults.jsx (should be rendered on route "/search")
  - Navbar (should be rendered on every page)
  - Sidebar (should be rendered on every page)
- App.js

**Note** - `Make sure you use only the given components and don't create new files and folders. Changing the component name, and structures might result in giving you zero marks.`

## Understanding Data Structure

- [db.json](./db.json)
  - Initial News data should be fetched using json-server only after the application opens.

**Note** - `Make sure you use only the given data and don't create new data. Changing data might result in giving you zero marks`

## Features to build

Create a new app where users would be able to search for news for any category (eg. technology, business, general, etc). Also, show different countries' links for news on the sidebar for easy access.

## Components to build

 - Dashboard
 
   1. Page will have a navbar and a sidebar.
   2. On clicking a country in the sidebar, the updated news data should be shown here
   3. Show results filtered by country = India, by default
 
 - SearchResults
  
   1. Page will have a navbar and a sidebar.
   2. On clicking enter in the search bar (navbar), the updated news data should be shown here
   3. Show results filtered by country = India, by default (if there is no search key)

 - Navbar
 
  1. Navbar will have a link to the home page and search input box, and the sidebar will have links to different country news.
  2. On pressing Enter, the user should be able to search by category and the results should be displayed on the searchResults component thus the page should be redirected to "/search.
- **_Note_**: for getting the results by category use ***/news?category_like=${searchKey}. so that you get the results based on the search query(this will give the results which contain searchkey as a substring of a category).
  
 - Sidebar 
 
  1. This will have a list of 5 countries already given to you.
  2. On clicking any country, show the news data filtered by that country (make sure to use the country code to filter data and not the country name)
  3. Handle the filter logic by json server itself (Ref: https://github.com/typicode/json-server)
  2. On clicking on a particular country on the sidebar, users should be able to see news of that country on Dashboard.

- **_Note_**: Whenever you are searching for filtered results search like category_like=business or country_like=in
don't filter like using category=bus in the query params for the above problem.

<img width="1725" alt="Screenshot 2023-01-19 at 12 42 38 PM" src="https://user-images.githubusercontent.com/39851506/213464964-37194232-6649-4d1c-9024-7ac9109e4237.png">
<img width="1727" alt="Screenshot 2023-01-19 at 12 42 51 PM" src="https://user-images.githubusercontent.com/39851506/213464977-9f679f1a-807d-4d49-8ea5-20532bc8fc8f.png">
<img width="1728" alt="Screenshot 2023-01-19 at 12 43 07 PM" src="https://user-images.githubusercontent.com/39851506/213465013-98cf20bc-163d-48da-97c0-9ef8472928ab.png">


## General Instructions (**_IMPORTANT_**)

1. Do not use Global CSS, instead use `<componentName>.module.css` convention for Css in that file.
2. Do Not Remove `data-cy="xxxx"` from anywhere, this are used by testing tools to test your code, removal of this will lead to low score.
3. Make sure you use only the given components and dont create new files and folders as chaging component name, structures might result in giving you zero marks
4. Make sure you use only the given data and dont create new data, as chaging data might result in giving you zero marks.

**Note** - This might not be all the things, you are free to use other components.

#### General guidelines

- The system on cp.masaischool.com may take between 1-20 minutes for responding,
- so we request you to read the problem carefully and debug it before itself
- we also request you not just submit it last minute
- try to keep one submission at a time
