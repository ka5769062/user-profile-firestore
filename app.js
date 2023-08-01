
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getFirestore, collection, doc, addDoc, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


  const firebaseConfig = {
    apiKey: "AIzaSyDjLadaiAYSPkW_1wztdnj1r7PzDLCcOTk",
    authDomain: "profile-card-firestore.firebaseapp.com",
    projectId: "profile-card-firestore",
    storageBucket: "profile-card-firestore.appspot.com",
    messagingSenderId: "927702634240",
    appId: "1:927702634240:web:2c6d246d2bdb07c2182de5",
    measurementId: "G-LKQ1HE0YRE"
  };

  const app = initializeApp(firebaseConfig);
 
  const db = getFirestore()




  // register



  let reg = document.getElementById("reg")
  
  reg.addEventListener("click", function(){
    
  let email =document.getElementById("emaail").value
  let name =document.getElementById("name").value
  let password =document.getElementById("passwoord").value
  let prof =document.getElementById("prof").value
  
  register (email,name,password,prof)
  
  console.log(email)
  })
  
  
  async function register(email,name,password,prof){

    try {
      const docRef = await addDoc(collection(db, "users"), {
      
       first: email,
       second: name,
       password: password,
       profession:prof 
       });
       console.log("Document written with ID: ", docRef.id);
     } catch (e) {
       console.error("Error adding document: ", e);
     }
  }

    
    
  







// createUserWithEmailAndPassword(auth, email,password)
//     .then((userCredential) => {
//       // Signed in 
//       const user = userCredential.user;
      
//       // swal({
//       //   icon: "success",
//       //   text:"registered sucessfully"
//       // });
      
//       console.log("sucessful",user)

      

//       emailVeri()
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;
     
//       console.log("error",errorMessage)
//       // swal({
//       //   icon: "error",
//       //   text:"registeration failed"
//       // });
     
//       // ..
//     });

//   })

// // email verification

// function emailVeri(){

  
//   sendEmailVerification(auth.currentUser)
//   .then(() => {

//   let kam = document.getElementById('verification')
//   kam.innerHTML = "An Email Verification link has been to your email address "
//   let img =  document.createElement("img")
//   kam.appendChild(img)
//   img.src = "cross.png"
  
//   // Email verification sent!
//     // ...
//   });
  
// }


//  let delDiv =  document.getElementById("verification")
//  delDiv.addEventListener("click",function (){
   
//    delDiv.parentNode.removeChild(delDiv);


//  })








//   // LOGIN

//  let logn = document.getElementById("logn")
  
//  logn.addEventListener("click",function(){

//  let email =  document.getElementById("email").value
//  let password =  document.getElementById("password").value


//  signInWithEmailAndPassword(auth, email, password)
//  .then((userCredential) => {
//    // Signed in 
//    const user = userCredential.user;
 
//   // swal({
//   //   icon: "success",
//   //   text:"loged in sucessfully"
//   // });

//   setTimeout(() => {
//     window.location.href = "user.html"
    
//   }, 2000);


//    console.log( "succesful login",user)
//    // ...

//   })
//  .catch((error) => {
//    const errorCode = error.code;
//    const errorMessage = error.message;
//   //  swal({
//   //   icon: "error",
//   //   text:"loged in failed"
//   // });
//    console.log( "failed login",errorMessage)
//  });


//  })




let container = document.querySelector('.container')
let regBtn = document.querySelector('.regBtn')
let loginBtn = document.querySelector('.loginBtn')
// let emal = document.getElementById('emal').value
// let  paswrd = document.getElementById('paswrd').value




// // FOR CSS

loginBtn.addEventListener("click",function(){

  container.classList.add("active")
   
})

regBtn.addEventListener("click",function(){

  container.classList.remove("active")
   

  
})






