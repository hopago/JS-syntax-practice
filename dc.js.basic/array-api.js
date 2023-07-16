'use strict'
// Q1. make a string out of an array

{
    const fruits = ['apple', 'banana', 'orange'];
    /*for(let fruit of fruits) {
        const toChange = fruit;
        String(toChange);
        console.log(toChange);
        console.log(typeof toChange);
    } my way... */
    const result = fruits.join(',');
    console.log(result);
}

// Q2. make an array out of a string
{
    const fruits = ['1, 2, 3, 4'];
    const array = fruits.splice(/','/);
    console.log(array);
}

//Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    /*const reverse = [];
    for(let i = array.length - 1; i >= 0; i--){
        reverse.push(array[i]);
    }
    console.log(reverse); my way... */
    const result = array.reverse(); // 기존 array값 또한 바뀐다...
    console.log(result);
    console.log(array);
}

//Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    /* const newArray = [array.splice(2)]; // Array.splice: return slice result
    console.log(newArray); 기존 array도 바뀌므로 사용 X */
    const newArray = array.slice(2,5); // slice = 배열에서 원하는 결과값만 받아온다...
    console.log(array);
    console.log(newArray);
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88)
];

//Q5. find a student with the score 90

{
    console.log(students);
    /*const result = students.filter(student => student.score === 90);
    console.log(result); my way... by filter function */
    /* find function
    const result = students.find((student) => student.score === 90);
    */
}

//Q6. make an array of enrolled students

{
    const result = students.filter(student => student.enrolled === true);
    console.log(result);
}

//Q7. make an array containing only the student's scores
//result should be: [45, 80, 90, 66, 88]

{
    /* let result = [];
    students.forEach((Student) => result.push(Student.score));
    console.log(result); my way by foreach() */
    const result = students.map((Student) => Student.score); // 배열 안 요소들의 조작 및 출력
    console.log(result);
}

//Q8. check if there is a student with the score lower than 50

{
    console.log(students.some((Student) => Student.score < 50)); // 50점보다 낮은 점수가 있다면 TRUE
    const result = students.every((Student) => Student.score >= 50); // 모든 학생들의 점수가 50점보다 크거나 같다면 TRUE
    console.log(result);
}

//Q9. compute student's average score

{
    const temp = students.map((Student) => Student.score);
    const average = temp.reduce((a, b) => a + b, 0) / temp.length; // a = prev, b = curr / prev + curr의 값은 a(prev)로 다시 전달 + 0은 최초의 prev 값 / 0 + curr[1] - cur[1] + cur [2] ... /
    console.log(average);
}

//Q10. make a string containing all the scores
//result should be: '45, 80, 90, 66, 88'

{
    const temp = students.map((Student) => Student.score);
    console.log(temp);
    let array = temp.join(', ');
    array += '';
    console.log(array);

    // sequence function tc.ex
    /* const result = students
    .map((student) => student.score)
    .filter((score) => score >=50)
    .join(', ');
    */
}

// BONUS
{
    const result = students
    .map((Student) => Student.score)
    .sort((a, b) => a - b) // 작은 수부터 정렬, b - a: 큰 수부터 정렬
    .join();
    console.log(result);
}