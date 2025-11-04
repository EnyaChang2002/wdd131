

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < (studentReport.length + 1); i++) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
}

let num = 0;
while (num < (studentReport.length + 1)) {
    if (studentReport[num] < 30) {
        console.log(studentReport[num]);
    }
}

// don't know how
studentReport.forEach((number) => {
    if (number < 30) {
        console.log(number);
    }
})

//key solution:
studentReport.forEach(function (item) {
    if (item < 30) {
        console.log(item);
    }
})

for (const i in studentReport) {
    if (studentReport[i] < 30) {
        console.log(studentReport[i]);
    }
}

/*
for (const i of studentReport) {
    if (i < 30) {
        console.log(i);
    }
}
*/