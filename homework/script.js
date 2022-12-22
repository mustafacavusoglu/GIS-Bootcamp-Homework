var url =  "https://api.orhanaydogdu.com.tr/deprem/live.php?limit=200"
let container2 = document.getElementById("right");
let container = document.getElementById("left");


fetch(url).then(
    res => {
      return res.json()
    }
).then(
  data => {
    data.result.forEach(element => {
      
      let li = document.createElement("li");

      li.setAttribute("style", "height:3rem; border:1px solid black; margin:1rem; padding:1rem;")

      let node = document.createTextNode(element.lokasyon);

      li.appendChild(node);
      li.addEventListener("click", () => { 
        container2.innerHTML = "<strong>" +element.lokasyon + " konumlu " + element.mag + " şiddetinde " + element.depth + " km derinliğinde deprem meydana gelmiştir" + "</strong>";
       })
      container.append(li);
      
    });
  });



  
