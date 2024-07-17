function ed()
{
  document.getElementById("education").hidden = false ;
  document.getElementById("skill").hidden = true ;
  document.getElementById("project").hidden = true ;

}


function skl()
{
  document.getElementById("education").hidden = true ;
  document.getElementById("skill").style.visibility = "visible" ;
  document.getElementById("project").hidden = true ;

}


function abt()
{
  document.getElementById("education").hidden = true ;
  document.getElementById("skill").hidden =true ;
  document.getElementById("project").style.visibility = "visible" ;
}
