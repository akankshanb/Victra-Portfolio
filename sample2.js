var page = "sample2";
var slideIndex = 1;
var slide = 1;
var firstTime = true;
var reverseFirstTime = true;

$(document).ready(function () {
  if (page != "index") {
    $("#page").text("");
    $("#page").append('<h2>Intern Team</h2>');
    $("#page").append('<div class="container">');
    $("#page").append('<img src="imagesaka/group photo 2.jpg" height="100%" width="100%" alt="Bio Pic">');
    $("#page").append('</div>');
    $("#page").append("<h2>Role at Victra</h2>");
    $("#page").append('<p>I am a Software Developer intern in the IT Team. Some of my roles include: </p>');
    $("#page").append('<ul id="roleList"><li>Developing and maintaining web form applications</li><li>Writing and optimizing of SQL queries</li><li>Software Verification and Testing</li><li>Help plan user flows as well as visual UI designs</li></ul>')
    page = "index";
    $(".wrapper").css("opacity", "0.0");
    $(".image").css("height", "0px");
  }
});

$(document).ready(function () {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 10,
    });
});


$("#projectBtn").on("click", function (event) {
  if (page != "portfolio") {
    $("#page").text("");
    $("#page").append('<h2 id="projectTitle">Some of my Projects at Victra</h2>');
    if (firstTime){
    $(".slick-next").on("click", function (event) {
      slide++;
      if (slide == 6){
        slide = 1;
      }
      slidePicker();
      firstTime = false;
    });
    
    $(".slick-prev").on("click", function (event) {
      slide--;
      if (slide == 0){
        slide = 5;
      }
      slidePicker();
      reverseFirstTime = false;
    });
    
  }
    $(".wrapper").css("opacity", "1.0");
    $(".image").css("height", "100%");
    $(".image").css("height", "400px");
    page = "portfolio";
  }
});

$("#homeBtn").on("click", function (event) {
  if (page != "index") {
    $("#page").text("");
    $("#page").append('<h2>Intern Team</h2>');
    $("#page").append('<div class="container">');
    $("#page").append('<img src="imagesaka/group photo 2.jpg" height="100%" width="100%" alt="Bio Pic">');
    $("#page").append('</div>');
    $("#page").append("<h2>Role at Victra</h2>");
    $("#page").append('<p>I am a Software Developer intern in the IT Team. Some of my roles include: </p>');
    $("#page").append('<ul id="roleList"><li>Developing and maintaining web form applications</li><li>Writing and optimizing of SQL queries</li><li>Software Verification and Testing</li><li>Help plan user flows as well as visual UI designs</li></ul>')
    page = "index";
    $(".wrapper").css("opacity", "0.0");
    $(".image").css("height", "0px");
  }
});

function slidePicker () {
  console.log("we are currently on slide " + slide)
  if (slide == 1){
    $("#imageText").text("");
    $("#imageText").append('<p>ADA Compliance</p>');
    $("#imageText").append('<ul id="carouselList"><li> Ran web accessibility evaluation tools to check the compliance for the Victra.com website</li><li> Enhanced front-end of the page for a better user experience</li><li>Added text equivalents to images, changed multimedia accessible features to provide users with disabilities a more percievable and interactive Web experience.</li></ul>');
  }
  if (slide == 2){
    $("#imageText").text("");
    $("#imageText").append('<p>Local Marketing Request</p>');
    $("#imageText").append('<ul id="carouselList"><li>Worked on the LMR app to cater to Marketing request with respect to events happening out of store</li><li>Worked on changing permissions along with fixing events workflow with responses and notifications</li><li>Made sure the budget was updated dynamically for smoother approval/denies among the regional leaders,area leaders and marketing</li></ul>');
  }
  if (slide == 3){
    $("#imageText").text("");
    $("#imageText").append('<p>SSRS Reporting</p>');
    $("#imageText").append('<ul id="carouselList"><li>Part of fixing bug in Emergency Contact Information for HR team</li><li>Used Linq to SQL entity classes and database tables</li><li>Added features to the SSRS report</li></ul>');
  }
  if (slide == 4){
    $("#imageText").text("");
    $("#imageText").append('<p>Machine Learning in Analytics</p>');
    $("#imageText").append('<ul id="carouselList"><li>Currently working with the Analytics Team in making predictive model to calculate product sales across different Victra stores</li><li>Using R Language to design a machine learning model to predict the number of boxes by extracting features from available past data</li></ul>');
  }
  if (slide == 5){
    $("#imageText").text("");
    $("#imageText").append('<p style="font-size:18pt">Any Questions? <br> Any Offers? :P </p>');
  }
}
