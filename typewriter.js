const sentence = "hello there from lighthouse labs";

for (const char of sentence) {
  setTimeout(() =>{
   console.log(char);
  }, 1000);
  
}

