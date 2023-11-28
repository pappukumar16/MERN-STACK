const modal = document.querySelector(".modal");
const overlaya = document.querySelector(".overlay");

 const openModal = ()=>{
   modal.classList.add("active");
   overlaya.classList.add("overlayactive");
   console.log("openModal");
 }

  const closeModal = ()=>{
 	 modal.classList.remove("active");
 	 console.log("remove")
 	 overlaya.classList.remove("overlayactive");
 	 console.log("ok");
 }