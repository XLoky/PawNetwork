"use strict";
let apiInfo;
let catCount = 0;
let followed = [];
const videos = document.querySelectorAll('video');
const catTreeComfirmationScreen = document.querySelector('.cat-tree-open-comfirmation');
let catTreeScreen = document.querySelector('.cat-tree');
const selfCommentImgSrc = `pfp/${Math.floor(Math.random() * 14) + 1}.webp`
const commentPreset = 
{
    name: 
    [
        'MEOWMASTER', 'PURRFECTPAWS42', 'FELINEFANATIC', 
        'WHISKERWONDER123', 'CATNIPCONNOISSEUR88', 'KITTYKRAZE555', 
        'CLAWCRAFTER', 'PAWSITIVEVIBES777', 'CATWHISPERER314', 
        'FURRYFELINE', 'PURRSONALITY1234', 'WHISKERWISDOM999', 
        'PAWPROWESS50', 'CATCHATCHAMPION', 'FURBALLFRENZY333'
    ],
    comment:
    [
        'AWESOME!!', "I'D REALLY LIKE TO SEE MORE LIKE THIS!",
        '🐱', "YOU'RE PURRRTIFUL :P", 'TELL US MORE!!!',
        'I WANNA BE LIKE YOU :((('
    ]
}


const uploadInput = document.getElementById('uploadInput');
const filereader = new FileReader();
uploadInput.addEventListener('change',(e)=>{
    filereader.readAsDataURL(uploadInput.files[0]);
    filereader.addEventListener('load',(e)=>{
        console.log(e.currentTarget.result)
    })
});
uploadInput.addEventListener('dragover',(e)=>{
    e.preventDefault();
});

document.querySelector(".loading").style.left = `${document.querySelector("main").clientWidth / 2 + 330}px`;

const changeVideo = (e) => {
    console.count()
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
    console.log(video)
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
        console.log(e)
        catTreeScreen.classList.add('popup');
        catTreeScreen.style.display = 'flex';

        document.body.appendChild(document.querySelector('.cat-tree').cloneNode(true))
        document.body.removeChild(document.querySelector('.cat-tree'));
        catTreeScreen = document.querySelector('.cat-tree');

        document.querySelectorAll('.cat-tree__div > div')[0].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            console.log(apiInfo[catId].breeds[0]);
            open(apiInfo[catId].breeds[0].cfa_url)
        });
        document.querySelectorAll('.cat-tree__div > div')[1].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            console.log(apiInfo[catId].breeds[0]);
            open(apiInfo[catId].breeds[0].vcahospitals_url)
        })
        document.querySelectorAll('.cat-tree__div > div')[2].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            console.log(apiInfo[catId].breeds[0]);
            open(apiInfo[catId].breeds[0].vetstreet_url)
        })
        document.querySelectorAll('.cat-tree__div > div')[3].addEventListener('click',()=>{
            let catId = e.target.parentElement.parentElement.id.substring(3,4);
            console.log(apiInfo[catId].breeds[0]);
            open(apiInfo[catId].breeds[0].wikipedia_url)
        })

        document.querySelector('.cat-tree').addEventListener('click',e=>{
            if(e.target.classList[0] == 'cat-tree'){
                console.log("a")
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
    catCount++;
    }catch(e){
        if(catCount <= 100){
            console.log(e)
            catCount++;
            generatePost();
        }else{
            document.querySelector("loading").style.display = 'none';
        }
    }
}

const comment = e => {
    const text = e.target.parentElement.children[0].value;
    if(text != "" && !e.target.classList.contains("commented")){
        console.log(e.target.parentElement.parentElement);
        let pfp = document.createElement("DIV");
        pfp.classList.add("comment__profile-picture");
        let img = document.createElement('IMG');
        img.src = selfCommentImgSrc;
        pfp.appendChild(img);

        let profileName = document.createElement("DIV");
        profileName.classList.add("comment__profile-name");
        profileName.textContent = "ME: "

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
    if(add){
        let listItemCloned = document.querySelector(".list__item").cloneNode(true);
        listItemCloned.style.display = 'flex';
        listItemCloned.href = `#${e.target.parentElement.parentElement.parentElement.parentElement.id}`;
        listItemCloned.children[0].children[0].src = e.target.parentElement.parentElement.children[0].children[0].src;
        listItemCloned.children[1].textContent = e.target.parentElement.parentElement.children[1].textContent;
        listItemCloned.children[2].innerHTML = e.target.parentElement.parentElement.parentElement.parentElement.getAttribute('followers') + "<br>" + " FOLLOWERS";

        document.querySelector(".followed__list").appendChild(listItemCloned);
        //NEEDED TO CHANGE EVERYTHING TO APPENDCHILD TO FIX ERRORS
    }else{
        for( let i of document.querySelector('.followed__list').children ){
            if (i.children[1].textContent == catName) i.parentElement.removeChild(i);
        }
    }
}

const follow = e => {
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
}

const getApi = async () => {
    await fetch("https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1",{
        request: "GET",
        headers: {"x-api-key": "live_LpcOOa2VUTBXwXsRz3h1r3iyjibZtUVDGvyna8TkQy814hIixStPaRWwYvxf6r39"}
    }).then(res => res.json()).then(res => {
        //THIS WILL EXECUTE WHEN API IS LOADED
        //WHEN LOADING THE PAGE IT WILL AUTOMATICALLY GENERATE TWO POSTS
        apiInfo = res;
        console.log(apiInfo)
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
    if(scrollY + document.querySelector("aside").clientHeight - 48 >= document.body.clientHeight){ //ASIDE ACTS LIKE AN 1VH
        console.log("ahora");
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
                i.addEventListener('click',cattree)
            }
        }, 500);
    }
})
getApi()