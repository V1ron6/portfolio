try {

  const menu = document.getElementById("menu");
  const closebutton = document.getElementById("close");
  const openbutton = document.getElementById("open");
  const themebutton = document.getElementById("theme");
  
  if (themebutton) {
      let theme = localStorage.getItem("theme");
      if (!theme) {
          theme = "light";
      }
      if (theme === "dark") {
          document.body.style.background = "black";
          document.body.style.color = "white";
      } else {
          document.body.style.background = "white";
          document.body.style.color = "black";
      }
  
     
      themebutton.addEventListener("click", function () {
          if (theme === "dark") {
              theme = "light";
          } else {
              theme = "dark";
          }
  
          
          localStorage.setItem("theme", theme);
  
         
          if (theme === "dark") {
              document.body.style.background = "black";
              document.body.style.color = "white";
          } else {
              document.body.style.background = "white";
              document.body.style.color = "black";
          }
      });
  } else {
      console.log("themebutton not found :(");
  }
  



openbutton.addEventListener("click",()=>{
    menu.style.display ="block";
    openbutton.style.display ="none";
     closebutton.addEventListener("click",()=>{
      menu.style.display ="none";
      openbutton.style.display ="block";
     });
});




const dialogbutton = document.getElementById("dialogact");

dialogbutton.addEventListener("click", () => {
    const dialo = document.getElementById("dialog");
    dialo.showModal();
    const closebutton = document.getElementById("cls");
    closebutton.addEventListener("click",()=>{
        dialo.close();
    });
    
});








} catch (error) {
  console.log(error);
}
