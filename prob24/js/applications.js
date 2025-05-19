window.addEventListener("DOMContentLoaded", function () {
    const tableContainer = document.getElementById('tableContainer');

    if (data && data.length > 0) {
      const table = document.createElement('table');

      // Head
      const headerRow = document.createElement('tr');
      Object.keys(data[0]).forEach(key => {
        const th = document.createElement('th');
        th.innerText = key;
        headerRow.appendChild(th);
      });
      table.appendChild(headerRow);

      // Rows
      data.forEach(row => {
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