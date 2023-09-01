// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'
// import { getDoc, getFirestore } from "firebase/firestore";
import { db, db2, fish, leaderboard } from "./public/src/js/firebaseInit.js";
import {
  onSnapshot,
  doc,
  query,
  getDocs,
  limit,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.6.8/firebase-firestore.js";

// let docRef = query(leaderboard, limit(10));
const docRef = query(leaderboard, orderBy("score", "desc"), orderBy("timestamp", "asc"), limit(10));
const querySnapshot = await getDocs(docRef);
var tableBody = document.getElementById("#myTable");
var tbody = document.querySelector('tbody');
var text = 0;

querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
     var row = document.createElement("tr");
     var col1 = document.createElement("td");
     var col2 = document.createElement("td");

    let name = doc.data().name.length > 8 ? doc.data().name.substring(0, 11) : doc.data().name;
    let score = String(doc.data().score).replace(/(.)(?=(\d{3})+$)/g, '$1,');
    
    text++;
    row.append(text);
    col1.append(name);
    col2.append(score);
    tbody.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
});


//leaderboard fish
const q = query(fish, orderBy("score", "desc"), orderBy("timestamp", "asc"), limit(10));
const a = await getDocs(q);
var fishtable = document.getElementById("#fishTable");
var text = 0;
const el = document.querySelector(".myclass");


  a.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");

    let name =
      doc.data().name.length > 8
        ? doc.data().name.substring(0, 11)
        : doc.data().name;
    let score = String(doc.data().score).replace(/(.)(?=(\d{3})+$)/g, "$1,");

    text++;
    row.append(text);
    col1.append(name);
    col2.append(score);
    el.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
  });


const bm = query(fish, orderBy("score", "desc"), orderBy("timestamp", "asc"), limit(10));
const b = await getDocs(bm);
var ab = document.getElementById("#exampleModal");
var text1 = 0;
const ela = document.querySelector(".modal-body tbody");

  b.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");

    let name =
      doc.data().name.length > 8
        ? doc.data().name.substring(0, 11)
        : doc.data().name;
    let score = String(doc.data().score).replace(/(.)(?=(\d{3})+$)/g, "$1,");

    text1++;
    row.append(text1);
    col1.append(name);
    col2.append(score);
    ela.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
 });


const docRef1 = query(leaderboard, orderBy("score", "desc"), orderBy("timestamp", "asc"), limit(10));
const querySnapshot1 = await getDocs(docRef1);
var ab = document.getElementById("#exampleModal1");
var text2 = 0;
const ela1 = document.querySelector(".modal-body-1 tbody");

  querySnapshot1.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    var row = document.createElement("tr");
    var col1 = document.createElement("td");
    var col2 = document.createElement("td");

    let name =
      doc.data().name.length > 8
        ? doc.data().name.substring(0, 11)
        : doc.data().name;
    let score = String(doc.data().score).replace(/(.)(?=(\d{3})+$)/g, "$1,");

    text2++;
    row.append(text2);
    col1.append(name);
    col2.append(score);
    ela1.appendChild(row);
    row.appendChild(col1);
    row.appendChild(col2);
  });


 
