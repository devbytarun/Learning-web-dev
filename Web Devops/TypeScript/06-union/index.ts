type UserId = string | number;

function printUserId(id: UserId): void {
    console.log("User ID:", id);
}

type Employee = {
    name: string;
    salary: number;
};

type Manager = {
    department: string;
};

type Senior = Employee & Manager; 

const senior1: Senior = {
    name: "Tarun",
    salary: 50000,
    department: "Engineering"
};

printUserId("EMP-101");
printUserId(101);
console.log(senior1);
