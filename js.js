const timetables = {
1: `
<table>
<thead>
    <tr>
        <th>Time</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>08:00 - 09:00</td>
        <td>EG</td>
        <td>MATHS</td>
        <td>Physics 101</td>
        <td>Chemistry 101</td>
        <td>LAB</td>
    </tr>
    <tr>
        <td>09:00 - 10:00</td>
        <td>LAB</td>
        <td>Math</td>
        <td>EG</td>
        <td>Physics </td>
        <td>Chemistry </td>
    </tr>
    <!-- Add more rows as needed -->
</tbody>
</table>
`,
2: `
<table>
<thead>
    <tr>
        <th>Time</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>08:00 - 09:00</td>
        <td>FODS</td>
        <td>MATHS</td>
        <td>DSA</td>
        <td>OOPS</td>
        <td>DPCO</td>
    </tr>
    <tr>
        <td>09:00 - 10:00</td>
        <td>MATHS</td>
        <td>OOSE</td>
        <td>DSA</td>
        <td>FODS</td>
        <td>DPCO</td>
    </tr>
    <!-- Add more rows as needed -->
</tbody>
</table>
`,
3: `
<table>
<thead>
    <tr>
        <th>Time</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>08:00 - 09:00</td>
        <td>DC</td>
        <td>TOC</td>
        <td>BA</td>
        <td>EDA</td>
        <td>IOT</td>
    </tr>
    <tr>
        <td>09:00 - 10:00</td>
        <td>TOC</td>
        <td>BA</td>
        <td>IOT</td>
        <td>FSWD</td>
        <td>DC</td>
    </tr>
    <!-- Add more rows as needed -->
</tbody>
</table>
`,
4: `
<table>
<thead>
    <tr>
        <th>Time</th>
        <th>Monday</th>
        <th>Tuesday</th>
        <th>Wednesday</th>
        <th>Thursday</th>
        <th>Friday</th>
    </tr>
</thead>
<tbody>
    <tr>
        <td>08:00 - 09:00</td>
        <td>CLASS</td>
        <td>PROJECT</td>
        <td>CLASS</td>
        <td>PROJECT</td>
        <td>CLASS</td>
    </tr>
    <tr>
        <td>09:00 - 10:00</td>
        <td>CLASS</td>
        <td>CLASS</td>
        <td>PROJECT</td>
        <td>ETHICS</td>
        <td>PROJECT</td>
    </tr>
    
</tbody>
</table>
`
};

function addStudentInfo() {
const yearOfStudy = document.getElementById('yearOfStudy').value;


if (yearOfStudy ) {
document.getElementById('displayYearOfStudy').textContent = `Year of Study: ${yearOfStudy}`;

displayTimetable(yearOfStudy);
} else {
alert('Please fill in both fields.');
}
}

function displayTimetable(year) {
const timetableContainer = document.getElementById('timetableContainer');
timetableContainer.innerHTML = timetables[year] || '<p>No timetable available for the selected year.</p>';
}

function filterPDFs() {
const searchInput = document.getElementById('searchBar').value.toLowerCase();
const pdfList = document.getElementById('pdfList');
const pdfItems = pdfList.getElementsByTagName('li');

Array.from(pdfItems).forEach((item) => {
const text = item.textContent || item.innerText;
if (text.toLowerCase().indexOf(searchInput) > -1) {
item.style.display = '';
} else {
item.style.display = 'none';
}
});
}
