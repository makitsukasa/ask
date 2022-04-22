window.onload = function() {
	tbody = document.getElementById("tbody");
	for (var anken of ankens.sort()) {
		// <tr>
		var tr = document.createElement("tr");
		tbody.append(tr);
			// <th>
			var th = document.createElement("th");
			tr.append(th);
			th.innerHTML = anken;
			// </th>
			// <td>
			var td = document.createElement("td");
			tr.append(td);
				// <iframe>
				var iframe = document.createElement("iframe");
				td.append(iframe);
				iframe.src = "./" + anken + "/$status.html";
				// </iframe>
			// </td>
			// <td>
			var td = document.createElement("td");
			tr.append(td);
				// <a>
				var a = document.createElement("a");
				td.append(a);
				a.href = "./" + anken + "/$status.html";
				a.target = "_blank";
				a.innerHTML = "status";
				// </a>
			// </td>
			// <td>
			var td = document.createElement("td");
			tr.append(td);
				// <a>
				var a = document.createElement("a");
				td.append(a);
				a.href = "./" + anken + "/$before.html";
				a.target = "_blank";
				a.innerHTML = "before";
				// </a>
			// </td>
			// <td>
			var td = document.createElement("td");
			tr.append(td);
				// <a>
				var a = document.createElement("a");
				td.append(a);
				a.href = "./" + anken + "/$after.html";
				a.target = "_blank";
				a.innerHTML = "after";
				// </a>
			// </td>
		// </tr>
	}
};
