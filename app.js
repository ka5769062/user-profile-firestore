  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword,sendEmailVerification,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
  import { getFirestore,addDoc,collection } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBtKcXoexkRLaoVYqIgfOZ5rJi5Cvkgf8I",
    authDomain: "my-user-data.firebaseapp.com",
    projectId: "my-user-data",
    storageBucket: "my-user-data.appspot.com",
    messagingSenderId: "561168824717",
    appId: "1:561168824717:web:171fa0a3e816078599e5c4",
    measurementId: "G-RVDN5RM2M6"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore(app);

 
 // register
 
  let reg = document.getElementById("reg")
  
  reg.addEventListener("click", function(){
    
  let email =document.getElementById("emaail").value
  let password =document.getElementById("passwoord").value
  let name =document.getElementById("nme").value
  let prf =document.getElementById("prof").value


  createUserWithEmailAndPassword(auth,email,password,name,prf)
    .then(async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("registertion succesful",user)

      try {
        const docRef = await addDoc(collection(db, "users"), {
          email: email,
          password: password,
          name: name,
          prf:prf


        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
  

      swal({
           icon: "success",
           text:"registered sucessfully"
        });

        emailVeri()
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
     console.log("registertion failed",errorMessage)
     swal({
         icon: "error",
         text:"registeration failed"
      });
    });


    
})    
    
    
    
// email verification

function emailVeri(){

  
  sendEmailVerification(auth.currentUser)
  .then(() => {

  let kam = document.getElementById('verification')
  kam.innerHTML = "An Email Verification link has been to your email address "
  let img =  document.createElement("img")
  kam.appendChild(img)
  img.src = "cross.png"
  
  // Email verification sent!
    // ...
  });
  
}

 let delDiv =  document.getElementById("verification")
 delDiv.addEventListener("click",function (){
   
   delDiv.parentNode.removeChild(delDiv);


 })




  // LOGIN

 let logn = document.getElementById("logn")
  
 logn.addEventListener("click",function(){

 let email =  document.getElementById("email").value
 let password =  document.getElementById("password").value


 signInWithEmailAndPassword(auth,email,password)
 .then((userCredential) => {
   // Signed in 
   const user = userCredential.user;
 
  swal({
    icon: "success",
    text:"loged in sucessfully"
  });

  setTimeout(() => {
    window.location.href = "user.html"
    
  }, 2000);


   console.log( "succesful login",user)
   // ...

  })


 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   swal({
    icon: "error",
    text:"loged in failed"
  });
   console.log( "failed login",errorMessage)
 });


 })

















  // FOR CSS

let container = document.querySelector('.container')
let regBtn = document.querySelector('.regBtn')
let loginBtn = document.querySelector('.loginBtn')
// let emal = document.getElementById('emal').value
// let  paswrd = document.getElementById('paswrd').value



loginBtn.addEventListener("click",function(){

  container.classList.add("active")
   
})

regBtn.addEventListener("click",function(){

  container.classList.remove("active")
   

  
})


