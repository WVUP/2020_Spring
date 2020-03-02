const header = document.getElementById('my-header');
console.log(header);

setTimeout(function(){
    header.innerHTML = "Snakes Rule!!!"
    header.style.color = 'red';
}, 3000);

function youTyped(){
    console.log(`Your Input: ${myForm.email.value}`);
    document.getElementById('preview').innerHTML = `<h2>You typed: <span style="color: green">${myForm.email.value}</span></h2>`;
}