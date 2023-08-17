import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth,onAuthStateChanged} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js"
import { getFirestore,collection,doc,getDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js"; 




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


  
  getData()
 
 
  async function getData(){
 
    //  console.log(getData)
    const querySnapshot = await getDocs(collection(db, "users"));
     querySnapshot.forEach((doc) => {
      let kamran = (`${doc.data().email}`);
      let kamran1 = (`${doc.data().name}`);
      let kamran2 = (`${doc.data().prf}`);
  
      
      let UserDataFirst =  document.getElementById('myemail')
      UserDataFirst.innerHTML = kamran
  
          
      let UserDataSecond =  document.getElementById('myname')
      UserDataSecond.innerHTML = kamran1
  
     let UserDataThird = document.getElementById('myprofesion')
     UserDataThird.innerHTML = kamran2
  
  
  
  
    });
  }



 
 
 
// async function getData (){

  
//   const docRef = doc(db, "users", uid);
//   const docSnap = await getDoc(docRef);
    
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());

// } else {
//   // docSnap.data() will be undefined in this case
//   console.log("No such document!");
// }



// }


















