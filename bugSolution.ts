function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane User", "John Smith"];

function greetUsers(users: string[]): string {
  return users.map(user => greeter(user)).join('\n');
}

console.log(greetUsers(user));