const firstName = [
  "Killah",
  "Merciless",
  "Iron",
  "Genius",
  "Shaolin",
  "Rightous",
  "Childish",
  "Silent",
  "Arrogant",
  "Amateur",
  "Ruthless",
  "Cruel",
  "Heartless",
  "Ghostface",
  "Mysterious",
  "Son of",
  "Golden",
  "Big Baby",
  "Profound",
  "Feared",
  "Drunken",
  "Ol' Dirty",
  "Enlightened",
  "Wise",
  "Master",
  "Dangerous",
  "Humble",
  "Foolish",
  "Digital",
  "Poppa",
  "Methodical",
  "Born Again",
  "Vicious",
  "Cubanlinx",
];

const lastName = [
  "Monk",
  "God",
  "Beggar",
  "Killah",
  "Mastah",
  "Servant",
  "Gambino",
  "Capo",
  "Ninja",
  "Wonderer",
  "Man",
  "Assasin",
  "Butcher",
  "Emperor",
  "Inspectah",
  "Blaze",
  "Spirit",
  "Manifesto",
  "Chief",
  "the Chef",
  "Demon",
  "Commander",
  "Ruckus",
  "Pupil",
  "Conqueror",
  "Sensei",
  "Consigliere",
  "Soulja",
  "Mercenary",
  "Shogun",
  "Ghost",
  "RZArector",
  "Dynamite",
  "Osirus",
  "Messiah",
  "Hooligan",
  "Don",
  "Abbot",
];
//doc ready function
$(function () {
  //create a function that produces a random index number
  //use call back function to pass index number of names
  //use Math.floor to return largest interger
  //multiply by the length of the names

  function randomIndex(nameList) {
    const number = Math.floor(Math.random() * nameList.length);
    return nameList[number];
  }
  //create a function that gets random index number of first names and last name
  //use .join() to join the array into a string
  function createName() {
    return [randomIndex(firstName), randomIndex(lastName)].join(" ");
  }

  //create function that disables button if input field is empty
  //found a reference on stack overflow on how to make this work

  $("#submit").prop("disabled", true);
  $("#userName").on("input", function () {
    var val =
      $("#userName").filter(function () {
        return this.value.trim().length !== 0;
      }).length === 0;
    $("#submit").prop("disabled", val);
  });

  //create smooth scrolling on when clicking submit
  //when submit is clicked play audio clip
  //I found a reference online which helped me out with this part of the project (https://www.w3schools.com/howto/howto_css_smooth_scroll.asp)
  //

  const audTag = document.getElementsByTagName("audio");
  $(".submit").on("click", function (event) {
    event.preventDefault();
    audTag[0].play();
    //use jquery to remove hidden class, displaying the actual section
    $(".cntr--middle").removeClass("cntr--hide");
    const hash = $(this).attr("data-target"),
      target = $("#" + hash);
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );

    //store user's name in a variable
    let userName = $("input[type=text]").val();
    //store generated name in variable
    let wuName = createName();
    //create specific names for certain names that are typed in

    if (userName == "colin") {
      wuName = "Marley Protectah";
    }

    if (userName == "owen") {
      wuName = "Survivor Slayah";
    }

    if (userName == "darshana") {
      wuName = "Hufflepuff Hustlah";
    }

    if (userName == "esther") {
      wuName = "Orbiz Bandit";
    }

    if (userName == "hector") {
      wuName = "Tha Architect";
    }
    if (userName == "donald trump") {
      wuName = "Orange Clown";
    }
    if (userName == "donald glover") {
      wuName = "Childish Gambino";
    }
    if (userName == "dexter") {
      wuName = "Big Chungus";
    }

    //display users name and new generated name by using .html() method
    $(".cntr--middle__msg").html(
      `<p class="user-text"><span class="name">${userName}</span> from this day forth you shall me known as...</p> <h1 class='wu-name'>${wuName}</h1>`
    );
    //hide displayed generated name so fade in works
    $(".wu-name").hide().fadeIn(2500);
  });

  //create function where button returns back home
  $(".return").on("click", function (event) {
    event.preventDefault();
    $(".cntr--middle").addClass("cntr--hide");
    $('input[type="text"]').val("");
    $("#submit").prop("disabled", true);
    $("#userName").on("input", function () {
      var val =
        $("#userName").filter(function () {
          return this.value.trim().length !== 0;
        }).length === 0;
      $("#submit").prop("disabled", val);
    });
  });

  //create function where button directs to about section
  //create smooth scrolling
  $(".about").on("click", function (event) {
    event.preventDefault();
    audTag[1].play();
    $(".cntr--bottom").removeClass("cntr--hide");
    const hash = $(this).attr("data-target"),
      target = $("#" + hash);
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      500,
      function () {
        window.location.hash = hash;
      }
    );
  });

  //create function where button returns back home
  $(".cntr__gallery__btn").on("click", function (event) {
    event.preventDefault();
    event.preventDefault();
    audTag[2].play();
    $(".cntr--middle").addClass("cntr--hide");
    $(".cntr--bottom").addClass("cntr--hide");
    $('input[type="text"]').val("");
    $("#submit").prop("disabled", true);
    $("#userName").on("input", function () {
      var val =
        $("#userName").filter(function () {
          return this.value.trim().length !== 0;
        }).length === 0;
      $("#submit").prop("disabled", val);
    });
  });
});
