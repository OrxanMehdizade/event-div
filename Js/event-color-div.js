const block1=document.getElementById("block1");
const block2=document.getElementById("block2");
const block3=document.getElementById("block3");


function myDivas(mousebtn,divValue,clientx,clienty){
    const speed = 2;

    if(mousebtn===1 || mousebtn===2 || mousebtn===3){
        const targetcoordinateX= clientx-divValue.clientWidth/2;
        const targetcoordinateY= clienty-divValue.clientHeight/2;

        let divX=parseFloat(getComputedStyle(divValue).left);
        let divY=parseFloat(getComputedStyle(divValue).top);

        const x=(targetcoordinateX-divX)/speed;
        const y=(targetcoordinateY-divY)/speed;
        function divAnimate (){
            if(Math.abs(divX-targetcoordinateX)>1||Math.abs(divY-targetcoordinateY)>1){
                divX+=x;
                divY+=y;
                divValue.style.left=`${divX}px`;
                divValue.style.top=`${divY}px`;
                setTimeout(divAnimate,10)
            }
        }
        divAnimate();


    }

}

document.addEventListener("mousedown",(e)=>{
    switch (e.button){
        case 0:
            myDivas(1, block1, e.clientX, e.clientY);
            break;
        case 1:
            myDivas(2, block2, e.clientX, e.clientY);
            break;
        case 2:
            myDivas(3, block3, e.clientX, e.clientY);
            break;
    }
})