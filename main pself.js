document.querySelectorAll('nav ul li a').forEach(link => { 
    link.addEventListener('click', function (e) { 
        e.preventDefault(); 
        const section = document.querySelector(this.getAttribute('href')); 
        section.scrollIntoView({ behavior: 'smooth' }); 
    }); 
}); 
 
document.getElementById('shopNow').addEventListener('click', () => { 
    alert('Thanks for visiting! Check out our products.'); 
}); 
  
window.addEventListener('scroll', () => { 
    const sections = document.querySelectorAll('section'); 
    const navLinks = document.querySelectorAll('nav ul li a'); 
    let current = ''; 
 
    sections.forEach(section => { 
        const sectionTop = section.offsetTop; 
        if (scrollY >= sectionTop - 50) { 
            current = section.getAttribute('id'); 
        } 
    }); 
 
    navLinks.forEach(link => { 
        link.classList.remove('active'); 
        if (link.getAttribute('href').includes(current)) { 
            link.classList.add('active'); 
        } 
    }); 
}); 
  
document.addEventListener('DOMContentLoaded', () => { 
    const products = document.querySelectorAll('.product'); 
    const productCountSpan = document.getElementById('productCount'); 
    productCountSpan.textContent = products.length; 
});