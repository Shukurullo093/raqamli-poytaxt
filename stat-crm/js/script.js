window.addEventListener("DOMContentLoaded", function () {
    const tableContainer = document.getElementById('excel-table');

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
