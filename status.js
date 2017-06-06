function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);


function barrastatus(){
 setTimeout("window.status='       O o o   | [  Site da 7ªsérie A  ] |   o o O '",120)
 setTimeout("window.status='       o O o   | [  Site da 7ªsérie A  ] |   o O o '",240)
 setTimeout("window.status='       o o O   | [  Site da 7ªsérie A  ] |   O o o '",360)
 setTimeout("barrastatus()",360)
}
barrastatus()

function clickIE() {if (document.all) {(message);return false;}}
function clickNS(e) {if 
(document.layers||(document.getElementById&&!document.all)) {
if (e.which==2||e.which==3) {(message);return false;}}}
if (document.layers) 
{document.captureEvents(Event.MOUSEDOWN);document.onmousedown=clickNS;}
else{document.onmouseup=clickNS;document.oncontextmenu=clickIE;}

function hidestatus(){
window.status=''
return true
}

if (document.layers)
document.captureEvents(Event.MOUSEOVER | Event.MOUSEOUT)

document.onmouseover=hidestatus
document.onmouseout=hidestatus

function stoperror(){ return true } window.onerror=stoperror