console.log('Welcome to JavaScript')

const me = {
    firstName: 'Aaron',
    lastName: 'Freeland'
};
console.log(me);

const header = document.getElementById('my-header');
console.log(header);

setTimeout(function(){
    header.innerHTML = "JavaScript Rocks!!!"
    header.style.color = 'red';
}, 2000);

function test(){
    console.log('you called test!!!!!!!!!!!!');
}

function youTyped(){
    console.log(`Your Input: ${myForm.firstName.value}`);
    document.getElementById('preview').innerHTML = `<h2>You typed: <span style="color: green">${myForm.firstName.value}</span></h2>`;
}