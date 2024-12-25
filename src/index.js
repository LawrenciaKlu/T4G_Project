document.addEventListener('DOMContentLoaded', () => {
    const currentPage = window.location.pathname.split('/').pop();  
    const navLinks = document.querySelectorAll('.nav a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.setAttribute('id', 'active'); 
        }
    });
});


const toggleButton = document.getElementById('toggleButton');
const paragraph = document.querySelector('.Pp1');

toggleButton.addEventListener('click', () => {
    
    if (paragraph.style.display === 'none' || paragraph.style.display === '') {
        paragraph.style.display = 'block';
        toggleButton.textContent = 'SHOW LESS';
    } else {
        paragraph.style.display = 'none';
        toggleButton.textContent = 'SHOW MORE';
    }
});


let future = document.getElementById("future");

        future.addEventListener("mouseover", () => {
            future.style.color = "darkblue";
            future.style.fontSize = "30px";
            future.style.backgroundColor = "lemonchiffon";
            future.innerHTML = "WE'VE GOT YOU COVERED";
});

        future.addEventListener("mouseout", () => {
            future.style.color = "black";
            future.style.fontSize = "30px"
            future.style.backgroundColor = "white"
            future.innerHTML = "YOUR HOME YOUR FUTURE"
        });


//  const button = document.getElementById("toggleButton");
//         const paragraph = document.querySelector(".Pp1");

//         button.addEventListener("click", () => {
//             if (paragraph.style.display === "none" || !paragraph.style.display) {
//                 paragraph.style.display = "block"; 
//                 button.textContent = "SHOW LESS"; 
//             } else {
//                 paragraph.style.display = "none"; 
//                 button.textContent = "SHOW MORE"; 
//             }
//         });




 document.querySelector('.button1 button').addEventListener('click', function() {
    const Pp1Element = document.querySelector('.Pp1');
    if (Pp1Element.style.display === 'none' || !Pp1Element.style.display) {
        Pp1Element.style.display = 'block';
         } else {
            Pp1Element.style.display = 'none';
         }
});






        