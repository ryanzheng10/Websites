"use strict";


const toggle = document.querySelector("#toggle");
const styleSheet = Array.from(document.styleSheets).find(sheet => sheet.href && sheet.href.includes('index.css'));
/* const rootStyles = document.documentElement.style;
i think you can do this too and check for null*/
toggle.addEventListener("change", function(){

    var elements = document.getElementsByClassName("codeblock");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.toggle("invert");
    }


    if(toggle.checked){
        // checked means darkmode
        if (styleSheet) {
            const rootStyles = styleSheet.cssRules[0].style;
            // Change the values of the variables
            rootStyles.setProperty('--webpage-bg-color', '#1c1c1c');
            rootStyles.setProperty('--page-bg-color', 'rgb(51, 51, 51)');
            rootStyles.setProperty('--text-color', 'rgb(171, 171, 171)');
            rootStyles.setProperty('--example-edge-color', 'rgb(255, 255, 255)');
            rootStyles.setProperty('--h1-color', 'white');
            rootStyles.setProperty('--h2-color', 'rgb(238, 238, 238)');
            rootStyles.setProperty('--h3-color', 'rgb(232, 232, 232)');
            rootStyles.setProperty('--h4-color', 'rgb(194, 194, 194)');
            rootStyles.setProperty('--h5-color', 'rgb(184, 184, 184)');

            rootStyles.setProperty('--box-shadow', '-3px 5px 5px black, 3px 5px 5px black');
          } else {
            console.error('External stylesheet not found.');
          }
    }else{
        if (styleSheet) {
            const rootStyles = styleSheet.cssRules[0].style;
            // Change the values of the variables
            rootStyles.setProperty('--webpage-bg-color', 'rgb(231, 231, 231)');
            rootStyles.setProperty('--page-bg-color', 'rgb(255, 255, 255)');
            rootStyles.setProperty('--text-color', 'rgb(0, 0, 0)');
            rootStyles.setProperty('--example-edge-color', 'rgb(0, 0, 0)');
            rootStyles.setProperty('--h1-color', 'rgb(0, 0, 0)');
            rootStyles.setProperty('--h2-color', 'rgb(0, 0, 0)');
            rootStyles.setProperty('--h3-color', 'rgb(0, 0, 0)');
            rootStyles.setProperty('--h4-color', 'rgb(0, 0, 0)');
            rootStyles.setProperty('--h5-color', 'rgb(0, 0, 0)');

            rootStyles.setProperty('--box-shadow', '-3px 5px 5px grey, 3px 5px 5px grey');
          } else {
            console.error('External stylesheet not found.');
          }
    }
});
