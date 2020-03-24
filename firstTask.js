const name = "Chukwuanieze Samson";

const courses = ["HTML","CSS", "Javascript","Flutter","c#"]

console.log(`My name is ${name} and I offer the following courses: ${courses}`);

//The number of courses are odd so I display all odd numbers from 1-200

if(courses.length % 2!==0){
    for(i=0; i<=200; i++){
        if(i%2!==0){
            console.log(i);
            
        }
    
    }
}

else{
    console.log("The array is even");
    
}