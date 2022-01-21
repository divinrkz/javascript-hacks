//With function prototype
function Course() {
    this.name = 'Learn to Code';
    this.price = '699';
 }
 
 const courseObjectOne = new Course();
 courseObjectOne.status = 'Active';
 const courseObjectTwo = new Course();
 courseObjectTwo.expiry = '4 months';
 
 console.log(courseObjectTwo.status + " - Access for " + courseObjectOne.expiry);    


//the new property 'status' is added to the courseObjectOne. 
//But it cannot be accessed (undefined)  by courseObjectTwo.
// Similarly, the 'expiry' property which was added to courseObjectTwo cannot be accessed (undefined) by courseObjectOne

 function Course() {
    this.name = 'Learn to Code';
    this.price = '699';
 }
 
 Course.prototype.status = 'Active';
 const courseObjectOne = new Course();
 Course.prototype.expiry = '4 months';
 const courseObjectTwo = new Course();
 
 console.log(courseObjectTwo.status + " - Access for " + courseObjectOne.expiry);    //outputs Active - Access for 4 months