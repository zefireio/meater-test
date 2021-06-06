# Meater Technical Test

This is Meater's Tasty Treats technical test.

## Get Started

```sh
git clone https://github.com/zefireio/meater-test.git meater-test
cd meater-test
npm install
npm run server
```
---
**NOTE**

Create a .env file at the root of the project and add the following environment variables.

- PORT=3000
- APP_NAME="Tasty Treats"

---

## Implementation

The code follows the MVC pattern where controllers, models and views are decoupled. The controllers hold the business logic. The models handles the JSON flat file management. The views handle the UI/UX side of the app.

I have chosen to use JSON to manage the tasty treats contacts collected through the form as it adds structure which makes it easier to manage in the code. There were no specific contraints in the specifications regarding the text file, so I could not see any reasons to not use the JSON format and it remains a text file.

## Improvements/Suggestions

An obvious improvement would be to hide the contact list behind an Auth mechanism. A very basic implementation could be done by setting up environment variables for a username and password for Terence and then setup an express middleware for the contact list routes requiring authentication if not logged in. There are many authentication methods so it's down to preferences.

A CSRF token based mechanism could be added in order to prevent Cross Site Request Forgery.

Backend input validation could be extended in order to handle multiple rules per field.

JSON Data management could be extended in order to handle data updates and deletes allowing Terence to manage his records. 

Finally, the use of a database engine would allow Terence to query data providing more and better information as well as extending the system's capabilities.
