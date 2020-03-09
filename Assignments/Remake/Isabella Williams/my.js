console.log('Welcome to the games survey')

const me = {
    firstName: 'First Name',
    lastName: 'Last Name'
};
console.log(me);

const header = document.getElementById('my-header');
console.log(header);


function test(){
    console.log('you called test!!!!!!!!!!!!');
}

    function survey(){
        console.log(`Your First Name: ${myForm.firstName.value}`);
        console.log(`Your Last Name: ${myForm.lastName.value}`);
        console.log(`Your Email: ${myForm.email.value}`);
        document.getElementById('preview').innerHTML = `<h2>First Name: <span style="color: green">${myForm.firstName.value}</span></h2>`;
        document.getElementById('preview2').innerHTML = `<h2>Last Name: <span style="color: green">${myForm.lastName.value}</span></h2>`;
        document.getElementById('preview3').innerHTML = `<h2>Email: <span style="color: green">${myForm.email.value}</span></h2>`;
        console.log(`Your Input: ${myForm.boardgame.value}`);
        console.log(`Your Input: ${myForm.tabletopgames.value}`);
        console.log(`Your Input: ${myForm.game.value}`);
        console.log(`Your Input: ${myForm.sports.value}`);
        document.getElementById('preview4').innerHTML = `<h2>Board Game: <span style="color: green">${myForm.boardgame.value}</span></h2>`;
        document.getElementById('preview5').innerHTML = `<h2>Tabletop Game: <span style="color: green">${myForm.tabletopgames.value}</span></h2>`;
        document.getElementById('preview6').innerHTML = `<h2>Games: <span style="color: green">${myForm.game.value}</span></h2>`;
        document.getElementById('preview7').innerHTML = `<h2>Sports: <span style="color: green">${myForm.sports.value}</span></h2>`;
        document.getElementById('preview8').innerHTML = `<h2>Thank you. <span style="color: green"></span></h2>`;
}

