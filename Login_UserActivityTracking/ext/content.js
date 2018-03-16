
  var aTags = document.getElementsByTagName("a");
  for (var i=0;i<aTags.length;i++){
      aTags[i].addEventListener('click', function(){
          var hrf = this.getAttribute("href");
          
          var type;
          var h = hrf.split('/');
              if (h[1] === "users" ){
                  type = "Clicked on Profile";

              }

              else if(h[1]==="questions"){
                  if (h[2]==="tagged"){
                    type = "Clicked on Question Tag";
                  }
                  else{
                    type = "Clicked on Question";
                  }


              }

              else {
                if (this.getAttribute("class")!="null"){
                  type = "Clicked on "+ this.getAttribute("class");

                }

                else {
                  type = "Clicked on "+ hrf;
                }
                
              }


          
        if( hrf = "/question/ask/"){
          type = "Clicked on Ask a Question Button"
        }
        chrome.runtime.sendMessage({"Type": type, "Content": this.textContent});
      });
  } 


  var codeTags = document.getElementsByTagName("code");
  for (var i=0;i<codeTags.length;i++){
      codeTags[i].addEventListener('copy', function(){         
        // alert(this.getAttribute("class"));
        chrome.runtime.sendMessage({"Type": "Copied Solution", "Content": "Code"});
      });
  } 
  
  

