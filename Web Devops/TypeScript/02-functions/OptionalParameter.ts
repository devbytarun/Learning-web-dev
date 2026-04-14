function greet(name: string, city?: string): void {
    if(city) {
        console.log(`Hello ${name} From ${city}`);
    } else {
        console.log(`Hello ${name}`);
    }
}

greet("Tarun");       
greet("Tarun", "Jaipur");
export{};