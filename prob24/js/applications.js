const tableContainer = document.getElementById('tableContainer');

window.addEventListener("DOMContentLoaded", function () {
    let liGroup = `<li class="page-item bg-primary">
                        <a class="page-link" href="javascript:void(0);" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">Previous</span>
                        </a>
                    </li>`;
    for (let i = 1; i <= data.length / 10; i++) {
      liGroup += `<li class="page-item" onclick='showPage(${i})'><a class="page-link" href="javascript:void(0);">${i}</a></li>`;
    }
    liGroup += `<li class="page-item">
                        <a class="page-link" href="javascript:void(0);" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                            <span class="sr-only">Next</span>
                        </a>
                    </li>`
    document.getElementById('pagination').innerHTML = liGroup;

    const data1 = data.slice(0, 10);
    if (data1 && data1.length > 0) {
      const table = document.createElement('table');

      // Head
      const headerRow = document.createElement('tr');
      Object.keys(data1[0]).forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Rows
      data1.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
          const td = document.createElement('td');
          td.innerText = value;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });

      tableContainer.appendChild(table);
    } else {
      tableContainer.innerText = 'Ma\'lumot yo‘q.';
    }
});

function showPage(page) {
  const data1 = data.slice((page-1)*10, page*10);
    if (data1 && data1.length > 0) {
      const table = document.createElement('table');

      // Head
      const headerRow = document.createElement('tr');
      Object.keys(data1[0]).forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Rows
      data1.forEach(row => {
        const tr = document.createElement('tr');
        Object.values(row).forEach(value => {
          const td = document.createElement('td');
          td.innerText = value;
          tr.appendChild(td);
        });
        table.appendChild(tr);
      });

      tableContainer.innerHTML = ''; // Clear previous table
      tableContainer.appendChild(table);
    } else {
      tableContainer.innerText = 'Ma\'lumot yo‘q.';
    }
}

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    document.getElementById('fileInputName').innerText = file.name;
    // const reader = new FileReader();

    // reader.onload = function (e) {
    //   const data = new Uint8Array(e.target.result);
    //   const workbook = XLSX.read(data, { type: 'array' });

    //   const sheetName = workbook.SheetNames[0];
    //   const worksheet = workbook.Sheets[sheetName];
    //   const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    //   // Build HTML table
    //   let html = '<table border="1">';
    //   jsonData.forEach(row => {
    //     // skip empty rows
    //     if (row.filter(cell => cell !== undefined && cell !== "").length === 0) return;

    //     html += '<tr>';
    //     row.forEach(cell => {
    //       if (typeof cell === 'string' && cell.match(/\.(jpg|png|gif)$/i)) {
    //         html += `<td><img src="${cell}" width="50" /></td>`;
    //       } else {
    //         html += `<td>${cell ?? ''}</td>`;
    //       }
    //     });
    //     html += '</tr>';
    //   });
    //   html += '</table>';

    //   document.getElementById('tableContainer').innerHTML = html;
    // };

    // reader.readAsArrayBuffer(file);
});

document.getElementById('districtSelect').addEventListener('change', function(event) {
    const selectedDistrict = event.target.value;
    let filteredData = '';
    if (selectedDistrict === "") {
      filteredData = data;
    } else {
      filteredData = data.filter(item => item['яшаш манзили'].includes(selectedDistrict));
    }
    const table = document.createElement('table');

    // Head
    const headerRow = document.createElement('tr');
    Object.keys(filteredData[0]).forEach(key => {
      const th = document.createElement('th');
      th.innerText = key;
      headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    // Rows
    filteredData.forEach(row => {
      const tr = document.createElement('tr');
      Object.values(row).forEach(value => {
        const td = document.createElement('td');
        td.innerText = value;
        tr.appendChild(td);
      });
      table.appendChild(tr);
    });

    tableContainer.innerHTML = ''; // Clear previous table
    tableContainer.appendChild(table);
}
);