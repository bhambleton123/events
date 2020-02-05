# Viagogo Code Challenge

## Setup

Just open index.html in a web browser.

## Part 1

Decided to go with vanilla Javascript to keep things simple. Events are initially rendered on the screen in render.js.

## Part 2

Created a new file-- location.js-- to separate out the logic a bit for the filter by location feature. File contains a function that takes in the events object and appends a select element containing all of the cities contained in the events object. Select contains an onchange function that filters all of the cities to the one matching the value of the select and re-renders the events based on that new object.

## Part 3

One issue that I can see with filtering the object by location is that it doesn't allow the user to filter based off of any other criteria. One could implement a feature that allows the user to filter by multiple things, such as by location, a range of dates, and a price range. Filters could have a checkbox that allows the user to filter based off of one, two, or three different criteria. This would allow the user to gain information about events that are catered more towards what the user specifically wants and it's especially useful when dealing with larger data sets.
