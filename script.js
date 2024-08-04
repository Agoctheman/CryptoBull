function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.backgroundColor = color;
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

const numberPrefixes = ['024XXXXX', '025XXXXX', '055XXXXX', '054XXXXX', '020XXXXX'];

const investors = [
  { percentage: 1.25, profit: 87.50 },
  { percentage: 2.75, profit: 132.30 },
  { percentage: 0.95, profit: 45.60 },
  { percentage: 1.80, profit: 102.75 },
  { percentage: 2.10, profit: 118.40 }
];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function generateRandomNumber() {
  return Math.floor(Math.random() * 100).toString().padStart(2, '0');
}

function updateData() {
  const tableBody = document.getElementById('investmentData');
  tableBody.innerHTML = '';

  shuffleArray(numberPrefixes);
  shuffleArray(investors);

  for (let i = 0; i < 5; i++) {
    const row = document.createElement('tr');
    const numberCell = document.createElement('td');
    const percentageCell = document.createElement('td');
    const profitCell = document.createElement('td');

    const randomNumber = generateRandomNumber();
    numberCell.textContent = `${numberPrefixes[i]}${randomNumber}`;
    percentageCell.textContent = `${investors[i].percentage.toFixed(2)}%`;
    profitCell.textContent = `₵${investors[i].profit.toFixed(2)}`;

    percentageCell.classList.add('percentage');
    profitCell.classList.add('profit');

    row.appendChild(numberCell);
    row.appendChild(percentageCell);
    row.appendChild(profitCell);
    tableBody.appendChild(row);
  }
}

// Initial data update
updateData();

// Update data every 2 seconds
setInterval(updateData, 2000);
