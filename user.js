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

let reg = document.getElementById("reg")
console.log(reg)
  
  reg.addEventListener("click", function(){
    
  let email =document.getElementById("emaail").value
  let password =document.getElementById("passwoord").value
  let name =document.getElementById("nme").value
  let prf =document.getElementById("prof").value


// register

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
    getData()

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


//  GET DATA

 let showName =  document.getElementById("myname")
console.log()

 async function getData(){

  const querySnapshot = await getDocs(collection(db, "users"));
   querySnapshot.forEach((doc) => {
     let kamran = (`${doc.data().name}`);

     showName.innerHTML +=kamran
    });
  
  }