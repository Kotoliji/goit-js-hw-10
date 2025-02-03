
const button = document.querySelector(".own-button");
const data = document.querySelector(".datatimer")


button.addEventListener("click",()=>{
    setInterval(()=>{
        let timeOnCloc =new Date(data.value).getTime();
        const dateNaw = new Date();
        let dataInfo = timeOnCloc - dateNaw.getTime();

        if(dataInfo<0){
            console.log("eror")
            return
        }

        let day = Math.floor( dataInfo / (1000 * 60 * 60 * 24))
        let hours = Math.floor((dataInfo % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))
        let minutes = Math.floor((dataInfo % (1000 * 60 * 60))/(1000 * 60))
        let seconds = Math.floor((dataInfo % (1000 * 60 ))/1000)

        document.querySelector("[data-hours]").textContent = hours
        document.querySelector("[data-minutes]").textContent = minutes
        document.querySelector("[data-seconds]").textContent = seconds
        document.querySelector("[data-day]").textContent = day
    } ,1000)


})