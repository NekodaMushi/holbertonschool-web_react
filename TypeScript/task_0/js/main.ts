interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Etienne",
  lastName: "Lore",
  age: 28,
  location: "Moscow",
};

const student2: Student = {
  firstName: "Lilloo",
  lastName: "Multipass",
  age: 3000,
  location: "Dallas",
};

const studentsList = [student1, student2];
const table = document.createElement("table");
studentsList.forEach((students) => {
  let tableRow = table.insertRow();
  for (let [key, value] of Object.entries(students)) {
    if (key === "firstName" || key === "location") {
      let tableColumn = tableRow.insertCell();
      tableColumn.innerText = value;
    }
  }
});
