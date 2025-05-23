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
- After running `node app.js`, and the server responds,
- On `/` (home page), enter an author, any text (exact match or a keyword) to look for in a quote, AND/OR a tag (functionally a genre) associated with the quote.
    - Example: 
    ```
            .query({
        author: 'twain',
        quote: '',
        tag: 'humor'
      })
    ```
    (This is what the `/data` will receive in code. In other words, the programmatic call behind your HTML form entry with your desired characteristics.)

#### How to RECEIVE:
- Hit submit from said form on `/` (home). Will return a JSON array.

- Previous example query's output:

```
[
  {
    "id": 411,
    "text": "“Substitute 'damn' every time you're inclined to write 'very;' your editor will delete it and the writing will be just as it should be.”",
    "author": "Mark Twain",
    "book": "",
    "tags": "humor, writing",
    "likes": 9618
  },
  {
    "id": 447,
    "text": "“Reader, suppose you were an idiot. And suppose you were a member of Congress. But I repeat myself.”",
    "author": "Mark Twain",
    "book": "",
    "tags": "humor, politics",
    "likes": 9081
  },
  # etc...
```

#### UML Diagram

![uml diagram](https://github.com/imckee-dev/find-book-quotes-ms/blob/0dff538615c2b88029aaddcfd3011a346443c5e5/uml_diagram.jpg)

##### User stories fulfilled:
1. Given I’m in the request book quotes menu, when I provide a specific author, then the ones from the author I want should be retrieved by default, and I’m able to narrow them down by date or other characteristics.
2. Given access to the API of book data, when I provide a book title that’s available in the database, then I can return its related metadata (author, year published, genre).
3. Given a request-quotes-by-genre option available, when I provide a specific tag/genre, then I receive all, or the first 1000, quotes with that characteristic.