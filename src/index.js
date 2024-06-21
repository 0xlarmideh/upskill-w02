import { intro, outro, spinner } from "@clack/prompts";

const s = spinner();
let students = [
  { id: 1, name: "Alice Johnsn", grades: [85, 45, 76, 88, 66] },
  { id: 2, name: "Bob Smith", grades: [32, 54, 58, 71, 90] },
  { id: 3, name: "Charlie Brown", grades: [99, 95, 98, 94, 88] },
  { id: 4, name: "David Wilson", grades: [55, 56, 59, 65, 60] },
  { id: 5, name: "John Doe", grades: [78, 75, 77, 88, 68] },
];

// Function to calculate average of any given array
const calcAverage = (arr) => {
  const avg = arr.reduce((sum, item) => sum + item, 0) / arr.length;
  return avg.toFixed(2);
};

const calculateAverageGrades = () => {
  const newStudentsArr = students.map((item) => {
    return {
      id: item.id,
      name: item.name,
      averageGrade: calcAverage(item.grades),
    };
  });
  return newStudentsArr;
};

const findTopStudent = () => {
  const studentArr = calculateAverageGrades();
  let max = studentArr[0].averageGrade;

  calculateAverageGrades().forEach((student, i) => {
    if (student.averageGrade > max) {
      max = student.averageGrade;
    }
  });
  return max;
};

const sortStudentsByGrade = () => {
  const studentArr = calculateAverageGrades();
  return studentArr.sort((a, b) => {
    if (a.averageGrade > b.averageGrade) return -1;
    else if (a.averageGrade < b.averageGrade) return 1;
    return 0;
  });
};

const averageGrades = calculateAverageGrades();
const topStudent = findTopStudent();
const sortedStudentsByGrade = sortStudentsByGrade();

await s.start("Running script...");
setTimeout(async () => {
  await s.stop("Script ran successfully.");
  setTimeout(() => {
    intro("Here's my solution");
    console.log("1. Average Grades:", averageGrades);
    console.log("2. Top Student:", topStudent);
    console.log("3. Sorted Students array by grade:", sortedStudentsByGrade);
    outro("That's all");
  }, 1000);
}, 2000);
