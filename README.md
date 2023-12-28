# Car Models Fetcher

This JavaScript code is designed to retrieve car models associated with a specific car brand from an API endpoint and dynamically display them when a button is clicked.

## Overview

This JavaScript snippet is designed to fetch car models from an API endpoint and dynamically update an HTML element to display the retrieved data.

- **API Endpoint**: The `apiUrl` variable contains the URL to an API endpoint that provides car model data. Replace `API_URL_HERE` with the appropriate endpoint URL.

- **HTML Elements**: 
  - `fetchModelsBtn`: Represents a button element identified by the ID "fetch-models-btn".
  - `modelsContainer`: Represents an HTML element (e.g., a `<div>`) identified by the ID "models-container". This element serves as the display area for the fetched car models.

- **Event Handling**: An event listener is applied to the `fetchModelsBtn` button element, listening for a "click" event.


## Usage

1. Ensure your HTML file includes elements with the following IDs: "fetch-models-btn" for the button and "models-container" for displaying the car models.
2. Replace the `apiUrl` variable with the appropriate URL pointing to an API that provides car model data for a specific car brand.
3. Incorporate this JavaScript code into your project to enable fetching and displaying car models associated with the specified brand.

## Live Site

The live site for this project can be accessed [Click Here](https://car-models-fetcher.vercel.app/).
