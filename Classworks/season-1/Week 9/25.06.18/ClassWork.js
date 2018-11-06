//Exercise 1

function checkSpam(str) {
    let lowerStr = str.toLowerCase();
    if(lowerStr.includes('viagra') || lowerStr.includes('xxx')){
        return true;
    }
    else {
        return false; 
    }
  }
  alert( checkSpam('buy ViAgRA now') );
  alert( checkSpam('free xxxxx') );
  alert( checkSpam("innocent rabbit") );


//Exercise 2

// function truncate(str, maxlength) {
//     if(str.length > maxlength){
//         return str.slice(0, maxlength -1) + "...";
//     }
//     else{
//         return str;
//     }
//   }
//   alert(truncate("What I'd like to tell on this topic is:",20));
//   alert(truncate("Hi Everyone!",20));