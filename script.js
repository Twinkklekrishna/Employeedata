// ✅ Show the selected page (dashboard or form)
function showPage(page) {
  const dashboard = document.getElementById('dashboard-page');
  const form = document.getElementById('form-page');

  if (page === 'dashboard') {
    dashboard.style.display = 'block';
    form.style.display = 'none';
  } else if (page === 'form') {
    dashboard.style.display = 'none';
    form.style.display = 'block';
  }
}

// ✅ Fetch employee data from external API and display in the table
function loadEmployees() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      const tbody = document.getElementById('employee-table-body');
      tbody.innerHTML = ''; // Clear previous data

      data.forEach(user => {
        const row = `
          <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
          </tr>
        `;
        tbody.innerHTML += row;
      });
    })
    .catch(error => {
      console.error('Error loading data:', error);
    });
}

// ✅ Handle form submission
document.getElementById('employee-form').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent actual form submission

  const formData = new FormData(this);
  const employee = {
    name: formData.get('name'),
    designation: formData.get('designation'),
    location: formData.get('location'),
    salary: formData.get('salary'),
  };

  // Log the new employee to console (you can also save this to localStorage or backend)
  console.log('New Employee:', employee);

  alert('Employee added successfully!');

  // Reset form
  this.reset();

  // Go back to dashboard view
  showPage('dashboard');
});

// ✅ Initialize the app on page load
window.onload = function () {
  loadEmployees(); // Load API data
  showPage('dashboard'); // Show dashboard by default
};
