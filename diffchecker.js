            var loop;
            var original=[],changed=[],s4=[],s3=[];
            var flag=1,i=0,n=0,checki=0;
            var strOriginal="",strChanged="";
            var strOriginalLine="",strChangedLine="";
            var str,flag2=0;
            var lineOriginal=0,lineChanged=0;
            var countOriginal=0,countChanged=0,i1=0,i2=0,cmp=0;
            var originalstr="",changedstr="";
            var button=document.querySelector("button");
            var flag2=0,flag1=0,flag3=0,unequal=0;
            var line1=0,line2=0;
            var str1="",str2="";
            var txt1,txt2;
            var check1,check2;
button.addEventListener("click",function(){
               txt1=document.getElementById("txt1");
               txt2=document.getElementById("txt2");
               txt1.innerHTML="Original"+"<br>";
               txt2.innerHTML="Changed"+"<br>";
               check1=document.getElementById("check1").value;
               check2=document.getElementById("check2").value;

         	original=check1.split("\n");
	 	changed=check2.split("\n");

                var flaga=0,flagb=0;
                /*for(var ka=lineOriginal;ka<original.length;ka++){
                 if(original[ka]=="" && original[ka+1]=="" ){
                        flaga=1;
                    }
                 if( flaga==1 && original[ka+2]==""){
                    flaga=0;
                    original.splice(ka+1,1);
                 }
             }*/
	        for(var ka=lineChanged;ka<changed.length;ka++){
                 if(changed[ka]=="" && changed[ka+1]=="" ){
                     flagb=1;
                 }
                 if(flagb==1 && changed[ka+2]==""){
                   flagb=0;
                   changed.splice(ka+1,1);
                   break;
                 }
                }

                countOriginal=original.length;
                countChanged=changed.length;
                console.log("countOriginal"+countOriginal+"countChanged"+countChanged);
       /*for(var l1=lineOriginal;l1<countOriginal;l1++){
             for(var c=lineChanged;c<countChanged;c++){
               console.log("strOriginal:"+original[lineOriginal]+"  strChanged"+changed[lineChanged]) ;
                console.log("lineOriginal"+lineOriginal+" lineChanged"+lineChanged);
           }}
         */
          var kl;
          if(countOriginal==countChanged ){
              flag3=1;
          }
              var    l=  lineChanged;
              var k=0;
              flag1=0;
              var ml=countOriginal-1;
             for(lineOriginal=0;lineOriginal<countOriginal;lineOriginal++){
                flag1=0;s4=[];compline=0;
                if(flagb==1){
                   kl=lineChanged+3;
                 }
                else
                   kl=countChanged;
              console.log("flaga"+flaga+"flagb"+flagb+"kl"+kl);
              for(l=lineChanged;l<kl;l++){
                 if(flag3==0 && compline>0){
                     console.log(1213);
                    if(original[lineOriginal]=="" && changed[l]==""){
                    console.log(1213);
                    break;
                   }
                 }
                console.log("strOriginal"+original[lineOriginal]+"strChanged"+changed[l]+"a") ;
                console.log("lineOriginal"+lineOriginal+" lineChanged"+lineChanged);
                 if(original[lineOriginal]===changed[l]){
                     flag1=1;
                     s3.push(original[lineOriginal]);
                 console.log(original[lineOriginal]);
                     k=l-s4.length +1;
                     s4.forEach(function(s){
                         displayChanged(s,k);
                         console.log("displayChanged");
                         k++;
                     });
                     console.log("display");
                     display(original[lineOriginal],lineOriginal+1,changed[l],l+1);
                     lineChanged=l+1;
                     break;
                   }
                  else{
                      unequal=1;
                      console.log(original[lineOriginal]);
                      s4.push(changed[l]);
                      console.log(s4);
                      compline++;
                      console.log("compline"+compline);
                      flag2=1;
                    }
              }
              if(flag1===0){
              console.log("original[lineOriginal]");

                         console.log("displayoriginal");
                         displayOriginal(original[lineOriginal],lineOriginal+1);
               }
             }
             var l=lineChanged;
                for(l;l<countChanged;l++){
                        displayChanged(changed[l],l+1);
                }
                checkline();
                console.log("line1"+line1+"line2"+line2);
             var noerror=document.getElementById("noerror");
             if(unequal==0){
                 noerror.innerHTML="The text in both the input matches";
             }
             if(unequal==1){
             txt1.style.display="inline-block";
             txt2.style.display="inline-block";
             txt1.style.visibility="visible";
             txt2.style.visibility="visible";
         }
});

  function checkline(){
     line1+=countOriginal;
     line2+=countChanged;
      if(line1>line2){
              for(var i=line2;i<line1;i++){
                        str2="";
                        console.log("maa");
                        str2+="<div class='blank'>";
                        str2+="<mark>";
                        str2+="</br>";
                        str2+="</div>";
                        str2+="</mark>";
                        txt2.innerHTML+=str2;

          }
      }
      else if(line1<line2){
          for(var i=line1;i<line2;i++){
                        str1="";
                        str1+="<div class='blank'>";
                        str1+="<mark>";
                        str1+="</br>";
                        str1+="</div>";
                        str1+="</mark>";
                        txt1.innerHTML+=str1;

          }
      }
  }
  console.log("hi");
  function displayChanged(strChanged,i){
                   strChanged= checkHtml(strChanged);
                        var str2="";
                        str2+="<div class='errch'>";
                        str2+="<mark>";
                        str2+="<pre><b>"+i+"</b>"+".  "+strChanged+"</pre>";
	                str2+="</mark>";
                        str2+="</div>";
                txt2.innerHTML+=str2;

  }
  function displayOriginal(strOriginal,j){
                       strOriginal=checkHtml(strOriginal);
                       var str1="";
                        str1+="<div class='error'>";
                        str1+="<mark>";
                        str1+="<pre><b>"+j+"</b>"+".  "+strOriginal+"</pre>";
      		        str1+="</mark>";
                        str1+="</div>";
                       txt1.innerHTML+=str1;

  }
  var i1=0,j1=0,k1=0,t=0,u=0;
  function  display(strOriginal,i,strChanged,j){
    	i1=i+k1;
	j1=j+t;
	console.log("i1"+i1+"j1"+j1);
	if(i1<j1){
		u=j1;
		while(i1<u){
                        str1="";
		        str1+="<div class='blank'>";
                        str1+="<mark>";
                        str1+="</br>";
			str1+="</div>";
                        str1+="</mark>";
      		        txt1.innerHTML+=str1;
                        u--;
			k1++;
			line1++;
		}
	}
	if(i1>j1){
		u=i1;
		while(j1<u){
                        str2="";
                        console.log("maa");
                        str2+="<div class='blank'>";
                        str2+="<mark>";
                        str2+="</br>";
                        str2+="</div>";
                        str2+="</mark>";
                        txt2.innerHTML+=str2;
			u--;
			t++;
			line2++;
		}
	}
                strOriginal=checkHtml(strOriginal);
                strChanged= checkHtml(strChanged);

         txt1.innerHTML+="<pre><b>"+i+"</b>"+".  "+strOriginal+"</pre>";
         txt2.innerHTML+="<pre><b>"+j+"</b>"+".  "+strChanged+"</pre>";
  }
  var str,n1,n2,n3,str1;
  function checkHtml(str){
     n1 = str.indexOf("<");
     n2 = str.indexOf(">");
     n3=n2-n1;
     str1="<span>";
     str2="</span>"; if(n1>-1 && n2>-1)
   return str.substr(0,n1+1)+str1+str.substr(n1+1,n3-1)+str2+str.substr(n2);
  else if(n1>-1 && n2==-1)
    return str.substr(0,n1+1)+str1+str.substr(n1+1,1)+str2+str.substr(n1+2);
  else
    return str;
    }




/*
                var x=countOriginal-1,y=countChanged-1;
                console.log("lineOriginal"+lineOriginal+" lineChanged"+lineChanged);
               console.log("original[x]"+original[x]+"l\nchanged[y]"+changed[y]+"l") ;
               if(original[x]==changed[y]){
                   console.log("im here");
                    display(original[x],x+1,changed[y],y+1);
                }*/