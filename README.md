# 📰📰📰nytreact

📰 Welcome to my NYT React App!

📰 This is my first MERN App!

📰 Uses a Mongo Database to store saved articles (Although it doesn't have any user properties, everyone can see the saved articles)

📰 Express does the routing

📰 Node runs the server

📰 For the React part of this App, I used the main App component with 3 page components that separately render different bootstrap panes in the homepage.  One allows for search and sends the search parameters up with a function callback prop.  The Results page shows the search results from the NYT API and allows you to save articles, which passes a property up to the main app that stores into the Mongo Database.  Lastly the Saved articles component renders all the entries in the mongo database and updates automagically when the user saves a new entry.

📰 Deployed at https://powerful-savannah-65553.herokuapp.com/
