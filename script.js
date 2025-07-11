 const form = document.getElementById('studentForm');
    const tableBody = document.querySelector('#studentTable tbody');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const gender = document.querySelector('input[name="gender"]:checked').value;
      const course = document.getElementById('course').value;
      const email = document.getElementById('email').value;

      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${course}</td>
        <td>${gender}</td>
        <td>${email}</td>
        <td><button onclick="deleteRow(this)">Delete</button></td>
      `;

      tableBody.appendChild(newRow);
      form.reset();
    });

    function deleteRow(button) {
      const row = button.closest('tr');
      row.remove();
    }