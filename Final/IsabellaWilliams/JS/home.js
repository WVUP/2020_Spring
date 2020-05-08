var post1 = {
    imagePath: '../res/music.png',
    title: 'Check out my New Song',
    message: 'Its a work in progress, but this is what I have mixed together so far.',
    tags: '#Electronic #Music #WIP #ComposedByNick'
};
var post2 = {
    imagePath: '../res/apexsucks.jpg',
    title: 'Apex legends is trash - heres why.',
    message: 'Every game of apex legends is just looting for 10 minutes just to get shot by two teams at the exact same time that act like they were both on the same squad of the navy seals, garbage game 0/10',
    tags: '#ApexLegends #Sucks #Gross #Bad #WhoPlaysIt'
};

var post3 = {
    imagePath: '../res/acnhmaria.jpg',
    title: 'Flower Power',
    message: 'During the quarantine, I have been playing animal crossing new horizon. Its bunny day in the game. I am a bit tired of all the eggs, thought.' + '<br>' + ':/ What have you been up to?',
    tags: '#AnimalCrossing #ACNH #Quarantine #BunnyDay'
};

var post7 = {
    imagePath: '../res/litterofkittens.png',
    title: 'Kittens Left on my Doorstep',
    message: 'Woke up this morning to a box of adorable kittens that were left on my porch. I am unable to take them, but wanted to post them here for adoption.',
    tags: '#Kittens #Adoption #Pets #Help'
};

var post4 = {
    imagePath: '../res/peoplehavingfun.jpg',
    title: 'Missing My Friends',
    message: 'Sooooo tired of being home.',
    tags: '#quarentine #friends #alone'
};

var post5 = {
    imagePath: '../res/cheese.png',
    title: 'Old cheese is the origin of the corona virus. Stay woke people!',
    message: 'Oh no, stay away from cheese. Its cause my mom to get COVID',
    tags: '#Corona #COVID #Science #Cheese #Mold'
};

var post6 = {
    imagePath: '../res/chicken.jpg',
    title: 'Everyones drawing the chicken so i thought id give it a try',
    message: 'Just made this, hope you like it.',
    tags: '#chicken #stardewvalley #art'
};
var posts = [post1, post2, post3, post4, post5, post6, post7];

$(document).ready(function () {
    loadMore();
    });

function loadMore() {
    var current = '';
    posts.forEach(e => 
        current +=
            '<div class="card mb-3" style="width: 90%;  padding: 1%;  border-style: solid; border-width: 1px; border-color: black;">' +
                '<div class="row no-gutters"  style="padding: 12px;">' +
                    '<div class="col--4 col-lg-2 postpic center">' +
                    '<img src="' + e.imagePath + '" class="card-img" alt="...">' +
                    '</div>' + 
                    '<div class="col-8 col-lg-10">' + 
                    '<div class="card-body">' + 
                        '<h5 class="card-title">' + e.title + '</h5>' +
                        '<p class="card-text">' + e.message + '</p>' +
                        '<p class="card-text"><small class="text-muted">' + e.tags +'</small></p>' +
                    '</div>' +
                    '</div>' +
                '</div>' +
            '</div>'        
    );
    document.getElementById("feed").innerHTML += current;
};


$("#newImage").click(function() { // bCheck is a input type button
    var fileName = $("#file1").val();

    if(fileName) { // returns true if the string is not empty
        alert(fileName + " was selected");
    } else { // no file was selected
        alert("no file selected");
    }
});

// Form Validation and Entry
function addPost() {
    var newImagePath;
    var newTitle;
    var newMessage;
    var newTags;
    if (document.getElementById("newImage").files[0] == null) {
        newImagePath = '../res/no-image-1.jpg';
    }
    else {
        // https://stackoverflow.com/questions/3814231/loading-an-image-to-a-img-from-input-file
        // https://stackoverflow.com/questions/2395765/store-images-in-javascript-object/2395830
        // var reader = new FileReader();
        // reader.onload = function (e) {
        //     var img = new Image();
        //     img.src = e.target.result;
        // }
        // newImagePath = reader.readAsDataURL(document.getElementById("newImage").files[0]);
        newImagePath = '../res/no-image-1.jpg'; // Placeholder image, could not get the above to function
    }
    newTitle = document.getElementById("newTitle").value;
    newMessage = document.getElementById("newMessage").value;
    newTags = document.getElementById("newTags").value;
    var newPost;
    newPost = {
        imagePath: newImagePath,
        title: newTitle,
        message: newMessage,
        tags: newTags
    }
    posts.push(newPost);
    return false;
}