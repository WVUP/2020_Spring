console.log('Welcome to the games survey')

const me = {
    firstName: 'Belle',
    lastName: 'Williams'
};
console.log(me);

const header = document.getElementById('my-header');
console.log(header);


function test(){
    console.log('you called test!!!!!!!!!!!!');
}


function youTyped(){
    console.log(`Your Input: ${myForm.firstName.value}`);
    console.log(`Your Input: ${myForm.lastName.value}`);
    console.log(`Your Input: ${myForm.email.value}`);
    document.getElementById('preview').innerHTML = `<h2>First Name: <span style="color: green">${myForm.firstName.value}</span></h2>`;
    document.getElementById('preview2').innerHTML = `<h2>Last Name: <span style="color: green">${myForm.lastName.value}</span></h2>`;
    document.getElementById('preview3').innerHTML = `<h2>Email: <span style="color: green">${myForm.email.value}</span></h2>`;
}
    function survey(){
        console.log(`Your First Name: ${myForm.firstName.value}`);
        console.log(`Your Input: ${myForm.lastName.value}`);
        console.log(`Your Input: ${myForm.email.value}`);
        console.log(`Your Input: ${myForm.boardgame.value}`);
        console.log(`Your Input: ${myForm.tabletopgames.value}`);
        console.log(`Your Input: ${myForm.game.value}`);
        console.log(`Your Input: ${myForm.sports.value}`);
}