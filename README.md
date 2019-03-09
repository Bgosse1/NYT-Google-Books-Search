# NYT-Google-Books-Search

This application was built with React, Express, Mongodb and Node.js.

The front-end and backend are in the same project so requests from the front end are proxied to the backend.

![NYT-Google-Books-Search](./public/images/ScreenShot.png)

[Deployed Site](https://sheltered-gorge-46172.herokuapp.com/)

### Overview

* Search for a book title and a list of books with that title will be returned from the google books api.

* You can click the view button to redirect to view more information on goolgle.

* You can click the save button to save any books.

* The saved page will return a list of books that are currently saved.


## Installation

To install the application follow the instructions below:

	git clone https://github.com/Bgosse1/NYT-Google-Books-Search.git
	cd NYT-Google-Books-Search
	npm install

Make sure you have mongo setup and running in your local enviornment before running the application.

## Running Locally

To run the application locally and access it in your browser, run

	npm run start or yarn start

The application will now be running locally on port 3000. You can then access it locally from your browser at the URL `localhost:3000`.

The backend will be running on port 3001.