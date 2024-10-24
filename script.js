var typed=new Typed(".auto-type",{
    strings:["Data Scientist","Web Developer","Python Developer","Java Developer","Anime Lover"],
    typeSpeed:100,
    backSpeed:100,
    loop:true

})
var typed=new Typed(".auto-type-1",{
    strings:["Data Scientist","Web Developer","Python Developer","Java Developer","Anime Lover"],
    typeSpeed:100,
    backSpeed:100,
    loop:true

})
function showsideber(){
  const sideber=document.querySelector(".sideber");
  sideber.style.display='flex'
  const burger=document.querySelector(".burger");
  burger.style.display='none'
  const hide=document.querySelector(".hide")
  hide.style.display='block'
}
function hide(){
     const sideber=document.querySelector(".sideber");
     sideber.style.display='none'
    const burger=document.querySelector(".burger");
    burger.style.display='block'
  const hide=document.querySelector(".hide");
  hide.style.display='none'

}