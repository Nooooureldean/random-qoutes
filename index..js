var sitename=document.getElementById('siteName');
var siteUrl=document.getElementById('siteurl');
var data =document.getElementById('dataTable');
var formINvalid=document.getElementById('forminvalid');
console.log(sitename);
console.log(siteUrl);
var mycontainer;
if(localStorage.getItem('bookData'))
    {
        mycontainer=JSON.parse(localStorage.getItem('bookData',mycontainer))
        displaybooks();
    }
    else
    {
        mycontainer=[];
    }

function addBooks()
{
var book={
   name:sitename.value ,Url:siteUrl.value
}
if(sitename.classList.contains('is-valid')&&siteUrl.classList.contains('is-valid'))
{
    mycontainer.push(book);
console.log(mycontainer);
localStorage.setItem('bookData',JSON.stringify(mycontainer))
displaybooks ();
formINvalid.classList.Add('d-none');
}
else
{
    formINvalid.classList.remove('d-none');
}
} 
function displaybooks ()
{
    var box =``;
    for(var i=0; i<mycontainer.length;i++)
        {
box+=`
<tr>
<td>${i}</td>
<td>${mycontainer[i].name}</td>
<td><a href='${mycontainer[i].Url}'target="blank"><button ' type="button" class="btn btn-success mt-2 text-center m-auto"><i class="fa-regular fa-eye"></i> Visit</button></a> </td>
<td><button onclick='deleteObject(${i})' type="button" class="btn btn-danger mt-2 text-center m-auto"><i class="fa-solid fa-trash-can"></i> Delete</button>  </td>

</tr>
`
        }
        data.innerHTML=box;
}
function deleteObject(index)
{
mycontainer.splice(index,1);
localStorage.setItem('bookData',JSON.stringify(mycontainer))
displaybooks ();
}
var regex={
    siteName: /^[A-Z]\w{3,15}/,
    siteurl:/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g};
function validtion (element)
{
   
    if(regex[element.id].test(element.value))
        {
          element.classList.add('is-valid')
           element.classList.remove('is-invalid')
        }
        else
        {
            element.classList.add('is-invalid')
        }
}


