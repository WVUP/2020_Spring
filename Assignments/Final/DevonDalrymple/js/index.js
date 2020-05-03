// https://www.tutorialrepublic.com/faq/how-to-assign-block-of-html-code-to-a-javascript-variable.php
const post1 = {
    imagePath: '../res/food1.jpg',
    title: 'Tasty Food',
    message: 'If it looks too good to be true, it probably is.  Here\'s how to make something remotely like it.',
    tags: '#Food ## #### #EasyFood'
};
const post2 = {
    imagePath: '../res/hersheymilkshake.jpg',
    title: 'Check out this Milkshake',
    message: 'Neat, huh!',
    tags: '#Milkshake #Food #Hungry #Yes'
};

const post3 = {
    imagePath: '../res/kittens.jpg',
    title: 'Kittens for Sale to Highest Bidder',
    message: 'I just stole.. Found some kittens that I wish to give to whoever wants them!',
    tags: '#ChatAuction #Sale #AdoptACat'
};

const post7 = {
    imagePath: '../res/nuke.gif',
    title: 'Nuke Catches Its Prey',
    message: 'A successful catch, made in just nanoseconds, by the dangerous nuclear bomb"',
    tags: '#Nuke #OutInTheWild #BearGrylls'
};

const post4 = {
    imagePath: '../res/corona.gif',
    title: 'Local Man says Virus is Government Propaganda, Dies 3 Hours Later',
    message: 'A man was spotted on top of his car wearing no clothes but a tin foil hat screaming, "this is just to distract us from the aliens"',
    tags: '#Aliens #TinFoilGang #News'
};

const post5 = {
    imagePath: '../res/lava.gif',
    title: 'DYK: Lava is Hot!',
    message: 'It is warmer than 100F!',
    tags: '#DYK #TIL #Science'
};

const post6 = {
    imagePath: '../res/kittens.jpg',
    title: 'Someone Stole my Kittens',
    message: 'Have you seen them?  This is most recent photo I could find of them.',
    tags: '#Help #Thief #MissingPet'
};
const posts = [post1, post2, post3, post4, post5, post6, post7];

$(document).ready(function () {
    loadMore();
    });

function loadMore() {
    var current = '';
    posts.forEach(e => 
        current +=
            '<div class="card mb-3" style="width: 90%;">' +
                '<div class="row no-gutters">' +
                    '<div class="col--4 col-lg-2">' +
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

// https://www.sitepoint.com/community/t/need-to-fire-javascript-function-when-bottom-of-page-is-reached-not-working/235266/5
window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
      // you're at the bottom of the page
      this.loadMore();
    }
  };