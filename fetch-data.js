// 1. Create an async function to get user data
async function fetchUserData() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // 2. API URL
    const dataContainer = document.getElementById('api-data'); // 3. Get the div to display names

    try {
        // 4. Fetch data from the API
        const response = await fetch(apiUrl);
        const users = await response.json(); // 5. Convert the data to JSON

        // 6. Clear the loading message
        dataContainer.innerHTML = '';

        // 7. Create a list to hold user names
        const userList = document.createElement('ul');

        // 8. Loop through each user and add their name to the list
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // 9. Add the list to the page
        dataContainer.appendChild(userList);

    } catch (error) {
        // 10. Show error message if something goes wrong
        dataContainer.innerHTML = 'Failed to load user data.';
        console.error('Error fetching user data:', error);
    }
}

// 11. Run the function after the page has fully loaded
document.addEventListener('DOMContentLoaded', fetchUserData);