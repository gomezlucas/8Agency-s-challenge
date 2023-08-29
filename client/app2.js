function loadTable(subscriptors) {
  const $tbody = document.querySelector('tbody');
  subscriptors.forEach((sub, index) => {
    const tr = document.createElement('tr');
    const rows = ` 
    <th scope="row">${index}</th>
    <td>${sub.name}</td>
    <td>${sub.lastName}</td>
    <td>${sub.email}</td>
    <td>${sub.country}</td>
    <td>${sub.job}</td>
    `;

    tr.innerHTML = rows;
    $tbody.appendChild(tr);
  });
}

function intializeSubcriptorPage() {
  const $tableContainer = document.querySelector('.table-responsive');
  const $loading = document.querySelector('.loading');

  fetch('https://high-telecom.onrender.com/subscriptors', {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  })
    .then((res) => res.json())
    .then((res) => {
      $tableContainer.classList.remove('invisible')
      $loading.classList.add('d-none')
      loadTable(res);
    })
    .catch((error) => console.log('Problem with the server', error));
}

intializeSubcriptorPage();
