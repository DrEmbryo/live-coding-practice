# Task №1 Login Form

## Problem statement

The interviewee presented with plain HTML form like this:

    <form>
    <label htmlFor="username">Username:</label> <br />
    <input type="text" id="username" name="username" value="John" /> <br />
    <label htmlFor="password">Password:</label>
    <br />
    <input type="text" id="password" name="password" value="123" />
    <br />
    <button>Log in</button>
    </form>

The task of the Interviewee is to modify that form to have some additional functionality

## The application should have functionality listed below:

- An ability to make a request to API with credentials listed in api.ts
- An ability to show data as a result of API request
- An ability to toggle password visibility

API specification can be found on dummyjson.com/docs

## Restrictions:

- The solution should be done without any additional libraries
- The time limit for react + js solution should be 1h
- The time limit for react + ts solution should be 1.5h
