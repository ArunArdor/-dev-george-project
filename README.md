# -dev-george-project

## Author
- **Name:** Arun Batta
- **GitHub Profile:** [@ArunArdor](https://github.com/ArunArdor)

## Attribution
- [Bootstrap 5](https://getbootstrap.com/)
- [Normalize.css](https://necolas.github.io/normalize.css/)
- [jQuery](https://jquery.com/)
- [jQuery UI](https://jqueryui.com/)

## User Story
As a casual user,  
I want to log in and add, edit, delete items dynamically,  
So that I can manage a custom list interactively.

## Narrative
This project started from a basic "Dev-Able" app. In this final version, I upgraded the project by:
- Loading initial data from a JSON file.
- Building a dummy login system using a Bootstrap modal.
- Allowing users to add new entries.
- Enabling edit and delete operations dynamically.
- Exporting all current data in JSON format via the console.
The app uses modern front-end techniques and libraries for better user interaction and accessibility.

## Features
- Load data from external JSON file.
- Dummy login system (no authentication).
- Add/Edit/Delete list items dynamically.
- Export data to console.
- Responsive layout using Bootstrap 5.

## Future App Ideas
[Link to Issue Tracker]

- Add a search/filter functionality.
- Sort items alphabetically or by creation date.
- Save new data permanently using localStorage or a back-end.

## Cool Code Snippet
```javascript
function exportData() {
    console.log(JSON.stringify(myData, null, 2));
}
