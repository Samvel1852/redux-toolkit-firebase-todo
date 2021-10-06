function name(static, ...args) {
  //   console.log(`${args}  ${static}`);
  console.log(static, "static");
  console.log(args, "args");
  //   return `${args}  ${static}`;
}

let a = 10;
let b = 15;

name`this is some${a}`;
