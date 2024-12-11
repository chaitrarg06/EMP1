function signup(userName) {
    const users = ["Alice", "Bob", "Charlie"]; 
    if (users.includes(userName)) {
        return "User Already Registered, Please Login.";
    } else {
        users.push(userName); 
        return "Signup Successful, Please Login.";
    }
}
module.exports = signup;


function login(userName, password) {
    const users = [
        { name: "Alice", password: "Emp@123" },
        { name: "Bob", password: "Emp@123" },
        { name: "Charlie", password: "Emp@123" }
    ];

    const user = users.find((u) => u.name === userName);

    if (!user) {
        return "User Not Found, Please Signup.";
    } else if (user.password !== password) {
        return "Wrong Password.";
    } else {
        return "Login Successful.";
    }
}

module.exports = login;