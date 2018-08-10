const app = "I don't do much.";

const token = 'd27a9d50c99fe976945ec2cf05a624c43afd5ca4'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
