       let dm = document.getElementById("lc");
        let dd = document.getElementById("dropdown");
        let button = document.getElementById("but");



        dd.addEventListener("click", () => {
            if (dm.style.display != "none") {
                dm.style.display = "none"
            }
            else {
                dm.style.display = "block"

            }

        });
        var buton=document.getElementById("buid")
        var bhi=document.querySelectorAll(".hsli");
        bhi.forEach(element => {
            element.addEventListener("click",()=>{
                console.log("hello")
                buton.innerHTML=element.innerHTML;
            })
        });
