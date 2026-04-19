enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Pending = "PENDING",
}

console.log(Status.Active); // "ACTIVE"/

enum role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}

let currentRole = role.Admin;


const getAccess = (currentRole: role) =>{
    if(currentRole == role.Admin){
     console.log("Full Access")
    }
    else if(currentRole == role.User){
     console.log("Limited Access")
    }
    else if(currentRole == role.Guest){
     console.log("Read Only")
    }
}

getAccess(role.Admin);
getAccess(role.User);
getAccess(role.Guest);