document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    document.getElementById('fileInputName').innerText = file.name;
    const reader = new FileReader();

    reader.onload = function (e) {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      // Build HTML table
      let html = '<table border="1">';
      jsonData.forEach(row => {
        // skip empty rows
        if (row.filter(cell => cell !== undefined && cell !== "").length === 0) return;

        html += '<tr>';
        row.forEach(cell => {
          if (typeof cell === 'string' && cell.match(/\.(jpg|png|gif)$/i)) {
            html += `<td><img src="${cell}" width="50" /></td>`;
          } else {
            html += `<td>${cell ?? ''}</td>`;
          }
        });
        html += '</tr>';
      });
      html += '</table>';

      document.getElementById('tableContainer').innerHTML = html;
    };

    reader.readAsArrayBuffer(file);
});