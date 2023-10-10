let divX=0;
let divY=0;
let onFly = false

const myDiv=(divkey)=>{
    

}

const divPrint=()=>{
    window.onmousedown = (e)=>{
        switch (e.which){
            case 1:
                myDiv(1)
                break;
            case 2:
                myDiv(2)
                break;
            case 3:
                myDiv(3)
                break;
        }
        window.block1.oncontextmenu = ()=> false
        window.block2.oncontextmenu = ()=> false
        window.block3.oncontextmenu = ()=> false
    }
}
