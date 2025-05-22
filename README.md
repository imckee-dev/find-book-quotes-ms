# find-book-quotes-ms
return book quotes microservice

## Source for quote_data_convert.json:

https://www.kaggle.com/datasets/zachmlong/quotes (quote_data.csv)
and GoodReads.

## Communication Contract

Steps to install/run server:
1. make sure you have node (`brew install node` is what I did)
2. `npm install` in terminal at the root folder will get you Express. Jest/Supertest for testing also.
3. `node app.js` from root to start server.
4. `npx jest` to run Jest/Supertest tests.

#### How to REQUEST:
- This uses Express.js. 
- After running `node app.js`, on `/` (home page), enter an author, any text (exact match or a keyword) to look for in a quote, AND/OR a tag (functionally a genre) associated with the quote.

#### How to RECEIVE:
- Hit submit on `/` (home). Will return a JSON array

##### User stories fulfilled:
1. Given I’m in the request book quotes menu, when I provide a specific author, then the ones from the author I want should be retrieved by default, and I’m able to narrow them down by date or other characteristics.
2. Given access to the API of book data, when I provide a book title that’s available in the database, then I can return its related metadata (author, year published, genre).
3. Given a request-quotes-by-genre option available, when I provide a specific tag/genre, then I receive all, or the first 1000, quotes with that characteristic.