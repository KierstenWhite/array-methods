/* 
Src - sources (so all html, css, and js)
    - dataAccess.js - move all functions to there and import database file

API - db.json
    - .json server is a mock database (not real, just giving us the resource to learn with imitating real databases)
    - you make an object{} and then put in a table with more objects - we use quotes with .json - WHY?
    - to serve: must be in api in terminal; use " json-server -p 8088 -w nameofjsonfile.js
        - if working, it will say Resources says localhost:8088/whateverresourceyougaveit
        - if not working, it will create resources you didn't want, will show posts, comments, profile
        - when we make a fetch call, we're not pulling from database/javascript anymore
        - local machines hosting a server creating an api; pulling from a mock web api
        
transient state - just an object
    - get "plumbers" from API and store them in my transient state (taking them from the web, stick it in the JS so I can use them somewhere else), empty array
    - fetch is just a function itself (JS already made it)

Example (in dataAccess.js):

export const fetchPlumbers = () => {
        return fetch(`http://localhost:8088/plumbers`) ---------- fetching from the web based api; when it lives in the web, it's just a string; so we make it into something we can use
    .then(response => response.json())
    .then(parsedrequest => {                          --------- after putting it into json, we can put it into a list of objects, must be in .then or it will disappear. 
        state.plumbers = parsedrequest
    })
}

export const getState = () => ({...state}) ----------- returns copy of state


Example (in main.js)

import {fetchPlumbers, getState } from "./dataAccess.js";


http request


const state = getState()

console.log(state)

fetchPlumbers()
.then(() => {

    state = getState()
    console.log(state) ---- only inside of this request will we have getState() information so we have to console.log() there to see it and call it

    get - default http request - requesting data from it
})











developer - makes websites, make databases
    - deal with where your data goes (like facebook posts, etc.)
*/