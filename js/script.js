document.addEventListener("DOMContentLoaded" , ()=>{

    const layout = document.getElementById("layout");
    const section = [...layout.children];
    let page = 0;
    const last = section.length - 1; //3   

    const ev = ["wheel" ,"touches"];
    window.addEventListener('wheel', e  =>{
        e.preventDefault;

        if(e.deltaY > 0)        page++;
        else if (e.deltaY < 0)  page--;

        if(page < 0 )           page = 0;
        else if (page > last)   page = last; //3
        
        console.log( e.deltaY );

        layout.style.top = page * (-100) + "vh";// -100vh;

    } , {passive: false});
});//end...............