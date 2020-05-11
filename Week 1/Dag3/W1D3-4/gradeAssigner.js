const assignGrade = (score) => {
    if (score >= 70) {
        const grade = "A";        
        return grade;        
    } else if (score >= 60) {
        const grade = "B";
        return grade;
    } else if (score >= 50) {
        const grade = "C";
        return grade;
    } else if (score >= 40) {
        const grade = "D";
        return grade;
    } else {
        const grade = "F";
        return grade;
    }   
}

console.log(assignGrade(60));

for(i=60; i<=100; i++) {
    const grade = assignGrade(i);
    console.log("For " + i + ", you got a " + grade);
}