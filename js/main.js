// 🔵 1. Declare global variable
let myData = [];

// 🔵 2. Load data from JSON
fetch('data/data.json')
    .then(response => response.json())
    .then(data => {
        myData = data;
        data.forEach(obj => {
            addItemToDOM(obj.item);
        });
    });

// 🔵 3. Functions
function addItem(e) {
    e.preventDefault();
    const input = document.getElementById('itemInput');
    const newItem = input.value.trim();

    if (newItem) {
        const newObj = {
            id: Date.now(),
            item: newItem
        };
        myData.push(newObj);
        addItemToDOM(newObj.item);
        input.value = '';
    }
}

function addItemToDOM(itemText) {
    const div = document.createElement('div');
    div.className = 'list-item';

    const span = document.createElement('span');
    span.textContent = itemText;
    span.className = 'editable-text';

    const editBtn = document.createElement('button');
    editBtn.textContent = 'Edit';
    editBtn.onclick = function () {
        if (editBtn.textContent === 'Edit') {
            span.contentEditable = true;
            span.focus();
            editBtn.textContent = 'Save';
        } else {
            span.contentEditable = false;
            editBtn.textContent = 'Edit';
        }
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Remove';
    deleteBtn.onclick = function () {
        confirmDelete(deleteBtn);
    };

    div.appendChild(span);
    div.appendChild(document.createTextNode(' '));
    div.appendChild(editBtn);
    div.appendChild(deleteBtn);

    document.querySelector('.link-list').appendChild(div);
}

function confirmDelete(button) {
    if (confirm("Are you sure you want to delete this item?")) {
        button.parentElement.remove();
    }
}

function loadSampleData() {
    document.getElementById('itemInput').value = "Sample Item 🧸";
}

function exportData() {
    const items = document.querySelectorAll('.list-item');
    const data = [];

    items.forEach((item, index) => {
        const span = item.querySelector('.editable-text');
        if (span) {
            data.push({
                id: index + 1,
                item: span.textContent.trim()
            });
        }
    });

    console.log(JSON.stringify(data, null, 2));
}

// 🔵 4. jQuery Setup
$(document).ready(function() {
    console.log("Document is ready!");

    // Attach submit event to form
    $('.add-form form').on('submit', addItem);

    // Dummy login behavior
    let loggedIn = false;

    $('#loginForm').submit(function(e) {
        e.preventDefault();
        const username = $('#usernameInput').val();
        if (username.trim() !== "") {
            loggedIn = true;
            $('#loginBtn').text('Logout');
            $('#loginModal').modal('hide');
            alert('Logged in successfully as ' + username);
        }
    });

    $('#loginBtn').click(function() {
        if (loggedIn) {
            loggedIn = false;
            $('#loginBtn').text('Login');
            alert('You have been logged out.');
        }
    });
});
