var requast=new XMLHttpRequest();
//initiate a new connection
requast.open('GET','https://restcountries.eu/rest/v2/all',true)
//send requast to server
requast.send();
//server retrive sussesfully
requast.onload=function(){
    var data=JSON.parse(this.response);
    for(var i in data)
   {
   console.log(i , data[i].name);
   }
   

}