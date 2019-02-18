const employeeNames = ['teddy bear', 'drone', 'doll'];
 
function printBadges(employeeNames) {
    for (let i = 0; i < employeeNames.length; i++) {
        console.log(`Welcome ${employeeNames[i]}! you are employee `);
    }
 
    return printBadges ;
}
 
 printBadges(employeeNames) ;