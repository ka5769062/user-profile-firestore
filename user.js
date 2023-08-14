import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 




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

  

// let email =document.getElementById("emaail").value
  // let password =document.getElementById("passwoord").value
  // let name =document.getElementById("nme").value
  // let prf =document.getElementById("prof").value


// LOGOUT

 let lgout = document.getElementById("logout")
 lgout.addEventListener("click",() =>{
   
   const user = auth.currentUser;
   if (user) {
     
     window.location.href = "index.html"
     
    } 
 else {
   // No user is signed in.
  }
  
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



document.getElementById('myemail').innerText = "ajmal"







getData()



//  GET DATA

async function getData(){
   
   console.log(getData)
  const querySnapshot = await getDocs(collection(db, "users"));
   querySnapshot.forEach((doc) => {
    let kamran = (`${doc.data().UserEmail}`);
     
    showName.innerHTML +=kamran
    
    
  });
}