document.addEventListener("DOMContentLoaded", () => {

    //abut page interactions

    const SLIDETIME = 500;
    const dots = document.querySelectorAll('.mBtn');
    const allSlides = [...document.querySelectorAll('.slide-div')];

    let clickable = true;
    let active = 0;
    let newActive = null;
    let activeSlide = null;
    let newActiveSlide = null;

    function initSlider() {
        allSlides.forEach(slide => {
            slide.setAttribute(
                'style',
                `transition: transform ${SLIDETIME}ms ease;
                animation-duration: ${SLIDETIME}ms;`
            )
        })
    }

    function changeSlide(act, newAct) {

        if (clickable) {
            clickable = false;
            activeSlide = document.querySelector('.active');
            console.log('in slider');
            console.log(document.querySelectorAll('.slide-div'));

            if (act > newAct) {
                console.log('backward')
                newActiveSlide = allSlides[newAct];
                activeSlide.classList.add('slideOutRight');
                activeSlide.classList.remove('slideInLeft', 'active', 'slideInRight', 'slideOutLeft');
                console.log(activeSlide);
                newActiveSlide.classList.add('slideInLeft', 'active');
                newActiveSlide.classList.remove('slideOutLeft', 'slideInRight', 'slideOutRight');
                console.log(newActiveSlide);
            } else {
                newActiveSlide = allSlides[newAct];
                console.log('forward');
                activeSlide.classList.add('slideOutLeft');
                activeSlide.classList.remove('slideInRight', 'active', 'slideInLeft', 'slideOutRight');
                console.log(activeSlide);
                newActiveSlide.classList.add('slideInRight', 'active');
                newActiveSlide.classList.remove('slideOutLeft', 'slideInLeft', 'slideOutRight');
                console.log(newActiveSlide);
            }
        }

    }

    allSlides.forEach(slide => {
        slide.addEventListener('transitioned', () => {
            if (slide === activeSlide && !clickable) {
                clickable = true;
                activeSlide.className = "slide-div";
            }
        })
    });

    //event listners
    dots.forEach((el, index) => {
        el.addEventListener("click", () => {
            el.style.transform = "scale(1.5,1.5)";
            el.style.backgroundColor = "#BEE8DC";
            el.classList.add(".slide-btn-active");
            if (index !== 0 && newActive === null) {
                newActive = index;
                clickable = true;
                console.log("1");
                changeSlide(active, newActive);
            } else if (active !== null && newActive !== null && newActive !== active && newActive !== index) {
                active = newActive;
                newActive = index;
                clickable = true;
                console.log("2");
                changeSlide(active, newActive);
            }
            dots.forEach(el2 => {
                if (el.id !== el2.id) {
                    el2.classList.remove(".slide-btn-active");
                }
            })
        })
    })

    initSlider();



    // feature page interactions


    const instituetListArr = ['One click conference solution', 'Intricate Staff Management', 'Conduct Hassle-free Examination', 'Secured In-built Payment Gateway', 'AI Assisted Analysis of Student’s Progress'];
    const instituteImgArr = ["images/institute/institute-img-1.png", "images/institute/institute-img-2.png", "images/institute/institute-img-3.png", "images/institute/institute-img-4.png", "images/institute/institute-img-5.png"];

    /*
        function moveItemUp() {
            for (let i = 0; i < instituetListArr.length; i++) {
                let list = document.getElementById('feat-div-1-list-container');
                let newEl = document.createElement('p');
                newEl.innerText = instituetListArr[i];
                newEl.setAttribute(
                    'style',
                    `color: transparent;`
                );
                console.log(newEl);
                console.log(i);
                setTimeout(() => {
                    list.appendChild(newEl);
                    newEl.className = newEl.className + ` feat-div-1-list-${i+1} feat-div-1-list`;
                    newEl.removeAttribute(
                        'style',
                        `color: transparent;`
                    );
                    console.log(newEl);
                    console.log("an")
                    
                }, (2000*(i+1)));
                console.log("active");
                console.log(document.activeElement);
                
            }
        }


        moveItemUp();
        */

    function myListMove() {

        setTimeout(() => {
            document.getElementById('feat-div-1-list-1').innerText = " ";
            document.getElementById('feat-div-1-list-2').innerText = " ";
            document.getElementById('feat-div-1-list-3').innerText = instituetListArr[0];
            document.getElementById('feat-div-1-list-4').innerText = instituetListArr[1];
            document.getElementById('feat-div-1-list-5').innerText = instituetListArr[2];

            let newImg = document.createElement("img");
            document.getElementById("feat-div-1-img-container").appendChild(newImg);
            newImg.classList.add("feat-div-1-img-1", "feat-div-1", "featImgOut");
            newImg.setAttribute("id", "institute-img");
            document.getElementById("institute-img").src = instituteImgArr[0];

        }, 100);

        setTimeout(() => {
            document.getElementById('feat-div-1-list-1').innerText = " ";
            document.getElementById('feat-div-1-list-2').innerText = instituetListArr[0];
            document.getElementById('feat-div-1-list-3').innerText = instituetListArr[1];
            document.getElementById('feat-div-1-list-4').innerText = instituetListArr[2];
            document.getElementById('feat-div-1-list-5').innerText = instituetListArr[3];
            document.getElementById("institute-img").src = instituteImgArr[1];
        }, 2000);

        setTimeout(() => {
            document.getElementById('feat-div-1-list-1').innerText = instituetListArr[0];
            document.getElementById('feat-div-1-list-2').innerText = instituetListArr[1];
            document.getElementById('feat-div-1-list-3').innerText = instituetListArr[2];
            document.getElementById('feat-div-1-list-4').innerText = instituetListArr[3];
            document.getElementById('feat-div-1-list-5').innerText = instituetListArr[4];
            document.getElementById("institute-img").src = instituteImgArr[2];
        }, 4000);

        setTimeout(() => {
            document.getElementById('feat-div-1-list-1').innerText = instituetListArr[1];
            document.getElementById('feat-div-1-list-2').innerText = instituetListArr[2];
            document.getElementById('feat-div-1-list-3').innerText = instituetListArr[3];
            document.getElementById('feat-div-1-list-4').innerText = instituetListArr[4];
            document.getElementById('feat-div-1-list-5').innerText = " ";
            document.getElementById("institute-img").src = instituteImgArr[3];
        }, 6000);

        setTimeout(() => {
            document.getElementById('feat-div-1-list-1').innerText = instituetListArr[2];
            document.getElementById('feat-div-1-list-2').innerText = instituetListArr[3];
            document.getElementById('feat-div-1-list-3').innerText = instituetListArr[4];
            document.getElementById('feat-div-1-list-4').innerText = " ";
            document.getElementById('feat-div-1-list-5').innerText = " ";
            document.getElementById("institute-img").src = instituteImgArr[4];
        }, 8000);

        setTimeout(() => {
            document.getElementById('feat-div-1-list-1').innerText = instituetListArr[0];
            document.getElementById('feat-div-1-list-2').innerText = instituetListArr[1];
            document.getElementById('feat-div-1-list-3').innerText = instituetListArr[2];
            document.getElementById('feat-div-1-list-4').innerText = instituetListArr[3];
            document.getElementById('feat-div-1-list-5').innerText = instituetListArr[4];
            document.getElementById("institute-img").src = instituteImgArr[2];
        }, 10000);

    }
    let instituteDiv = document.getElementById("feature-div");


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
        console.log('has focus');
        window.addEventListener("scroll", function () {
            if (isInViewport(instituteDiv) && scrollEvevnt == 0) {
                console.log('has focus');
                myListMove();
                scrollEvevnt = 1;
            }
        });
    }

    windowScrollListner();


    //feature button listner

    let instituteBtn = document.getElementById("featureBtn1");
    instituteBtn.addEventListener("click", () => {
        instituteBtn.setAttribute("style", `
        border-radius: 25px;
background-color: #BEE8DC;
        `);
        myListMove();
        console.log(document.getElementById("institute-img"));
        document.getElementById("institute-img").remove();
        featDivList.forEach(ele => {
            ele.setAttribute("style", `
            opacity: 0.4;
    color: #124F3F;
    background-color: transparent;
            `)
        });
        document.getElementById('feat-div-1-list-3').setAttribute("style", `
        opacity: 1;
        background-color: #BEE8DC;
border-radius: 25px;
color: #124F3F;
        `);


    });


    // institute list listner
    let featDivList = document.querySelectorAll(".feat-div-1-list");
    featDivList.forEach((el) => {
        console.log("event triggered");

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
            document.getElementById("feat-div-1-img-container").appendChild(newImg);
            newImg.classList.add("feat-div-1-img-1", "feat-div-1", "featImgOut");
            newImg.setAttribute("id", "institute-img");
            elText = el.textContent;
            let imInd = instituetListArr.indexOf(elText);
            document.getElementById("institute-img").src = instituteImgArr[imInd];
        });

    });

    // feature page interactions

    const educatorListArr = ['One click conference solution', 'Intricate Staff Management', 'Conduct Hassle-free Examination', 'Secured In-built Payment Gateway', 'AI Assisted Analysis of Student’s Progress'];
    const educatorImgArr = ["images/institute/institute-img-1.png", "images/institute/institute-img-2.png", "images/institute/institute-img-3.png", "images/institute/institute-img-4.png", "images/institute/institute-img-5.png"];

    /*
        function moveItemUp() {
            for (let i = 0; i < instituetListArr.length; i++) {
                let list = document.getElementById('feat-div-1-list-container');
                let newEl = document.createElement('p');
                newEl.innerText = instituetListArr[i];
                newEl.setAttribute(
                    'style',
                    `color: transparent;`
                );
                console.log(newEl);
                console.log(i);
                setTimeout(() => {
                    list.appendChild(newEl);
                    newEl.className = newEl.className + ` feat-div-1-list-${i+1} feat-div-1-list`;
                    newEl.removeAttribute(
                        'style',
                        `color: transparent;`
                    );
                    console.log(newEl);
                    console.log("an")
                    
                }, (2000*(i+1)));
                console.log("active");
                console.log(document.activeElement);
                
            }
        }


        moveItemUp();
        */

    function myEducatorListMove() {


        // document.getElementById("institute-img").src = instituteImgArr[0];
        setTimeout(() => {
            document.getElementById('feat-div-2-list-1').innerText = " ";
            document.getElementById('feat-div-2-list-2').innerText = " ";
            document.getElementById('feat-div-2-list-3').innerText = educatorListArr[0];
            document.getElementById('feat-div-2-list-4').innerText = educatorListArr[1];
            document.getElementById('feat-div-2-list-5').innerText = educatorListArr[2];

            //document.getElementById("institute-img").classList.add("featImgOut");
            let newImg = document.createElement("img");
            document.getElementById("feat-div-2-img-container").appendChild(newImg);
            newImg.classList.add("feat-div-2-img-1", "feat-div-2", "featImgOut");
            newImg.setAttribute("id", "institute-img");
            document.getElementById("institute-img").src = educatorImgArr[0];

        }, 100);

        setTimeout(() => {
            document.getElementById('feat-div-2-list-1').innerText = " ";
            document.getElementById('feat-div-2-list-2').innerText = educatorListArr[0];
            document.getElementById('feat-div-2-list-3').innerText = educatorListArr[1];
            document.getElementById('feat-div-2-list-4').innerText = educatorListArr[2];
            document.getElementById('feat-div-2-list-5').innerText = educatorListArr[3];
            document.getElementById("institute-img").src = educatorImgArr[1];
        }, 2000);

        setTimeout(() => {
            document.getElementById('feat-div-2-list-1').innerText = educatorListArr[0];
            document.getElementById('feat-div-2-list-2').innerText = educatorListArr[1];
            document.getElementById('feat-div-2-list-3').innerText = educatorListArr[2];
            document.getElementById('feat-div-2-list-4').innerText = educatorListArr[3];
            document.getElementById('feat-div-2-list-5').innerText = educatorListArr[4];
            document.getElementById("institute-img").src = educatorImgArr[2];
        }, 4000);

        setTimeout(() => {
            document.getElementById('feat-div-2-list-1').innerText = educatorListArr[1];
            document.getElementById('feat-div-2-list-2').innerText = educatorListArr[2];
            document.getElementById('feat-div-2-list-3').innerText = educatorListArr[3];
            document.getElementById('feat-div-2-list-4').innerText = educatorListArr[4];
            document.getElementById('feat-div-2-list-5').innerText = " ";
            document.getElementById("institute-img").src = educatorImgArr[3];
        }, 6000);

        setTimeout(() => {
            document.getElementById('feat-div-2-list-1').innerText = educatorListArr[2];
            document.getElementById('feat-div-2-list-2').innerText = educatorListArr[3];
            document.getElementById('feat-div-2-list-3').innerText = educatorListArr[4];
            document.getElementById('feat-div-2-list-4').innerText = " ";
            document.getElementById('feat-div-2-list-5').innerText = " ";
            document.getElementById("institute-img").src = educatorImgArr[4];
        }, 8000);

        setTimeout(() => {
            document.getElementById('feat-div-2-list-1').innerText = educatorListArr[0];
            document.getElementById('feat-div-2-list-2').innerText = educatorListArr[1];
            document.getElementById('feat-div-2-list-3').innerText = educatorListArr[2];
            document.getElementById('feat-div-2-list-4').innerText = educatorListArr[3];
            document.getElementById('feat-div-2-list-5').innerText = educatorListArr[4];
            document.getElementById("institute-img").src = educatorImgArr[2];
        }, 10000);

    }


    //feature button listner

    let educatorBtn = document.getElementById("featureBtn1");
    educatorBtn.addEventListener("click", () => {
        educatorBtn.setAttribute("style", `
        border-radius: 25px;
background-color: #BEE8DC;
        `);
        myEducatorListMove();
        console.log(document.getElementById("institute-img"));
        document.getElementById("institute-img").remove();
        featDivList.forEach(ele => {
            ele.setAttribute("style", `
            opacity: 0.4;
    color: #124F3F;
    background-color: transparent;
            `)
        });
        document.getElementById('feat-div-1-list-3').setAttribute("style", `
        opacity: 1;
        background-color: #BEE8DC;
border-radius: 25px;
color: #124F3F;
        `);


    });


    // institute list listner
    let featEducatorDivList = document.querySelectorAll(".feat-div-2-list");
    featEducatorDivList.forEach((el) => {
        console.log("event triggered");

        el.addEventListener("click", () => {

            featEducatorDivList.forEach(ele => {
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
            document.getElementById("feat-div-1-img-container").appendChild(newImg);
            newImg.classList.add("feat-div-1-img-1", "feat-div-1", "featImgOut");
            newImg.setAttribute("id", "institute-img");
            elText = el.textContent;
            let imInd = educatorListArr.indexOf(elText);
            document.getElementById("institute-img").src = educatorImgArr[imInd];
        });

    });


});