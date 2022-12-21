var url =  "https://data.ibb.gov.tr/dataset/bd3b9489-c7d5-4ff3-897c-8667f57c70bb/resource/6800ea2d-371b-4b90-9cf1-994a467145fd/download/salk-kurum-ve-kurulularna-ait-bilgiler.json"//https://api.orhanaydogdu.com.tr/deprem/live.php?limit=10"
const container = document.getElementById("container");
const container2 = document.getElementById("container2");


fetch(url).then(
    res => {
      return res.json()
    }
).then(
  data => {
    data.forEach(element => {
      
      let li = document.createElement("li");

      li.setAttribute("style", "height:3rem")

      let node = document.createTextNode(element.ADI);

      li.appendChild(node);
      li.addEventListener("click", showName(element.ADI))

      container.appendChild(li);
      
    });
  });


function showName(name) {
  let child = document.createElement("h2")
  document.getElementsByName('h2').innerHTML = name;  
  console.log(name)
}
  
