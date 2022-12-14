const parallax = document.querySelector('.');
const front = document.querySelector('.');
// const back = document.querySelector('.');

// sensitivity for booth layers
/* 
 the higher the number,
 lower the sensitivity

 */
const sFront = 80;
const sBack = 200;

// adding mouse move effect to the whole section 
parallax.addEventListener('mousemove', e => {

    // Get he X,Y mouse coordinates
    const x = e.clientX;
    const y = e.clientY;

    /*
        using template literals,
        translate the front layer using the 
        coordinates, and apply the front sensitivity
    */
   front.style.transform = `
   translate(
    ${x / sFront}%,
    ${y / sFront}%
   )`;

   /* 
     Translate the back layer using the 
     coordinates, and apply 
     the back sensitivity
    */ 
//    back.style.transform = `
//    translate(
//     ${x / sBack}%,
//     ${y / sBack}%
//    )`
});