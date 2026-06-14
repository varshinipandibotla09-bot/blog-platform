function addPost(){

let title=document.getElementById("title").value;
let content=document.getElementById("content").value;

if(title=="" || content==""){
alert("Enter title and content");
return;
}

let post=document.createElement("div");
post.className="post";

post.innerHTML=`
<h2>${title}</h2>
<p>${content}</p>

<input class="comment" placeholder="Write a comment">
<button onclick="addComment(this)">Comment</button>

<ul></ul>
`;

document.getElementById("posts").appendChild(post);

document.getElementById("title").value="";
document.getElementById("content").value="";
}

function addComment(btn){

let input=btn.previousElementSibling;
let ul=btn.nextElementSibling;

let li=document.createElement("li");
li.innerText=input.value;

if(input.value!=""){
ul.appendChild(li);
input.value="";
}

}
