//on document load add a listner

document.addEventListener("DOMContentLoaded", () => {
  console.log("entering in js file");

  var firebaseConfig = {
    apiKey: "AIzaSyA7lSzxaBmyf8a15RwiLbofWOjbsqEa1y4",
    authDomain: "kalidro-services.firebaseapp.com",
    databaseURL: "https://kalidro-services.firebaseio.com",
    projectId: "kalidro-services",
    storageBucket: "kalidro-services.appspot.com",
    messagingSenderId: "1063548277544",
    appId: "1:1063548277544:web:60221d68e445ad4506b61d",
    measurementId: "G-77SF3JVYWF",
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //function to send data in firebase
  async function syncContactForm(name, email, message) {
    if (navigator.onLine) {
      try {
        //connect firebase
        let contactForm = await firebase.database().ref("contact-form").push();
        //let newContactForm = await contactForm.push();

        let syncRes = await contactForm.set(
          {
            name: name,
            email: email,
            message: message,
          },
          (err) => {
            if (err) {
              console.log(err);
            } else {
              document.getElementById("contactBtn").innerText =
                "Message delivered.";
              setTimeout(() => {
                console.log("start");
                location.reload();
              }, 2000);
            }
          }
        );
        console.log("syncRes");

        console.log(syncRes);
      } catch (err) {
        console.log("in catch");
        console.log(err);
      }
    } else {
      console.log("you are offline");
    }
  }

  document.getElementById("contactBtn").addEventListener("click", () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("contactFormMessage").value;

    let validateContactStatus = validateContact(name, email);
    console.log(validateContactStatus);
    console.log("validation contact form");
    if (validateContactStatus) {
      document.getElementById("contactBtn").innerText = "sending..";
      document.getElementById("contactBtn").setAttribute(
        "style",
        `
            background-color: #124F3F;
            color: white;
            `
      );

      syncContactForm(name, email, message);
    }
  });

  //validating contact inputs

  function validateContact(name, email) {
    let validateNameStatus = validateName(name);
    let validateEmailStatus = validateEmail(email);
    console.log(validateNameStatus);
    console.log(validateEmailStatus);
    if (
      typeof validateNameStatus === "string" &&
      typeof validateEmailStatus === "string"
    ) {
      document.getElementById("contactName").innerText =
        "*" + validateNameStatus;
      document.getElementById("contactEmail").innerText =
        "*" + validateEmailStatus;
      return false;
    } else if (typeof validateNameStatus === "string") {
      document.getElementById("contactName").innerText =
        "*" + validateNameStatus;
      document.getElementById("contactEmail").innerText = "";
      return false;
    } else if (typeof validateEmailStatus === "string") {
      document.getElementById("contactName").innerText = "";
      document.getElementById("contactEmail").innerText =
        "*" + validateEmailStatus;
      return false;
    } else {
      document.getElementById("contactName").innerText = "";
      document.getElementById("contactEmail").innerText = "";
      return true;
    }
  }

  //validation register inputs

  function validateRegitration(name, email, role) {
    let validateNameStatus = validateName(name);
    let validateEmailStatus = validateEmail(email);
    let validateRoleStatus = validateRole(role);
    console.log(validateNameStatus);
    console.log(validateEmailStatus);
    console.log(validateRoleStatus);
    if (
      typeof validateNameStatus === "string" &&
      typeof validateEmailStatus === "string" &&
      typeof validateRoleStatus === "string"
    ) {
      document.getElementById("registerErName").innerText =
        "*" + validateNameStatus;
      document.getElementById("registerErEmail").innerText =
        "*" + validateEmailStatus;
      document.getElementById("registerErRole").innerText =
        "*" + validateRoleStatus;
      return false;
    } else if (
      typeof validateNameStatus === "string" &&
      typeof validateEmailStatus === "string"
    ) {
      document.getElementById("registerErName").innerText =
        "*" + validateNameStatus;
      document.getElementById("registerErEmail").innerText =
        "*" + validateEmailStatus;
      document.getElementById("registerErRole").innerText = "";
      return false;
    } else if (typeof validateNameStatus === "string") {
      document.getElementById("registerErName").innerText =
        "*" + validateNameStatus;
      document.getElementById("registerErEmail").innerText = "";
      document.getElementById("registerErRole").innerText = "";
      return false;
    } else if (typeof validateEmailStatus === "string") {
      document.getElementById("registerErName").innerText = "";
      document.getElementById("registerErEmail").innerText =
        "*" + validateEmailStatus;
      document.getElementById("registerErRole").innerText = "";
      return false;
    } else if (typeof validateRoleStatus === "string") {
      document.getElementById("registerErName").innerText = "";
      document.getElementById("registerErEmail").innerText = "";
      document.getElementById("registerErRole").innerText =
        "*" + validateRoleStatus;
      return false;
    } else {
      document.getElementById("registerErName").innerText = "";
      document.getElementById("registerErEmail").innerText = "";
      document.getElementById("registerErRole").innerText = "";
      return true;
    }
  }

  //validate name

  function validateName(name) {
    if (name === null || name === undefined || name === "") {
      return "name can not be null";
    } else if (name.length > 30) {
      return "name length limit exceeding";
    } else if (!/^[A-Za-z ]+$/.test(name)) {
      return "name can only take letters";
    } else {
      return true;
    }
  }

  //validate email

  function validateEmail(email) {
    if (email === null || email === undefined || email === "") {
      return "email can not be null";
    } else if (email.length > 50) {
      return "email length limit exceeding";
    } else if (!/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)) {
      return "email not valid";
    } else {
      return true;
    }
  }

  //validate role

  function validateRole(role) {
    if (role === null || role === undefined || role === "") {
      return "role can not be null";
    } else {
      return true;
    }
  }

  //add listner on register button

  function moveRegisterBox() {
    let registerBox = document.getElementById("registerBox");
    registerBox.style.display = "block";
    registerBox.classList.add("register-box-anim");
  }

  let registerBtns = document.querySelectorAll(".register-button");
  console.log(registerBtns);
  registerBtns.forEach((el, index) => {
    el.addEventListener("click", () => {
      moveRegisterBox();
    });
  });

  let regiterCloseBtn = document.getElementById("register-close");
  regiterCloseBtn.addEventListener("click", () => {
    document.getElementById("registerBox").style.display = "none";
  });

  // resistration

  async function registerUser(name, email, role) {
    if (navigator.onLine) {
      try {
        //connect firebase
        let registerForm = await firebase
          .database()
          .ref("register-form")
          .push();
        //let newContactForm = await contactForm.push();

        let syncRes = await registerForm.set(
          {
            name: name,
            email: email,
            role: role,
          },
          (err) => {
            if (err) {
              console.log(err);
            } else {
              document.getElementById("registerBtn").innerText =
                "Registered Successfully!";
              document.getElementById("registerform").style.display = "none";
              document.getElementById("registerSucc").style.display = "block";
              setTimeout(() => {
                console.log("start");
                location.reload();
              }, 3000);
            }
          }
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log("you are offline");
    }
  }

  document.getElementById("registerBtn").addEventListener("click", () => {
    let name = document.getElementById("registerName").value;
    let email = document.getElementById("registerEmail").value;
    let role = "";
    if (document.getElementById("Student").checked) {
      role = "Student";
    } else if (document.getElementById("Educator").checked) {
      role = "Educator";
    } else if (document.getElementById("Institute").checked) {
      role = "Institute";
    } else {
      role = null;
    }
    let validateStatus = validateRegitration(name, email, role);
    console.log(validateStatus);
    console.log("validation register form");
    if (validateStatus) {
      document.getElementById("registerBtn").innerText = "processing..";
      document.getElementById("registerBtn").setAttribute(
        "style",
        `
            background-color: #124F3F;
            color: white;
            `
      );

      registerUser(name, email, role);
    }
  });

  // explore button listner

  document.getElementById("exploreBtn").addEventListener("click", () => {
    let registerBox = document.getElementById("registerBox");
    registerBox.style.display = "none";
    document.getElementById("registerform").style.display = "block";
    document.getElementById("registerSucc").style.display = "none";
  });

  //about 2 section interactions
  const SLIDETIME = 500;
  const dotBtns = document.querySelectorAll(".dotBtn");
  const aboutSlides = document.querySelectorAll(".about-slide-div");

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
      } else if (
        activeAboutSlideIndex !== null &&
        newActiveAboutSlideIndex !== null &&
        newActiveAboutSlideIndex !== activeAboutSlideIndex &&
        newActiveAboutSlideIndex !== index
      ) {
        activeAboutSlideIndex = newActiveAboutSlideIndex;
        newActiveAboutSlideIndex = index;
        dotBtnClickable = true;
        changeSlide(activeAboutSlideIndex, newActiveAboutSlideIndex);
      }

      dotBtns.forEach((el2) => {
        if (el.id !== el2.id) {
          el2.classList.remove("about-slide-btn-active");
        }
      });
    });
  });

  aboutSlides.forEach((slide) => {
    slide.addEventListener("transitioned", () => {
      if (slide === activeAboutSlide && !dotBtnClickable) {
        dotBtnClickable = true;
        activeAboutSlide.className = "about-slide-div";
      }
    });
  });

  // change slide function

  function changeSlide(actIndex, newActIndex) {
    if (dotBtnClickable) {
      dotBtnClickable = false;
      activeAboutSlide = document.querySelector(".about-active");

      if (actIndex > newActIndex) {
        newActiveAboutSlide = aboutSlides[newActIndex];
        activeAboutSlide.classList.add("aboutSlideOutRight");
        activeAboutSlide.classList.remove(
          "aboutSlideInLeft",
          "about-active",
          "aboutSlideInRight",
          "aboutSlideOutLeft"
        );
        newActiveAboutSlide.classList.add("aboutSlideInLeft", "about-active");
        newActiveAboutSlide.classList.remove(
          "aboutSlideOutLeft",
          "aboutSlideInRight",
          "aboutSlideOutRight"
        );
      } else {
        newActiveAboutSlide = aboutSlides[newActIndex];
        activeAboutSlide.classList.add("slideOutLaboutSlideOutLefteft");
        activeAboutSlide.classList.remove(
          "aboutSlideInRight",
          "about-active",
          "aboutSlideInLeft",
          "aboutSlideOutRight"
        );
        newActiveAboutSlide.classList.add("aboutSlideInRight", "about-active");
        newActiveAboutSlide.classList.remove(
          "aboutSlideOutLeft",
          "aboutSlideInLeft",
          "aboutSlideOutRight"
        );
      }
    }
  }

  const arrowRight1 = document.getElementById("about-arrow-right-1");
  const arrowRight2 = document.getElementById("about-arrow-right-2");
  const arrowLeft1 = document.getElementById("about-arrow-left-1");
  const arrowLeft2 = document.getElementById("about-arrow-left-2");
  const dot1 = document.getElementById("about-slideBtn-1");
  const dot2 = document.getElementById("about-slideBtn-2");
  const dot3 = document.getElementById("about-slideBtn-3");
  arrowRight1.addEventListener("click", () => {
    console.log("Hello");
    dot2.click();
  });
  arrowRight2.addEventListener("click", () => {
    console.log("Hello");
    dot3.click();
  });
  arrowLeft1.addEventListener("click", () => {
    console.log("Hello");
    dot1.click();
  });
  arrowLeft2.addEventListener("click", () => {
    console.log("Hello");
    dot2.click();
  });

  // feature section interaction

  const instituetListArr = [
    "One click conference solution",
    "Intricate Staff Management",
    "Conduct Hassle-free Examination",
    "Secured In-built Payment Gateway",
    "AI Assisted Analysis of Student’s Progress",
  ];
  const instituteImgArr = [
    "images/feature/institute/institute-img-1.png",
    "images/feature/institute/institute-img-2.png",
    "images/feature/institute/institute-img-3.png",
    "images/feature/institute/institute-img-4.png",
    "images/feature/institute/institute-img-5.png",
  ];
  const educatorListArr = [
    "Revenue through test creation",
    "Conduct Hassle-free examination",
    "One click parent teacher meet",
    "Secured In-built Payment Gateway",
    "AI Assisted Analysis of Student’s Progress",
  ];
  const educatorImgArr = [
    "images/feature/educator/educator-img-1.png",
    "images/feature/educator/educator-img-2.png",
    "images/feature/educator/educator-img-3.png",
    "images/feature/educator/educator-img-4.png",
    "images/feature/educator/educator-img-5.png",
  ];
  const studentListArr = [
    "Pick best suited educators via live trial classes",
    "Free to use with no ads",
    "Win cash rewards via PAN-India tests",
    "In accordance with the new education policy",
    "One stop digital library",
  ];
  const studentImgArr = [
    "images/feature/student/student-img-1.png",
    "images/feature/student/student-img-2.png",
    "images/feature/student/student-img-3.png",
    "images/feature/student/student-img-4.png",
    "images/feature/student/student-img-5.png",
  ];

  const featureBtns = document.querySelectorAll(".feature-slide-btn");
  const featureSlides = document.querySelectorAll(".feature-slide-div");

  let featureBtnClickable = true;
  let activeFeatureSlideIndex = 0;
  let newActiveFeatureSlideIndex = null;
  let activeFeatureSlide = null;
  let newActiveFeatureSlide = null;

  //listner for feature btns

  featureBtns.forEach((el, index) => {
    el.addEventListener("click", () => {
      el.classList.add("feature-slide-btn-active");
      if (el.id == "feature-slideBtn-1") {
        myFeatureList1Move();
      } else if (el.id == "feature-slideBtn-2") {
        myFeatureList2Move();
      }
      else if (el.id == "feature-slideBtn-3") {
        myFeatureList3Move();
      }
      if (index !== 0 && newActiveFeatureSlideIndex === null) {
        newActiveFeatureSlideIndex = index;
        featureBtnClickable = true;
        changeFeatureSlide(activeFeatureSlideIndex, newActiveFeatureSlideIndex);
      } else if (
        activeFeatureSlideIndex !== null &&
        newActiveFeatureSlideIndex !== null &&
        newActiveFeatureSlideIndex !== activeFeatureSlideIndex &&
        newActiveFeatureSlideIndex !== index
      ) {
        activeFeatureSlideIndex = newActiveFeatureSlideIndex;
        newActiveFeatureSlideIndex = index;
        featureBtnClickable = true;
        changeFeatureSlide(activeFeatureSlideIndex, newActiveFeatureSlideIndex);
      }
      featureBtns.forEach((el2) => {
        if (el.id !== el2.id) {
          el2.classList.remove("feature-slide-btn-active");
        }
      });
    });
  });

  featureSlides.forEach((slide) => {
    slide.addEventListener("transitioned", () => {
      if (slide === activeFeatureSlide && !featureBtnClickable) {
        featureBtnClickable = true;
        activeFeatureSlide.className = "about-slide-div";
      }
    });
  });

  // change slide function

  function changeFeatureSlide(actIndex, newActIndex) {
    if (featureBtnClickable) {
      featureBtnClickable = false;
      activeFeatureSlide = document.querySelector(".feature-active");

      if (actIndex > newActIndex) {
        newActiveFeatureSlide = featureSlides[newActIndex];
        activeFeatureSlide.classList.add("featureSlideOutRight");
        activeFeatureSlide.classList.remove(
          "featureSlideInLeft",
          "feature-active",
          "aboutSlideInRight",
          "aboutSlideOutLeft"
        );
        newActiveFeatureSlide.classList.add(
          "featureSlideInLeft",
          "feature-active"
        );
        newActiveFeatureSlide.classList.remove(
          "featureSlideOutLeft",
          "aboutSlideInRight",
          "aboutSlideOutRight"
        );
      } else {
        newActiveFeatureSlide = featureSlides[newActIndex];
        activeFeatureSlide.classList.add("slideOutLfeatureSlideOutLefteft");
        activeFeatureSlide.classList.remove(
          "featureSlideInRight",
          "feature-active",
          "featureSlideInLeft",
          "featureSlideOutRight"
        );
        newActiveFeatureSlide.classList.add(
          "featureSlideInRight",
          "feature-active"
        );
        newActiveFeatureSlide.classList.remove(
          "featureSlideOutLeft",
          "featureSlideInLeft",
          "featureSlideOutRight"
        );
      }
    }
  }

  let instituteDiv = document.getElementById("featureContainer");

  var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom - 100 <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right - 100 <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  let scrollEvevnt = 0;

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
  let list1CLickable = false;
  let autolist1Count = 0;

  function myFeatureList1Move() {
    if (autolist1Count == 0) {
      setTimeout(() => {
        document.getElementById("feature-div-1-list-1").innerText = " ";
        document.getElementById("feature-div-1-list-2").innerText = " ";
        document.getElementById("feature-div-1-list-3").innerText =
          instituetListArr[0];
        document.getElementById("feature-div-1-list-4").innerText =
          instituetListArr[1];
        document.getElementById("feature-div-1-list-5").innerText =
          instituetListArr[2];

        let newImg = document.createElement("img");
        document.getElementById("feature-div-1-img").appendChild(newImg);
        newImg.classList.add(
          "feature-div-1-img-1",
          "feature-div-1",
          "featImgOut2"
        );
        newImg.setAttribute("id", "institute-img");
        document.getElementById("institute-img").src = instituteImgArr[0];
      }, 100);

      setTimeout(() => {
        document.getElementById("feature-div-1-list-1").innerText = " ";
        document.getElementById("feature-div-1-list-2").innerText =
          instituetListArr[0];
        document.getElementById("feature-div-1-list-3").innerText =
          instituetListArr[1];
        document.getElementById("feature-div-1-list-4").innerText =
          instituetListArr[2];
        document.getElementById("feature-div-1-list-5").innerText =
          instituetListArr[3];
        document.getElementById("institute-img").src = instituteImgArr[1];
      }, 2500);

      setTimeout(() => {
        document.getElementById("feature-div-1-list-1").innerText =
          instituetListArr[0];
        document.getElementById("feature-div-1-list-2").innerText =
          instituetListArr[1];
        document.getElementById("feature-div-1-list-3").innerText =
          instituetListArr[2];
        document.getElementById("feature-div-1-list-4").innerText =
          instituetListArr[3];
        document.getElementById("feature-div-1-list-5").innerText =
          instituetListArr[4];
        document.getElementById("institute-img").src = instituteImgArr[2];
      }, 5000);

      setTimeout(() => {
        document.getElementById("feature-div-1-list-1").innerText =
          instituetListArr[1];
        document.getElementById("feature-div-1-list-2").innerText =
          instituetListArr[2];
        document.getElementById("feature-div-1-list-3").innerText =
          instituetListArr[3];
        document.getElementById("feature-div-1-list-4").innerText =
          instituetListArr[4];
        document.getElementById("feature-div-1-list-5").innerText = " ";
        document.getElementById("institute-img").src = instituteImgArr[3];
      }, 7500);

      setTimeout(() => {
        document.getElementById("feature-div-1-list-1").innerText =
          instituetListArr[2];
        document.getElementById("feature-div-1-list-2").innerText =
          instituetListArr[3];
        document.getElementById("feature-div-1-list-3").innerText =
          instituetListArr[4];
        document.getElementById("feature-div-1-list-4").innerText = " ";
        document.getElementById("feature-div-1-list-5").innerText = " ";
        document.getElementById("institute-img").src = instituteImgArr[4];
      }, 10000);

      setTimeout(() => {
        document.getElementById("feature-div-1-list-1").innerText =
          instituetListArr[0];
        document.getElementById("feature-div-1-list-2").innerText =
          instituetListArr[1];
        document.getElementById("feature-div-1-list-3").innerText =
          instituetListArr[2];
        document.getElementById("feature-div-1-list-4").innerText =
          instituetListArr[3];
        document.getElementById("feature-div-1-list-5").innerText =
          instituetListArr[4];
        document.getElementById("institute-img").src = instituteImgArr[2];
        list1CLickable = true;
      }, 12500);

      autolist1Count = 1;
    }
  }

  // institute list item listner

  let featDivList = document.querySelectorAll(".feature-div-1-list");
  featDivList.forEach((el) => {
    el.addEventListener("click", () => {
      if (list1CLickable) {
        featDivList.forEach((ele) => {
          ele.setAttribute(
            "style",
            `
                opacity: 0.4;
        color: #124F3F;
        background-color: transparent;
                `
          );
        });
        el.setAttribute(
          "style",
          `
            opacity: 1;
            background-color: #BEE8DC;
    border-radius: 3rem;
    color: #124F3F;
            `
        );
        document.getElementById("institute-img").remove();
        let newImg = document.createElement("img");
        document.getElementById("feature-div-1-img").appendChild(newImg);
        newImg.classList.add("feature-div-1-img-1", "feat-div-1");
        newImg.setAttribute("id", "institute-img");
        elText = el.textContent;
        let imInd = instituetListArr.indexOf(elText);
        document.getElementById("institute-img").src = instituteImgArr[imInd];
      }
    });
  });

  // function to change image and list items in feature div 3
  let list2CLickable = false;
  let autolist2Count = 0;

  function myFeatureList2Move() {
    if (autolist2Count === 0) {
      setTimeout(() => {
        console.log("slide1");
        document.getElementById("feature-div-2-list-1").innerText = " ";
        document.getElementById("feature-div-2-list-2").innerText = " ";
        document.getElementById("feature-div-2-list-3").innerText =
          educatorListArr[0];
        document.getElementById("feature-div-2-list-4").innerText =
          educatorListArr[1];
        document.getElementById("feature-div-2-list-5").innerText =
          educatorListArr[2];

        let newImg = document.createElement("img");
        document.getElementById("feature-div-2-img").appendChild(newImg);
        newImg.classList.add(
          "feature-div-2-img-1",
          "feature-div-1",
          "featImgOut2"
        );
        newImg.setAttribute("id", "educator-img");
        document.getElementById("educator-img").src = educatorImgArr[0];
      }, 100);

      setTimeout(() => {
        console.log("slide2");
        document.getElementById("feature-div-2-list-1").innerText = " ";
        document.getElementById("feature-div-2-list-2").innerText =
          educatorListArr[0];
        document.getElementById("feature-div-2-list-3").innerText =
          educatorListArr[1];
        document.getElementById("feature-div-2-list-4").innerText =
          educatorListArr[2];
        document.getElementById("feature-div-2-list-5").innerText =
          educatorListArr[3];
        document.getElementById("educator-img").src = educatorImgArr[1];
      }, 2500);

      setTimeout(() => {
        document.getElementById("feature-div-2-list-1").innerText =
          educatorListArr[0];
        document.getElementById("feature-div-2-list-2").innerText =
          educatorListArr[1];
        document.getElementById("feature-div-2-list-3").innerText =
          educatorListArr[2];
        document.getElementById("feature-div-2-list-4").innerText =
          educatorListArr[3];
        document.getElementById("feature-div-2-list-5").innerText =
          educatorListArr[4];
        document.getElementById("educator-img").src = educatorImgArr[2];
      }, 5000);

      setTimeout(() => {
        document.getElementById("feature-div-2-list-1").innerText =
          educatorListArr[1];
        document.getElementById("feature-div-2-list-2").innerText =
          educatorListArr[2];
        document.getElementById("feature-div-2-list-3").innerText =
          educatorListArr[3];
        document.getElementById("feature-div-2-list-4").innerText =
          educatorListArr[4];
        document.getElementById("feature-div-2-list-5").innerText = " ";
        document.getElementById("educator-img").src = educatorImgArr[3];
      }, 7500);

      setTimeout(() => {
        document.getElementById("feature-div-2-list-1").innerText =
          educatorListArr[2];
        document.getElementById("feature-div-2-list-2").innerText =
          educatorListArr[3];
        document.getElementById("feature-div-2-list-3").innerText =
          educatorListArr[4];
        document.getElementById("feature-div-2-list-4").innerText = " ";
        document.getElementById("feature-div-2-list-5").innerText = " ";
        document.getElementById("educator-img").src = educatorImgArr[4];
      }, 10000);

      setTimeout(() => {
        document.getElementById("feature-div-2-list-1").innerText =
          educatorListArr[0];
        document.getElementById("feature-div-2-list-2").innerText =
          educatorListArr[1];
        document.getElementById("feature-div-2-list-3").innerText =
          educatorListArr[2];
        document.getElementById("feature-div-2-list-4").innerText =
          educatorListArr[3];
        document.getElementById("feature-div-2-list-5").innerText =
          educatorListArr[4];
        document.getElementById("educator-img").src = educatorImgArr[2];
        list2CLickable = true;
      }, 12500);

      autolist2Count = 1;
    }
  }

  // educator list item listner

  let featDiv2List = document.querySelectorAll(".feature-div-2-list");
  featDiv2List.forEach((el) => {
    el.addEventListener("click", () => {
      if (list2CLickable) {
        featDiv2List.forEach((ele) => {
          ele.setAttribute(
            "style",
            `
                opacity: 0.4;
        color: #124F3F;
        background-color: transparent;
                `
          );
        });
        el.setAttribute(
          "style",
          `
            opacity: 1;
            background-color: #BEE8DC;
    border-radius: 3rem;
    color: #124F3F;
            `
        );
        document.getElementById("educator-img").remove();
        let newImg = document.createElement("img");
        document.getElementById("feature-div-2-img").appendChild(newImg);
        newImg.classList.add("feature-div-2-img-1", "feat-div-1");
        newImg.setAttribute("id", "educator-img");
        elText = el.textContent;
        let imInd = educatorListArr.indexOf(elText);
        document.getElementById("educator-img").src = educatorImgArr[imInd];
      }
    });
  });

  //feature section student
  // function to change image and list items in feature div 3
  let list3CLickable = false;
  let autolist3Count = 0;

  function myFeatureList3Move() {
    if (autolist3Count === 0) {
      setTimeout(() => {
        console.log("slide1");
        document.getElementById("feature-div-3-list-1").innerText = " ";
        document.getElementById("feature-div-3-list-2").innerText = " ";
        document.getElementById("feature-div-3-list-3").innerText =
          studentListArr[0];
        document.getElementById("feature-div-3-list-4").innerText =
          studentListArr[1];
        document.getElementById("feature-div-3-list-5").innerText =
          studentListArr[2];

        let newImg = document.createElement("img");
        document.getElementById("feature-div-3-img").appendChild(newImg);
        newImg.classList.add(
          "feature-div-3-img-1",
          "feature-div-1",
          "featImgOut2"
        );
        newImg.setAttribute("id", "student-img");
        document.getElementById("student-img").src = studentImgArr[0];
      }, 100);

      setTimeout(() => {
        console.log("slide2");
        document.getElementById("feature-div-3-list-1").innerText = " ";
        document.getElementById("feature-div-3-list-2").innerText =
          studentListArr[0];
        document.getElementById("feature-div-3-list-3").innerText =
          studentListArr[1];
        document.getElementById("feature-div-3-list-4").innerText =
          studentListArr[2];
        document.getElementById("feature-div-3-list-5").innerText =
          studentListArr[3];
        document.getElementById("student-img").src = studentImgArr[1];
      }, 2500);

      setTimeout(() => {
        document.getElementById("feature-div-3-list-1").innerText =
          studentListArr[0];
        document.getElementById("feature-div-3-list-2").innerText =
          studentListArr[1];
        document.getElementById("feature-div-3-list-3").innerText =
          studentListArr[2];
        document.getElementById("feature-div-3-list-4").innerText =
          studentListArr[3];
        document.getElementById("feature-div-3-list-5").innerText =
          studentListArr[4];
        document.getElementById("student-img").src = studentImgArr[2];
      }, 5000);

      setTimeout(() => {
        document.getElementById("feature-div-3-list-1").innerText =
          studentListArr[1];
        document.getElementById("feature-div-3-list-2").innerText =
          studentListArr[2];
        document.getElementById("feature-div-3-list-3").innerText =
          studentListArr[3];
        document.getElementById("feature-div-3-list-4").innerText =
          studentListArr[4];
        document.getElementById("feature-div-3-list-5").innerText = " ";
        document.getElementById("student-img").src = studentImgArr[3];
      }, 7500);

      setTimeout(() => {
        document.getElementById("feature-div-3-list-1").innerText =
          studentListArr[2];
        document.getElementById("feature-div-3-list-2").innerText =
          studentListArr[3];
        document.getElementById("feature-div-3-list-3").innerText =
          studentListArr[4];
        document.getElementById("feature-div-3-list-4").innerText = " ";
        document.getElementById("feature-div-3-list-5").innerText = " ";
        document.getElementById("student-img").src = studentImgArr[4];
      }, 10000);

      setTimeout(() => {
        document.getElementById("feature-div-3-list-1").innerText =
          studentListArr[0];
        document.getElementById("feature-div-3-list-2").innerText =
          studentListArr[1];
        document.getElementById("feature-div-3-list-3").innerText =
          studentListArr[2];
        document.getElementById("feature-div-3-list-4").innerText =
          studentListArr[3];
        document.getElementById("feature-div-3-list-5").innerText =
          studentListArr[4];
        document.getElementById("student-img").src = studentImgArr[2];
        list3CLickable = true;
      }, 12500);

      autolist3Count = 1;
    }
  }


  //student list item

  // educator list item listner

  let featDiv3List = document.querySelectorAll(".feature-div-3-list");
  featDiv3List.forEach((el) => {
    el.addEventListener("click", () => {
      if (list3CLickable) {
        featDiv3List.forEach((ele) => {
          ele.setAttribute(
            "style",
            `
                opacity: 0.4;
        color: #124F3F;
        background-color: transparent;
                `
          );
        });
        el.setAttribute(
          "style",
          `
            opacity: 1;
            background-color: #BEE8DC;
    border-radius: 3rem;
    color: #124F3F;
            `
        );
        document.getElementById("student-img").remove();
        let newImg = document.createElement("img");
        document.getElementById("feature-div-3-img").appendChild(newImg);
        newImg.classList.add("feature-div-3-img-1", "feat-div-3");
        newImg.setAttribute("id", "student-img");
        elText = el.textContent;
        let imInd = studentListArr.indexOf(elText);
        document.getElementById("student-img").src = studentImgArr[imInd];
      }
    });
  });

  //team section interactions

  let teamBtn = document.querySelector(".team-button-div");

  // chat box
  /*
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
        */

  /* let chatCloseBtn = document.getElementById("chat-popup-close");
    chatCloseBtn.addEventListener("click", () => {
        document.getElementById("myForm").style.display = "none";
    });

    let chatBtn = document.getElementById("chat-btn");
    chatBtn.addEventListener("click", () => {
        console.log("lis");
        document.getElementById("myForm").style.display = "block";
    });*/

  let nav1 = document.getElementById("about");
  let nav2 = document.getElementById("feature");
  let nav3 = document.getElementById("pricing");
  let nav4 = document.getElementById("team");
  let nav5 = document.getElementById("connect");
  let navArray = document.querySelectorAll(".header-li");

  console.log(nav1.getBoundingClientRect());
  console.log(nav2.getBoundingClientRect());
  console.log(nav3.getBoundingClientRect());
  console.log(nav4.getBoundingClientRect());
  console.log(nav5.getBoundingClientRect());

  /*window.addEventListener("scroll", function () {
        if (isInViewport(nav1)) {
            let btn = document.getElementById("nav1");
            btn.classList.add("nav-btn-active");
        }

        else if (isInViewport(nav2)) {
            let btn = document.getElementById("nav2");
            btn.classList.add("nav-btn-active");
        }

        else if (isInViewport(nav3)) {
            let btn = document.getElementById("nav3");
            btn.classList.add("nav-btn-active");
        }

        else if (isInViewport(nav4)) {
            let btn = document.getElementById("nav4");
            btn.classList.add("nav-btn-active");
        }

        else if (isInViewport(nav5)) {
            let btn = document.getElementById("nav5");
            btn.classList.add("nav-btn-active");
        }
        else {
            navArray.forEach((el) => {
                el.classList.remove("nav-btn-active")
            })
        }
    });*/
  console.log(nav1.getBoundingClientRect().top);
  console.log(nav1.getBoundingClientRect().bottom);
  console.log(document.documentElement.clientHeight);

  window.addEventListener("scroll", function () {
    if (isInViewport(nav1)) {
      let btn = document.getElementById("nav1");
      btn.classList.add("nav-btn-active");
    } else if (isInViewport(nav2)) {
      let btn = document.getElementById("nav2");
      btn.classList.add("nav-btn-active");
    } else if (isInViewport(nav3)) {
      let btn = document.getElementById("nav3");
      btn.classList.add("nav-btn-active");
    } else if (isInViewport(nav4)) {
      let btn = document.getElementById("nav4");
      btn.classList.add("nav-btn-active");
    } else if (isInViewport(nav5)) {
      let btn = document.getElementById("nav5");
      btn.classList.add("nav-btn-active");
    } else {
      navArray.forEach((el) => {
        el.classList.remove("nav-btn-active");
      });
    }
  });
});
