// Sample data for demonstration purposes
const groupsData = [
  { name: 'Group 1', course: 'C', description: 'BASIC CONCEPTS OF C' },
  { name: 'Group 2', course: 'C++', description: 'DATA STRUCTURES' },
  // Add more sample groups here...
];

// Function to display available study groups
function displayGroups() {
  const groupsList = document.getElementById('groups-list');
  groupsList.innerHTML = '';

  groupsData.forEach(group => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${group.name}</strong> - ${group.course}<br>${group.description}`;
    groupsList.appendChild(li);
  });
}

// Function to handle form submission and create a new study group
function createGroup(event) {
  event.preventDefault();

  const groupName = document.getElementById('group-name').value;
  const course = document.getElementById('course').value;
  const description = document.getElementById('description').value;

  // For demonstration purposes, pushing a new group to the sample data
  groupsData.push({ name: groupName, course, description });

  displayGroups();
  document.getElementById('group-form').reset();
}

// Event listener for form submission
document.getElementById('group-form').addEventListener('submit', createGroup);

// Display initial groups on page load
displayGroups();
