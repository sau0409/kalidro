//on document load add a listner

document.addEventListener("DOMContentLoaded", () => {

    console.log("entering in js file");

    //about 2 section interactions
    const SLIDETIME = 500;
    const dotBtns = document.querySelectorAll('.dotBtn');
    const aboutSlides = document.querySelectorAll('.about-slide-div');

    let dotBtnClickable = true;
    let activeAboutSlideIndex = 0;
    let newActiveAboutSlideIndex = null;
    let activeAboutSlide = null;
    let newActiveAboutSlide = null;

    // add listner to dot button

    dotBtns.forEach((el, index) => {
        el.addEventListener("click", () => {
            el.classList.add("about-slide-btn-active");

            if (index !== 0 && newActiveAboutSlideIndex === null) {
                newActiveAboutSlideIndex = index;
                dotBtnClickable = true;
                changeSlide(activeAboutSlideIndex, newActiveAboutSlideIndex);
            } else if (activeAboutSlideIndex !== null && newActiveAboutSlideIndex !== null && newActiveAboutSlideIndex !== activeAboutSlideIndex && newActiveAboutSlideIndex !== index) {
                activeAboutSlideIndex = newActiveAboutSlideIndex;
                newActiveAboutSlideIndex = index;
                dotBtnClickable = true;
                changeSlide(activeAboutSlideIndex, newActiveAboutSlideIndex);
            }

            dotBtns.forEach(el2 => {
                if (el.id !== el2.id) {
                    el2.classList.remove("about-slide-btn-active");
                }
            });
        });
    });

    aboutSlides.forEach(slide => {
        slide.addEventListener('transitioned', () => {
            if (slide === activeAboutSlide && !dotBtnClickable) {
                dotBtnClickable = true;
                activeAboutSlide.className = "about-slide-div";

            }
        })
    });

    // change slide function

    function changeSlide(actIndex, newActIndex) {

        if (dotBtnClickable) {
            dotBtnClickable = false;
            activeAboutSlide = document.querySelector(".about-active");

            if (actIndex > newActIndex) {
                newActiveAboutSlide = aboutSlides[newActIndex];
                activeAboutSlide.classList.add("aboutSlideOutRight");
                activeAboutSlide.classList.remove('aboutSlideInLeft', 'about-active', 'aboutSlideInRight', 'aboutSlideOutLeft');
                newActiveAboutSlide.classList.add('aboutSlideInLeft', 'about-active');
                newActiveAboutSlide.classList.remove('aboutSlideOutLeft', 'aboutSlideInRight', 'aboutSlideOutRight');
            } else {
                newActiveAboutSlide = aboutSlides[newActIndex];
                activeAboutSlide.classList.add('slideOutLaboutSlideOutLefteft');
                activeAboutSlide.classList.remove('aboutSlideInRight', 'about-active', 'aboutSlideInLeft', 'aboutSlideOutRight');
                newActiveAboutSlide.classList.add('aboutSlideInRight', 'about-active');
                newActiveAboutSlide.classList.remove('aboutSlideOutLeft', 'aboutSlideInLeft', 'aboutSlideOutRight');
            }
        }

    }




    // feature section interaction


    const instituetListArr = ['One click conference solution', 'Intricate Staff Management', 'Conduct Hassle-free Examination', 'Secured In-built Payment Gateway', 'AI Assisted Analysis of Student’s Progress'];
    const instituteImgArr = ["images/feature/institute/institute-img-1.png", "images/feature/institute/institute-img-2.png", "images/feature/institute/institute-img-3.png", "images/feature/institute/institute-img-4.png", "images/feature/institute/institute-img-5.png"];
    const educatorListArr = ['Revenue through test creation', 'Conduct Hassle-free examination', 'One click parent teacher meet', 'Secured In-built Payment Gateway', 'AI Assisted Analysis of Student’s Progress'];
    const educatorImgArr = ["images/feature/educator/educator-img-1.png", "images/feature/educator/educator-img-2.png", "images/feature/educator/educator-img-3.png", "images/feature/educator/educator-img-4.png", "images/feature/educator/educator-img-5.png"];

    const featureBtns = document.querySelectorAll(".feature-slide-btn");
    const featureSlides = document.querySelectorAll('.feature-slide-div');

    let featureBtnClickable = true;
    let activeFeatureSlideIndex = 0;
    let newActiveFeatureSlideIndex = null;
    let activeFeatureSlide = null;
    let newActiveFeatureSlide = null;


    //listner for feature btns

    featureBtns.forEach((el, index) => {
        el.addEventListener("click", () => {
            el.classList.add("feature-slide-btn-active");
            if (el.id == 'feature-slideBtn-1') {
                myFeatureList1Move();
            } else if (el.id == 'feature-slideBtn-2') {
                myFeatureList2Move();
            }
            if (index !== 0 && newActiveFeatureSlideIndex === null) {
                newActiveFeatureSlideIndex = index;
                featureBtnClickable = true;
                changeFeatureSlide(activeFeatureSlideIndex, newActiveFeatureSlideIndex);
            } else if (activeFeatureSlideIndex !== null && newActiveFeatureSlideIndex !== null && newActiveFeatureSlideIndex !== activeFeatureSlideIndex && newActiveFeatureSlideIndex !== index) {
                activeFeatureSlideIndex = newActiveFeatureSlideIndex;
                newActiveFeatureSlideIndex = index;
                featureBtnClickable = true;
                changeFeatureSlide(activeFeatureSlideIndex, newActiveFeatureSlideIndex);
            }
            featureBtns.forEach(el2 => {
                if (el.id !== el2.id) {
                    el2.classList.remove("feature-slide-btn-active");
                }
            });
        });
    });


    featureSlides.forEach(slide => {
        slide.addEventListener('transitioned', () => {
            if (slide === activeFeatureSlide && !featureBtnClickable) {
                featureBtnClickable = true;
                activeFeatureSlide.className = "about-slide-div";

            }
        })
    });

    // change slide function

    function changeFeatureSlide(actIndex, newActIndex) {

        if (featureBtnClickable) {
            featureBtnClickable = false;
            activeFeatureSlide = document.querySelector(".feature-active");

            if (actIndex > newActIndex) {
                newActiveFeatureSlide = featureSlides[newActIndex];
                activeFeatureSlide.classList.add("featureSlideOutRight");
                activeFeatureSlide.classList.remove('featureSlideInLeft', 'feature-active', 'aboutSlideInRight', 'aboutSlideOutLeft');
                newActiveFeatureSlide.classList.add('featureSlideInLeft', 'feature-active');
                newActiveFeatureSlide.classList.remove('featureSlideOutLeft', 'aboutSlideInRight', 'aboutSlideOutRight');
            } else {
                newActiveFeatureSlide = featureSlides[newActIndex];
                activeFeatureSlide.classList.add('slideOutLfeatureSlideOutLefteft');
                activeFeatureSlide.classList.remove('featureSlideInRight', 'feature-active', 'featureSlideInLeft', 'featureSlideOutRight');
                newActiveFeatureSlide.classList.add('featureSlideInRight', 'feature-active');
                newActiveFeatureSlide.classList.remove('featureSlideOutLeft', 'featureSlideInLeft', 'featureSlideOutRight');
            }
        }

    }

    let instituteDiv = document.getElementById("featureContainer");


    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };

    let scrollEvevnt = 0

    function windowScrollListner() {
        window.addEventListener("scroll", function () {
            if (isInViewport(instituteDiv) && scrollEvevnt == 0) {
                myFeatureList1Move();
                scrollEvevnt = 1;
            }
        });
    }

    windowScrollListner();



    // function to change image and list items in feature div 1

    function myFeatureList1Move() {

        setTimeout(() => {
            document.getElementById('feature-div-1-list-1').innerText = " ";
            document.getElementById('feature-div-1-list-2').innerText = " ";
            document.getElementById('feature-div-1-list-3').innerText = instituetListArr[0];
            document.getElementById('feature-div-1-list-4').innerText = instituetListArr[1];
            document.getElementById('feature-div-1-list-5').innerText = instituetListArr[2];

            let newImg = document.createElement("img");
            document.getElementById("feature-div-1-img").appendChild(newImg);
            newImg.classList.add("feature-div-1-img-1", "feature-div-1", "featImgOut");
            newImg.setAttribute("id", "institute-img");
            document.getElementById("institute-img").src = instituteImgArr[0];

        }, 100);

        setTimeout(() => {
            document.getElementById('feature-div-1-list-1').innerText = " ";
            document.getElementById('feature-div-1-list-2').innerText = instituetListArr[0];
            document.getElementById('feature-div-1-list-3').innerText = instituetListArr[1];
            document.getElementById('feature-div-1-list-4').innerText = instituetListArr[2];
            document.getElementById('feature-div-1-list-5').innerText = instituetListArr[3];
            document.getElementById("institute-img").src = instituteImgArr[1];
        }, 2000);

        setTimeout(() => {
            document.getElementById('feature-div-1-list-1').innerText = instituetListArr[0];
            document.getElementById('feature-div-1-list-2').innerText = instituetListArr[1];
            document.getElementById('feature-div-1-list-3').innerText = instituetListArr[2];
            document.getElementById('feature-div-1-list-4').innerText = instituetListArr[3];
            document.getElementById('feature-div-1-list-5').innerText = instituetListArr[4];
            document.getElementById("institute-img").src = instituteImgArr[2];
        }, 4000);

        setTimeout(() => {
            document.getElementById('feature-div-1-list-1').innerText = instituetListArr[1];
            document.getElementById('feature-div-1-list-2').innerText = instituetListArr[2];
            document.getElementById('feature-div-1-list-3').innerText = instituetListArr[3];
            document.getElementById('feature-div-1-list-4').innerText = instituetListArr[4];
            document.getElementById('feature-div-1-list-5').innerText = " ";
            document.getElementById("institute-img").src = instituteImgArr[3];
        }, 6000);

        setTimeout(() => {
            document.getElementById('feature-div-1-list-1').innerText = instituetListArr[2];
            document.getElementById('feature-div-1-list-2').innerText = instituetListArr[3];
            document.getElementById('feature-div-1-list-3').innerText = instituetListArr[4];
            document.getElementById('feature-div-1-list-4').innerText = " ";
            document.getElementById('feature-div-1-list-5').innerText = " ";
            document.getElementById("institute-img").src = instituteImgArr[4];
        }, 8000);

        setTimeout(() => {
            document.getElementById('feature-div-1-list-1').innerText = instituetListArr[0];
            document.getElementById('feature-div-1-list-2').innerText = instituetListArr[1];
            document.getElementById('feature-div-1-list-3').innerText = instituetListArr[2];
            document.getElementById('feature-div-1-list-4').innerText = instituetListArr[3];
            document.getElementById('feature-div-1-list-5').innerText = instituetListArr[4];
            document.getElementById("institute-img").src = instituteImgArr[2];
        }, 10000);

    }


    // institute list item listner

    let featDivList = document.querySelectorAll(".feature-div-1-list");
    featDivList.forEach((el) => {

        el.addEventListener("click", () => {

            featDivList.forEach(ele => {
                ele.setAttribute("style", `
                opacity: 0.4;
        color: #124F3F;
        background-color: transparent;
                `)
            });
            el.setAttribute("style", `
            opacity: 1;
            background-color: #BEE8DC;
    border-radius: 25px;
    color: #124F3F;
            `);
            document.getElementById("institute-img").remove();
            let newImg = document.createElement("img");
            document.getElementById("feature-div-1-img").appendChild(newImg);
            newImg.classList.add("feature-div-1-img-1", "feat-div-1", "featImgOut");
            newImg.setAttribute("id", "institute-img");
            elText = el.textContent;
            let imInd = instituetListArr.indexOf(elText);
            document.getElementById("institute-img").src = instituteImgArr[imInd];
        });

    });



    // function to change image and list items in feature div 1

    function myFeatureList2Move() {

        setTimeout(() => {
            console.log("slide1");
            document.getElementById('feature-div-2-list-1').innerText = " ";
            document.getElementById('feature-div-2-list-2').innerText = " ";
            document.getElementById('feature-div-2-list-3').innerText = educatorListArr[0];
            document.getElementById('feature-div-2-list-4').innerText = educatorListArr[1];
            document.getElementById('feature-div-2-list-5').innerText = educatorListArr[2];

            let newImg = document.createElement("img");
            document.getElementById("feature-div-2-img").appendChild(newImg);
            newImg.classList.add("feature-div-2-img-1", "feature-div-1", "featImgOut");
            newImg.setAttribute("id", "educator-img");
            document.getElementById("educator-img").src = educatorImgArr[0];

        }, 100);

        setTimeout(() => {
            console.log("slide2");
            document.getElementById('feature-div-2-list-1').innerText = " ";
            document.getElementById('feature-div-2-list-2').innerText = educatorListArr[0];
            document.getElementById('feature-div-2-list-3').innerText = educatorListArr[1];
            document.getElementById('feature-div-2-list-4').innerText = educatorListArr[2];
            document.getElementById('feature-div-2-list-5').innerText = educatorListArr[3];
            document.getElementById("educator-img").src = educatorImgArr[1];
        }, 2000);

        setTimeout(() => {
            document.getElementById('feature-div-2-list-1').innerText = educatorListArr[0];
            document.getElementById('feature-div-2-list-2').innerText = educatorListArr[1];
            document.getElementById('feature-div-2-list-3').innerText = educatorListArr[2];
            document.getElementById('feature-div-2-list-4').innerText = educatorListArr[3];
            document.getElementById('feature-div-2-list-5').innerText = educatorListArr[4];
            document.getElementById("educator-img").src = educatorImgArr[2];
        }, 4000);

        setTimeout(() => {
            document.getElementById('feature-div-2-list-1').innerText = educatorListArr[1];
            document.getElementById('feature-div-2-list-2').innerText = educatorListArr[2];
            document.getElementById('feature-div-2-list-3').innerText = educatorListArr[3];
            document.getElementById('feature-div-2-list-4').innerText = educatorListArr[4];
            document.getElementById('feature-div-2-list-5').innerText = " ";
            document.getElementById("educator-img").src = educatorImgArr[3];
        }, 6000);

        setTimeout(() => {
            document.getElementById('feature-div-2-list-1').innerText = educatorListArr[2];
            document.getElementById('feature-div-2-list-2').innerText = educatorListArr[3];
            document.getElementById('feature-div-2-list-3').innerText = educatorListArr[4];
            document.getElementById('feature-div-2-list-4').innerText = " ";
            document.getElementById('feature-div-2-list-5').innerText = " ";
            document.getElementById("educator-img").src = educatorImgArr[4];
        }, 8000);

        setTimeout(() => {
            document.getElementById('feature-div-2-list-1').innerText = educatorListArr[0];
            document.getElementById('feature-div-2-list-2').innerText = educatorListArr[1];
            document.getElementById('feature-div-2-list-3').innerText = educatorListArr[2];
            document.getElementById('feature-div-2-list-4').innerText = educatorListArr[3];
            document.getElementById('feature-div-2-list-5').innerText = educatorListArr[4];
            document.getElementById("educator-img").src = educatorImgArr[2];
        }, 10000);

    }


    // educator list item listner

    let featDiv2List = document.querySelectorAll(".feature-div-2-list");
    featDiv2List.forEach((el) => {

        el.addEventListener("click", () => {

            featDiv2List.forEach(ele => {
                ele.setAttribute("style", `
                opacity: 0.4;
        color: #124F3F;
        background-color: transparent;
                `)
            });
            el.setAttribute("style", `
            opacity: 1;
            background-color: #BEE8DC;
    border-radius: 25px;
    color: #124F3F;
            `);
            document.getElementById("educator-img").remove();
            let newImg = document.createElement("img");
            document.getElementById("feature-div-2-img").appendChild(newImg);
            newImg.classList.add("feature-div-2-img-1", "feat-div-1", "featImgOut");
            newImg.setAttribute("id", "educator-img");
            elText = el.textContent;
            let imInd = educatorListArr.indexOf(elText);
            document.getElementById("educator-img").src = educatorImgArr[imInd];
        });

    });




    //team section interactions

    let teamBtn = document.querySelector(".team-button-div");



    // chat box

    let chatSendBtn = document.getElementById("chatSendBtn")
    chatSendBtn.addEventListener("click", () => {
        console.log("hi");
        let inputFromTextBox = document.getElementById("chatBoxText").value;
        let chatScreen = document.getElementById("chatScreen");
        let output = document.createElement("textarea")
        switch (inputFromTextBox) {
            case "1":
                output.value = "anwer1";
                chatScreen.appendChild(output);
                output.classList.add("chat-screen-text-output");
                output.focus();
                output.disabled = true;
                break;
            case "2":
                output.value = "anwer2";
                chatScreen.appendChild(output);
                output.classList.add("chat-screen-text-output");
                output.focus();
                output.disabled = true;
                break;
            case "3":
                output.value = "anwer3";
                chatScreen.appendChild(output);
                output.classList.add("chat-screen-text-output");
                output.focus();
                output.disabled = true;
                break;
            default:
                output.value = "Wrong Input provided";
                chatScreen.appendChild(output);
                output.classList.add("chat-screen-text-output");
                output.focus();
                output.disabled = true;
                break;

        }
    });

    let chatCloseBtn = document.getElementById("chat-popup-close");
    chatCloseBtn.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    });

    let chatBtn = document.getElementById("chat-btn");
    chatBtn.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "block";
    });




});