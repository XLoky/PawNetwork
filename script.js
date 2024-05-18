"use strict";
let apiInfo;
let catCount = 0;
let followed = [];
const videos = document.querySelectorAll('video');
const catTreeComfirmationScreen = document.querySelector('.cat-tree-open-comfirmation');
let catTreeScreen = document.querySelector('.cat-tree');
const uploadScreen = document.querySelector('.upload-screen');
const editPostScreen = document.querySelector('.edit-post-screen');
const selfCommentImgSrc = `pfp/${Math.floor(Math.random() * 14) + 1}.webp`;
const commentPreset = 
{
    name: 
    [
        "WhiskerWizard", "PurrfectlyMeow", "KittyKatCraze", "FelineFury", "MeowMaven", "ClawdiusMaximus", "PawsomePurrs", "CatNapChampion", "MittensTheGreat", "PurrPower", "WhiskerWhisperer", "KittyKisses", "PurrPal", "CuddleCat", "Meowster", "PawPrints", "FelixFeline", "LunaPurr", "WhiskerWonder", "Clawtastic", "KittyKraze", "FelineFiesta", "Purrfectionist", "MewMew", "PurrPrince", "PawPatrol", "CatnipConnoisseur", "MeowMachine", "WhiskerWiggle", "FuzzyFeline", "MittensMagic", "PurrPet", "CuddleKitty", "MewMingle", "PawsAndClaws", "KittyCuddle", "PurrKitten", "WhiskerWanderer", "ClawCraft", "MeowMentor", "FelineFun", "KittyKompanion", "PurrParty", "PawPals", "WhiskerWish", "MittensMystery", "CuddleCatnip", "PurrPatrol", "FurryFeline", "MeowMingle"
    ],
    comment:
    [
        "AWESOME!!", "I'D REALLY LIKE TO SEE MORE LIKE THIS!", "🐱", "YOU'RE PURRRTIFUL :P", "TELL US MORE!!!", "I WANNA BE LIKE YOU :(((", "SO CUTE!", "ADORABLE 😻", "LOVE THIS!", "PURRFECT!", "SUCH A SWEETIE!", "MEOWVELOUS!", "CAT-TASTIC!", "I CAN'T HANDLE THE CUTENESS!", "MORE CATS PLEASE!", "THIS MADE MY DAY!", "CAT LOVERS UNITE!", "TOTALLY PAWSOME!", "MEOW MEOW!", "KITTY LOVE!", "SO PRECIOUS!", "CAN'T GET ENOUGH!", "LOVE THE WHISKERS!", "KITTY KISSES!", "PURRFECTLY ADORABLE!", "FELINE FINE!", "CUTENESS OVERLOAD!", "PURRFECTION!", "ABSOLUTELY MEOWSOME!", "CATITUDE!", "LOVE THIS FURRY FRIEND!", "PAWESOME POST!", "KITTY CUTENESS!", "SO FLUFFY!", "CAT NAP TIME!", "MEOWING WITH JOY!", "LOOK AT THOSE EYES!", "PAW-SITIVELY ADORABLE!", "SUCH GRACE!", "CAN'T STOP SMILING!", "CAT MAGIC!", "FELINE FRIEND!", "PAWS AND PURRS!", "CAT NAPS FOR DAYS!", "CUDDLE TIME!", "MEOWGICAL!", "KITTEN KISSES!", "PAW-LEASE POST MORE!", "FURRY LITTLE BUNDLE!"
    ]
}


document.querySelector('.container__upload').addEventListener('click',()=>{
    uploadScreen.style.display = 'flex';
    uploadScreen.classList.add('popup');
})

const uploadInput = document.getElementById('uploadInput');
const filereader = new FileReader();
uploadInput.addEventListener('change',(e)=>{
    filereader.readAsDataURL(uploadInput.files[0]);
    filereader.addEventListener('load',(e)=>{
        if(uploadInput.files[0].name.includes('.png') || uploadInput.files[0].name.includes('.jpg') || uploadInput.files[0].name.includes('.jpeg')){
            // uploadScreen.style.display = 'none';
            document.querySelector('.upload-screen__p').style.display = 'none';
            uploadScreen.classList.remove('popup');
            uploadScreen.classList.add('unpopup');
            editPostScreen.style.display = 'flex';
            editPostScreen.classList.add('popup');

            document.getElementById('textareaDesc').value = '';
            document.querySelector('.edit-post-screen__filters-strenth-drag').value = 50;
            document.querySelector('.edit-post-screen__img').style.filter = null;

            document.querySelector('.edit-post-screen__img').src = e.currentTarget.result;
            setTimeout(() => {
                uploadScreen.classList.remove('unpopup');
                uploadScreen.style.display = 'none';
            }, 200);
        } else{
            document.querySelector('.upload-screen__p').style.display = 'block';
        }
    })
});
uploadInput.addEventListener('dragover',(e)=>{
    e.preventDefault();
    document.querySelector('.upload-screen__filereader-box').setAttribute('style','filter: brightness(.85)');
});
uploadInput.addEventListener('drop',()=>{
    document.querySelector('.upload-screen__filereader-box').setAttribute('style','filter: brightness(1)');
})
uploadInput.addEventListener('dragleave',()=>{
    document.querySelector('.upload-screen__filereader-box').setAttribute('style','filter: brightness(1)');
});

document.querySelector(".loading").style.left = `${document.querySelector("main").clientWidth / 2 + 330}px`;

const changeVideo = (e) => {
    const order = ['center','right','rightright','leftleft','left'];
    let clicked;

    for ( const i in order ) {
        if ( e == order[i] ) {
            clicked = i;
            break;
        }
    }
    let leftleft;
    let left;
    let center;
    let right;
    let rightright;
    
    for(let i = 0; i < clicked; i++){
        for( const video of videos ) {
            if(video.classList[0] == 'leftleft') leftleft = video;
            if(video.classList[0] == 'left') left = video;
            if(video.classList[0] == 'center') center = video;
            if(video.classList[0] == 'right') right = video;
            if(video.classList[0] == 'rightright') rightright = video;
        }
        center.pause();
        right.play();

        leftleft.classList.replace('leftleft','rightright');
        rightright.classList.replace('rightright','right');
        right.classList.replace('right','center');
        center.classList.replace('center','left');
        left.classList.replace('left','leftleft');
    }
}

document.querySelector('.top-slider__left-arrow').addEventListener('click',(e)=>{
    let leftleft;
    let left;
    let center;
    let right;
    let rightright;
    for(let i = 0; i < 4; i++){
        for( const video of videos ) {
            if(video.classList[0] == 'leftleft') leftleft = video;
            if(video.classList[0] == 'left') left = video;
            if(video.classList[0] == 'center') center = video;
            if(video.classList[0] == 'right') right = video;
            if(video.classList[0] == 'rightright') rightright = video;
        }
        center.pause();
        right.play();

        leftleft.classList.replace('leftleft','rightright');
        rightright.classList.replace('rightright','right');
        right.classList.replace('right','center');
        center.classList.replace('center','left');
        left.classList.replace('left','leftleft');
    }
})

document.querySelector('.top-slider__right-arrow').addEventListener('click',(e)=>{
    let leftleft;
    let left;
    let center;
    let right;
    let rightright;
    for(let i = 0; i < 1; i++){
        for( const video of videos ) {
            if(video.classList[0] == 'leftleft') leftleft = video;
            if(video.classList[0] == 'left') left = video;
            if(video.classList[0] == 'center') center = video;
            if(video.classList[0] == 'right') right = video;
            if(video.classList[0] == 'rightright') rightright = video;
        }
        center.pause();
        right.play();

        leftleft.classList.replace('leftleft','rightright');
        rightright.classList.replace('rightright','right');
        right.classList.replace('right','center');
        center.classList.replace('center','left');
        left.classList.replace('left','leftleft');
    }
})

for(const video of videos){
    video.addEventListener('click',(e)=>{
        changeVideo(e.target.classList[0])
    })
}

const cattree = (e) => {
    catTreeComfirmationScreen.style.display = 'flex';
    catTreeComfirmationScreen.classList.add('popup');
    document.querySelector('.cat-tree-open-comfirmation__btn-div div:first-child').addEventListener('click',()=>{
        catTreeComfirmationScreen.classList.remove('popup');
        catTreeComfirmationScreen.style.display = 'none';
        catTreeScreen.classList.add('popup');
        catTreeScreen.style.display = 'flex';

        document.body.appendChild(document.querySelector('.cat-tree').cloneNode(true))
        document.body.removeChild(document.querySelector('.cat-tree'));
        catTreeScreen = document.querySelector('.cat-tree');

        document.querySelectorAll('.cat-tree__div > div')[0].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            open(apiInfo[catId].breeds[0].cfa_url)
        });
        document.querySelectorAll('.cat-tree__div > div')[1].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            open(apiInfo[catId].breeds[0].vcahospitals_url)
        })
        document.querySelectorAll('.cat-tree__div > div')[2].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            open(apiInfo[catId].breeds[0].vetstreet_url)
        })
        document.querySelectorAll('.cat-tree__div > div')[3].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            open(apiInfo[catId].breeds[0].wikipedia_url)
        })

        document.querySelector('.cat-tree').addEventListener('click',e=>{
            if(e.target.classList[0] == 'cat-tree'){
                catTreeScreen.classList.remove('popup');
                catTreeScreen.style.display = 'none';
            }
        })
    })
    document.querySelector('.cat-tree-open-comfirmation__btn-div div:nth-child(2)').addEventListener('click',()=>{
        catTreeComfirmationScreen.classList.remove('popup');
        catTreeComfirmationScreen.style.display = 'none';
    })
}

const generatePost = () => {
    try{
        const catpost = document.createElement('DIV');
        catpost.classList.add('cat-post'); catpost.id = `cat${catCount}`; catpost.setAttribute('followers',Math.floor(Math.random()*10000));

        const catPostImgContainer = document.createElement('DIV');
        catPostImgContainer.classList.add('cat-post__img-container');
        const postImgContainerImg = document.createElement('IMG');
        postImgContainerImg.classList.add('post-img-container__img');
        postImgContainerImg.src = apiInfo[catCount].url;
        catPostImgContainer.appendChild(postImgContainerImg);

        const catPostDesc = document.createElement('DIV');
        catPostDesc.classList.add('cat-post__description');
        const descriptionProfile = document.createElement('DIV');
        descriptionProfile.classList.add('description__profile');
        const profileImgContainer = document.createElement('DIV');
        profileImgContainer.classList.add('profile__img-container');
        const imgContainerImg = document.createElement('IMG');
        imgContainerImg.classList.add('img-container__img');
        imgContainerImg.src = `pfp/${Math.floor(Math.random() * 14) + 1}.webp`;
        profileImgContainer.appendChild(imgContainerImg);
        const h4 = document.createElement('H4');
        h4.classList.add('profile__h4');
        h4.innerHTML = apiInfo[catCount].breeds[0].name;
        const profileFollow = document.createElement('DIV');
        profileFollow.classList.add('profile__follow')
        const i = document.createElement('I');
        i.classList.add('fa-regular');
        i.classList.add('fa-heart');
        profileFollow.appendChild(i);
        descriptionProfile.appendChild(profileImgContainer);
        descriptionProfile.appendChild(h4);
        descriptionProfile.appendChild(profileFollow);
        const p = document.createElement('P');
        p.classList.add('description__p'),
        p.innerHTML = apiInfo[catCount].breeds[0].description;
        catPostDesc.appendChild(descriptionProfile);
        catPostDesc.appendChild(p);

        const catPostComments = document.createElement('DIV');
        catPostComments.classList.add('cat-post__comments')
        const commentsComment = document.createElement('DIV');
        commentsComment.classList.add('comments__comment')
        const commentProfilePicture = document.createElement('DIV');
        commentProfilePicture.classList.add('comment__profile-picture')
        const profilePictureImg = document.createElement('IMG');
        profilePictureImg.src = `pfp/${Math.floor(Math.random() * 14) + 1}.webp`;
        commentProfilePicture.appendChild(profilePictureImg);
        const commentProfileName = document.createElement('DIV');
        commentProfileName.classList.add('comment__profile-name');
        commentProfileName.innerHTML = commentPreset.name[Math.floor(Math.random() * commentPreset.name.length)] + ":";
        const commentP = document.createElement('DIV');
        commentP.classList.add('comment__p');
        commentP.innerHTML = commentPreset.comment[Math.floor(Math.random() * commentPreset.comment.length)];
        commentsComment.appendChild(commentProfilePicture);
        commentsComment.appendChild(commentProfileName);
        commentsComment.appendChild(commentP);

        const commentsInputBar = document.createElement('DIV');
        commentsInputBar.classList.add('comments__input-bar');
        const input1 = document.createElement('INPUT');
        input1.type = 'text'; input1.placeholder = 'Add a comment...';
        input1.classList.add('input-bar__text'); input1.spellcheck = 'false';
        const input2 = document.createElement('INPUT');
        input2.type = 'button'; input2.value = 'Send';
        commentsInputBar.appendChild(input1);
        commentsInputBar.appendChild(input2);

        catPostComments.appendChild(commentsComment);
        catPostComments.appendChild(commentsInputBar);

        catpost.appendChild(catPostImgContainer);
        catpost.appendChild(catPostDesc);
        catpost.appendChild(catPostComments);
        
        document.querySelector('main').appendChild(catpost);

    //     document.querySelector("main").innerHTML += 
    //    `<div class="cat-post" id="cat${catCount}" followers="${Math.floor(Math.random()*10000)}">
    
    //    <div class="cat-post__img-container">
    //        <img class="post-img-container__img" src="${apiInfo[catCount].url}">
    //    </div>
    
    //    <div class="cat-post__description">
    //        <div class="description__profile">
    //            <div class="profile__img-container">
    //                <img class="img-container__img" src="pfp/${Math.floor(Math.random() * 14) + 1}.webp">
    //            </div>
    //            <h4 class="profile__h4">${apiInfo[catCount].breeds[0].name}</h4>
    //            <div class="profile__follow">
    //                <i class="fa-regular fa-heart"></i>
    //            </div>
    //        </div>
    //        <p class="description__p">${apiInfo[catCount].breeds[0].description}</p>
    //    </div>
    
    //    <div class="cat-post__comments">
    //        <div class="comments__comment">
    //            <div class="comment__profile-picture">
    //                 <img src="pfp/${Math.floor(Math.random() * 14) + 1}.webp">
    //            </div>
    //            <div class="comment__profile-name">${commentPreset.name[Math.floor(Math.random() * commentPreset.name.length)]}:</div>
    //            <div class="comment__p">${commentPreset.comment[Math.floor(Math.random() * commentPreset.comment.length)]}</div>
    //        </div>
    
    //        <div class="comments__input-bar">
    //            <input type="text" placeholder="Add a comment..." class="input-bar__text" spellcheck="false">
    //            <input type="button" value="Send">
    //        </div>
    //    </div>
    // </div>`;
    console.log(catCount)
    catCount++;
    }catch(e){
        if(catCount <= 100){
            console.log(catCount)
            catCount++;
            generatePost();
        }else{
            document.querySelector("loading").style.display = 'none';
        }
    }
}

const comment = e => {
    const text = e.target.parentElement.children[0].value;
    if(text != "" && !e.target.classList.contains("commented") && e.target.parentElement.children[0].classList[0] == 'input-bar__text'){
        let pfp = document.createElement("DIV");
        pfp.classList.add("comment__profile-picture");
        let img = document.createElement('IMG');
        img.src = selfCommentImgSrc;
        pfp.appendChild(img);

        let profileName = document.createElement("DIV");
        profileName.classList.add("comment__profile-name");
        profileName.textContent = "YOU: "

        let p = document.createElement("DIV");
        p.classList.add("comment__p");
        p.textContent = text;

        let comment = document.createElement("DIV");
        comment.style.marginTop = '8px';
        comment.classList.add("comments__comment");
        comment.appendChild(pfp);
        comment.appendChild(profileName);
        comment.appendChild(p);

        e.target.parentElement.parentElement.appendChild(comment);
        e.target.classList.add("commented");
        e.target.parentElement.children[0].value = "";

    //     e.target.parentElement.parentElement.innerHTML += 
    //    `<div class="comments__comment" style="margin-top: 8px;">
    //         <div class="comment__profile-picture"></div>
    //         <div class="comment__profile-name">ME:</div>
    //         <div class="comment__p">${text}</div>
    //     </div>`
    }
}

addEventListener('keypress',(e)=>{
    if(e.key == 'Enter') comment(e);
})

const scrollToCat = () => scroll(0, document.getElementById(followed[followed.length - 1]).offsetHeight);
const changeFollowList = (add,e,catName) => {
    if(add && document.querySelector('.followed__list').clientHeight < document.querySelector('.container').clientHeight - 500){
        let listItemCloned = document.querySelector(".list__item").cloneNode(true);
        listItemCloned.style.display = 'flex';
        listItemCloned.href = `#${e.target.parentElement.parentElement.parentElement.parentElement.id}`;
        listItemCloned.children[0].children[0].src = e.target.parentElement.parentElement.children[0].children[0].src;
        listItemCloned.children[1].textContent = e.target.parentElement.parentElement.children[1].textContent;
        listItemCloned.children[2].innerHTML = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('followers') + "<br>" + " FOLLOWERS";

        document.querySelector(".followed__list").appendChild(listItemCloned);
        //NEEDED TO CHANGE EVERYTHING TO APPENDCHILD TO FIX ERRORS
    }else if(document.querySelector('.followed__list').clientHeight < document.querySelector('.container').clientHeight - 500){
        for( let i of document.querySelector('.followed__list').children ){
            if (i.children[1].textContent == catName) i.parentElement.removeChild(i);
        }
    }else{
        document.querySelector('.container__three-dots').style.display = 'flex';
    }
}

const follow = e => {
        if(document.querySelector('.followed__list').clientHeight < document.querySelector('.container').clientHeight - 500){
            if(e.target.classList.contains("fa-regular")){
                e.target.classList.replace("fa-regular","fa-solid");
                e.target.style.color = '#522';
                followed.push(e.target.parentElement.parentElement.parentElement.parentElement.id);
                changeFollowList(true,e);
            }
            else{
                e.target.classList.replace("fa-solid","fa-regular");
                e.target.style.color = '#223';
                
                const index = followed.indexOf(e.target.parentElement.parentElement.parentElement.parentElement.id);
                if (index > -1) { // only splice followed when item is found
                  followed.splice(index, 1); // 2nd parameter means remove one item only
                }
                changeFollowList(false,e,e.target.parentElement.parentElement.children[1].textContent); //SECOND PARAMETER = CAT NAME, MAY BE NECCESARY TO DELETE IT FROM THE LIST
            }
        }else{
            document.querySelector('.container__max').style.display = 'block';
            document.querySelector('.container__max').classList.add('vanish');
            setTimeout(() => {
                document.querySelector('.container__max').classList.remove('vanish');
                document.querySelector('.container__max').style.display = 'none';
            }, 2000);
        }

    if(followed.length == 0){
        document.querySelector('.container__placeholder').style.display = 'block';
    }else{
        document.querySelector('.container__placeholder').style.display = 'none';
    }
}

function shuffle(array) {
    let currentIndex = array.length;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  }

const getApi = async () => {
    document.querySelector('.loading').style.top = '32px';
    await fetch("https://api.thecatapi.com/v1/images/search?limit=100&has_breeds=1",{
        request: "GET",
        headers: {"x-api-key": "live_LpcOOa2VUTBXwXsRz3h1r3iyjibZtUVDGvyna8TkQy814hIixStPaRWwYvxf6r39"}
    }).then(res => res.json()).then(res => {
        document.querySelector('.loading').style.top = '0px';
        //THIS WILL EXECUTE WHEN API IS LOADED
        //WHEN LOADING THE PAGE IT WILL AUTOMATICALLY GENERATE TWO POSTS
        shuffle(res);
        apiInfo = res;
        for(let i = 0; i < 2; i++){
            generatePost();
        }

        for(let i of document.querySelectorAll(".profile__follow")){
            i.addEventListener("click",follow);
        };


        for(let i of document.querySelectorAll(".comments__input-bar input:nth-child(2)")){
            i.addEventListener("click",comment);
        };

        for(let i of document.querySelectorAll('.cat-post__img-container')){
            i.addEventListener('click',cattree)
        }
    })
};

addEventListener("scroll",e => {
    if(scrollY + document.querySelector("aside").clientHeight >= document.body.clientHeight - 3){ //ASIDE ACTS LIKE AN 1VH
        setTimeout(() => {
            if(scrollY != 0){
                for(let i = 0; i < 2; i++){
                    generatePost();
                }
            }
            for(let i of document.querySelectorAll(".comments__input-bar input:nth-child(2)")){
                i.addEventListener("click",comment);
            };
            for(let i of document.querySelectorAll(".profile__follow")){
                i.addEventListener("click",follow);
            }
            for(let i of document.querySelectorAll('.cat-post__img-container')){
                if(i.classList.contains('sharedPost')){
                    
                }else{
                    i.addEventListener('click',cattree);
                }
            }
        }, 500);
    }
});

const filterStrenghtInput = document.querySelector('.edit-post-screen__filters-strenth-drag');
const filters = document.querySelectorAll('.edit-post-screen__filter');
const editPostImg = document.querySelector('.edit-post-screen__img');

document.querySelector('.edit-post-screen__filters-drag').addEventListener('input',(e)=>{
    const input = document.querySelector('.edit-post-screen__filters-drag');
    const filtersDiv = document.querySelector('.edit-post-screen__filters-div');
    filtersDiv.scroll(filtersDiv.scrollWidth * (input.value / 100) - filtersDiv.clientWidth * (input.value / 100), 0);
});

let filterStrenghtCoeficient = 1;
let selectedFilter;
filterStrenghtInput.addEventListener('input',(e)=>{
    if (selectedFilter == 'hue-rotate'){
        filterStrenghtInput.max = 360;
        filterStrenghtCoeficient = filterStrenghtInput.value;
        editPostImg.style.filter = `${selectedFilter}(${filterStrenghtCoeficient}deg)`;
    } else {
        filterStrenghtCoeficient = filterStrenghtInput.value / 50;
        editPostImg.style.filter = `${selectedFilter}(${filterStrenghtCoeficient})`;
    }
})

for(let i of filters){
    i.addEventListener('click',(e)=>{
        switch (i.textContent) {
            case 'SEPIA': 
                filterStrenghtInput.value = 50;
                filterStrenghtCoeficient = 1;
                filterStrenghtInput.max = 100;
                editPostImg.style.filter = `sepia(${filterStrenghtCoeficient})`; 
                selectedFilter = 'sepia';
            break;
            case 'GRAYSCALE': 
                filterStrenghtInput.value = 50;
                filterStrenghtCoeficient = 1;
                filterStrenghtInput.max = 100;
                editPostImg.style.filter = `grayscale(${filterStrenghtCoeficient})`; 
                selectedFilter = 'grayscale';
            break;
            case 'INVERT': 
                filterStrenghtInput.value = 50;
                filterStrenghtCoeficient = 1;
                filterStrenghtInput.max = 100;
                editPostImg.style.filter = `invert(${filterStrenghtCoeficient})`; 
                selectedFilter = 'invert';
            break;
            case 'SATURATE': 
                filterStrenghtInput.value = 50;
                filterStrenghtCoeficient = 1;
                filterStrenghtInput.max = 100;
                editPostImg.style.filter = `saturate(${filterStrenghtCoeficient})`; 
                selectedFilter = 'saturate';
            break;
            case 'CONTRAST': 
                filterStrenghtInput.value = 50;
                filterStrenghtCoeficient = 1;
                filterStrenghtInput.max = 100;
                editPostImg.style.filter = `contrast(${filterStrenghtCoeficient})`; 
                selectedFilter = 'contrast';
            break;
            case 'HUE ROTATE': 
                editPostImg.style.filter = `hue-rotate(${filterStrenghtCoeficient}deg)`; 
                selectedFilter = 'hue-rotate';
            break;
        }
    })
}

const shareBtn = document.querySelector('.edit-post-screen__share-btn');
shareBtn.addEventListener('click',(e)=>{

    editPostScreen.classList.add('unpopup');
    setTimeout(() => {
        editPostScreen.style.display = 'none';
        editPostScreen.classList.remove('popup');
        editPostScreen.classList.remove('unpopup');
    }, 300);

    const catpost = document.createElement('DIV');
        catpost.classList.add('cat-post'); catpost.id = `cat${catCount}`; catpost.setAttribute('followers',1);

        const catPostImgContainer = document.createElement('DIV');
        catPostImgContainer.classList.add('cat-post__img-container');
        const postImgContainerImg = document.createElement('IMG');
        postImgContainerImg.classList.add('post-img-container__img');
        postImgContainerImg.src = document.querySelector('.edit-post-screen__img').src;
        postImgContainerImg.style.filter = `${selectedFilter}(${filterStrenghtCoeficient})`;
        catPostImgContainer.style.height = '656px';
        catPostImgContainer.appendChild(postImgContainerImg);

        const catPostDesc = document.createElement('DIV');
        catPostDesc.classList.add('cat-post__description');
        const descriptionProfile = document.createElement('DIV');
        descriptionProfile.classList.add('description__profile');
        const profileImgContainer = document.createElement('DIV');
        profileImgContainer.classList.add('profile__img-container');
        const imgContainerImg = document.createElement('IMG');
        imgContainerImg.classList.add('img-container__img');
        imgContainerImg.src = selfCommentImgSrc;
        profileImgContainer.appendChild(imgContainerImg);
        const h4 = document.createElement('H4');
        h4.classList.add('profile__h4');
        h4.innerHTML = 'YOU';
        const profileFollow = document.createElement('DIV');
        profileFollow.classList.add('profile__follow')
        const i = document.createElement('I');
        i.classList.add('fa-regular');
        i.classList.add('fa-heart');
        profileFollow.appendChild(i);
        descriptionProfile.appendChild(profileImgContainer);
        descriptionProfile.appendChild(h4);
        descriptionProfile.appendChild(profileFollow);
        const p = document.createElement('P');
        p.classList.add('description__p'),
        p.innerHTML = document.getElementById('textareaDesc').value;
        catPostDesc.appendChild(descriptionProfile);
        catPostDesc.appendChild(p);

        const catPostComments = document.createElement('DIV');
        catPostComments.classList.add('cat-post__comments')
        const commentsComment = document.createElement('DIV');
        commentsComment.classList.add('comments__comment')
        const commentProfilePicture = document.createElement('DIV');
        commentProfilePicture.classList.add('comment__profile-picture')
        const profilePictureImg = document.createElement('IMG');
        profilePictureImg.src = `pfp/${Math.floor(Math.random() * 14) + 1}.webp`;
        commentProfilePicture.appendChild(profilePictureImg);
        const commentProfileName = document.createElement('DIV');
        commentProfileName.classList.add('comment__profile-name');
        commentProfileName.innerHTML = commentPreset.name[Math.floor(Math.random() * commentPreset.name.length)] + ":";
        const commentP = document.createElement('DIV');
        commentP.classList.add('comment__p');
        commentP.innerHTML = commentPreset.comment[Math.floor(Math.random() * commentPreset.comment.length)];
        commentsComment.appendChild(commentProfilePicture);
        commentsComment.appendChild(commentProfileName);
        commentsComment.appendChild(commentP);

        const commentsInputBar = document.createElement('DIV');
        commentsInputBar.classList.add('comments__input-bar');
        const input1 = document.createElement('INPUT');
        input1.type = 'text'; input1.placeholder = 'Add a comment...';
        input1.classList.add('input-bar__text'); input1.spellcheck = 'false';
        const input2 = document.createElement('INPUT');
        input2.type = 'button'; input2.value = 'Send';
        commentsInputBar.appendChild(input1);
        commentsInputBar.appendChild(input2);

        catPostComments.appendChild(commentsComment);
        catPostComments.appendChild(commentsInputBar);

        catpost.appendChild(catPostImgContainer);
        catpost.appendChild(catPostDesc);
        catpost.appendChild(catPostComments);

        catPostImgContainer.classList.add('sharedPost');
        
        document.querySelector('main').appendChild(catpost);

    setTimeout(() => {
        scroll(0,document.documentElement.scrollHeight - 1)
    }, 50);

})

document.querySelector('.upload-screen__close').addEventListener('click',(e)=>{
    uploadScreen.classList.add('unpopup');
    document.querySelector('.upload-screen__p').style.display = 'block';
    setTimeout(() => {
        uploadScreen.style.display = 'none';
        uploadScreen.classList.remove('unpopup');
        uploadScreen.classList.remove('popup');

    }, 300);
});

document.querySelector('.edit-post-screen__close').addEventListener('click',(e)=>{
    editPostScreen.classList.add('unpopup');
    setTimeout(() => {
        editPostScreen.style.display = 'none';
        editPostScreen.classList.remove('unpopup');
        editPostScreen.classList.remove('popup');

    }, 300);
})

document.querySelector('.instagram').addEventListener('click',()=>{
    open('https://www.instagram.com/isma.hr17/')
})
document.querySelector('.github').addEventListener('click',()=>{
    open('https://github.com/XLoky')
})
getApi()