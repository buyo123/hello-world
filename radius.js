let radius = parseFloat(process.argv[2]);


let circle_circumference = function(r){
    let pi = 3.14;
    return 2*pi*r;
};

console.log(`when the rasius is ${radius}, the circumference is: ${circle_circumference(radius)}`);


let circle_radius = function(r){
    let pi = 3.14;
    return pi*(r**2);
};

console.log(`when the rasius is ${radius}, the radius is: ${circle_radius(radius)}`);
