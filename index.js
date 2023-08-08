let panels = document.querySelectorAll(".panel");

panels.forEach(panel => {
    panel.addEventListener("mouseover",function(){
        panel.classList.add("active");
    });

    panel.addEventListener("mouseout",function(){
        panel.classList.remove("active");
    });
});