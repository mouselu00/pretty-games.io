// const scriptURL = "https://script.google.com/macros/s/AKfycbwGtxNJE1vJ_k_nVkAGuheM3_CKXSvr-yPnbxtGyROtiRuutpDpAmRKm3LOk6DPvx3s/exec"
const scriptURL = "https://script.google.com/macros/s/AKfycbya7A2wALdcaySRtgwPaMRWdE2jkFQ9hiHJm2Z5xm0MUrz5Kwe0J0v3NlNu2ErFIT9Wlw/exec"
  const form = document.forms['submit-to-google-sheet']

function login(){
  
    var form_data = new FormData(document.querySelector("form"));

    if(document.getElementById("phone").value == "" && document.getElementById("email").value == ""){
        document.getElementById("InfosubmitAlert").style.display = "block";
        return;
    }
    
    else{
      document.getElementById("InfosubmitAlert").style.display = "none";
    }
    if(document.getElementById("name").value == ""){
      return;
    }
    else if(document.getElementById("phone").value != ""){
        document.getElementById("email").required = "";
    }
    else{
        document.getElementById("phone").required = "";
    }
    if(!( form_data.has("NailArt") || form_data.has("GetEyelash") || form_data.has("HairRemoval") || form_data.has("Tattoo") || form_data.has("Cosmetic") || form_data.has("Massage") || form_data.has("Other"))){
      document.getElementById("IndustrysubmitAlert").style.display = "block";
      document.location.href = "#";
      return;
    }
    else{
      document.getElementById("IndustrysubmitAlert").style.display = "none";
    }
    
    form.addEventListener('submit', e => {
      e.preventDefault();
      
      var d = new Date();
      var hours = d.getHours();
      var mins = d.getMinutes();
      var seconds = d.getSeconds();
      document.getElementById("time").value = `${d.toISOString().substring(0, 10)} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
      document.getElementById("InfoSubmit").disabled = true;
      fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
          console.log('Success!', response);
          document.location.href = "select.html";
        })
        .catch(error => {
          console.error('Error!', error.message);
          alert("表單建立失敗");
          document.getElementById("InfoSubmit").disabled = false;
        })
    })
}