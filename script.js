function getId(obj) {
    var dx = obj.offsetLeft;
    var dy = obj.offsetTop;
    var X = (dx - dx%60)/60 + 1;
    var Y = (dy - dy%60)/60 + 1 ;
    return Y.toString() + X.toString();
}
function isBien(X, Y) {
	if(X < 1 || X > 8)
		return true;
	else if(Y < 1 || Y > 8)
		return true;
	else
		return false;
}
function isChon(X, Y) {
    var oChon = document.getElementById("b"+Y.toString()+X.toString());
    oChon.style.border = "solid 2px red";
    oChon.setAttribute("name", "Chon");
}
function huyChon(X, Y) {
    for(i = 1; i <= 8; i++) {
        for(j = 1; j <= 8; j++) {
            var oChon =  document.getElementById("b"+i.toString()+j.toString());
            oChon.style.border = "solid 2px";
            oChon.setAttribute("name", null);
        }
    }
    document.getElementById(Y.toString()+X.toString()).style.zIndex = 10;
}
function isEmpty(X, Y) {
    var chk = document.getElementById(Y.toString()+X.toString());
    if (chk === null) return true;
    return false;
}
function isCoTrang(X, Y) {
    if (isEmpty(X, Y)) return false;
    var namet = document.getElementById(Y.toString()+X.toString()).className.toString();
    namet = namet.substring(2, namet.indexOf(' '));
    if (namet == "Den") return false;
    return true;
}
function isCoDen(X, Y) {
    if (isEmpty(X, Y)) return false; 
    var namet = document.getElementById(Y.toString()+X.toString()).className.toString();
    namet = namet.substring(2, namet.indexOf(' '));
    if (namet == "Den") return true;
    return false;
}
function GetMau(id) {
    var namet = document.getElementById(id).className.toString();
    namet = namet.substring(2, namet.indexOf(' '));
    return namet;
}
function GetName(id){
	var namet = document.getElementById(id).className.toString();
    namet = namet.substring(namet.indexOf(' ')+1, namet.length);
    return namet;
}
function isLegal(X, Y) {
    var chk = document.getElementById("b"+Y.toString()+X.toString()).getAttribute("name");
    if (chk == "Chon") return true;
    return false;
}
function DiChuyen(idt, idn) {
    var oX = parseInt(idt.charAt(1));
    var oY = parseInt(idt.charAt(0));
    var nX = parseInt(idn.charAt(1));
    var nY = parseInt(idn.charAt(0));
    var oChon = document.getElementById(idt);
    if (!isLegal(nX, nY)) {
        oChon.style.left = (oX-1)*60 + 10 + "px";
        oChon.style.top = (oY-1)*60 + 10 + "px"
        huyChon(oX, oY);
        return false;
    }
    if ((isCoTrang(oX, oY) && isCoDen(nX, nY)) || (isCoDen(oX, oY) && isCoTrang(nX, nY))) {
        var oMat = document.getElementById(nY.toString()+nX.toString());
        oMat.style.display = "none";
        var mauMat = GetMau(nY.toString()+nX.toString());
        var nameMat = GetName(nY.toString()+nX.toString());
        if (mauMat == "Den") {
            switch(nameMat) {
                case "Hau": {
                    document.getElementById("co1").insertAdjacentText('beforeend', "♚");
                }
                break;
                case "Xe": {
                    document.getElementById("co1").insertAdjacentText('beforeend', "♜");
                }
                break;
                case "Tuong": {
                    document.getElementById("co1").insertAdjacentText('beforeend', "♝");
                }
                break;
                case "Ma": {
                    document.getElementById("co1").insertAdjacentText('beforeend', "♞");
                }
                break;
                case "Tot": {
                    document.getElementById("co1").insertAdjacentText('beforeend', "♟");
                }
                break;
                case "Vua": {
                    document.getElementById("co1").insertAdjacentText('beforeend', "♛");
                }
                break;
            }
        }
        else if (mauMat == "Trang") {
            switch(nameMat) {
                case "Hau": {
                    document.getElementById("co2").insertAdjacentText('beforeend', "♚");
                }
                break;
                case "Xe": {
                    document.getElementById("co2").insertAdjacentText('beforeend', "♜");
                }
                break;
                case "Tuong": {
                    document.getElementById("co2").insertAdjacentText('beforeend', "♝");
                }
                break;
                case "Ma": {
                    document.getElementById("co2").insertAdjacentText('beforeend', "♞");
                }
                break;
                case "Tot": {
                    document.getElementById("co2").insertAdjacentText('beforeend', "♟");
                }
                break;
                case "Vua": {
                    document.getElementById("co2").insertAdjacentText('beforeend', "♛");
                }
                break;
            }
        }
        if (nameMat == "Vua") {
            if (mauMat == "Trang")
                document.getElementById("tb").innerHTML = "Cờ Đen thắng!";
            else document.getElementById("tb").innerHTML = "Cờ Trắng thắng!";
        }
        oMat.setAttribute("id", nY.toString()+nX.toString()+"x");
    }
    oChon.style.left = (nX-1)*60 + 10 + "px";
    oChon.style.top = (nY-1)*60 + 10 + "px";
    var chkI = nY.toString()+nX.toString();
    oChon.setAttribute("id", chkI);
    var chkN = GetName(chkI);
    if (chkN == "Tot" && (nY == 1 || nY == 8)) {
        PhongCap(chkI);
    }
    huyChon(nX, nY);
    return true;
}
function PhongCap(id) {
    var name = "";
    var oChon = document.getElementById(id); 
    document.getElementById("phongCap").style.display = "inline-block";
    var test = setInterval(function(){
        var chk = document.getElementById("phongCap").style.display;
        if (chk == "none") {
            var box = document.getElementsByName("Cap");
            for (i = 0; i < box.length; i++) {
                if (box[i].checked === true)
                    name = box[i].value;
            }
            var mau = GetMau(id);
            if (mau == "Den") {
                switch(name) {
                    case "Hau": {
                        oChon.innerHTML = "♚";
                        oChon.setAttribute("class", "coDen Hau");
                    }
                    break;
                    case "Xe": {
                        oChon.innerHTML = "♜";
                        oChon.setAttribute("class", "coDen Xe");
                    }
                    break;
                    case "Tuong": {
                        oChon.innerHTML = "♝";
                        oChon.setAttribute("class", "coDen Tuong");
                    }
                    break;
                    case "Ma": {
                        oChon.innerHTML = "♞";
                        oChon.setAttribute("class", "coDen Ma");
                    }
                    break;
                }
            } else {   
                switch(name) {
                    case "Hau": {
                        oChon.innerHTML = "♚";
                        oChon.setAttribute("class", "coTrang Hau");
                    }
                    break;
                    case "Xe": {
                        oChon.innerHTML = "♜";
                        oChon.setAttribute("class", "coTrang Xe");
                    }
                    break;
                    case "Tuong": {
                        oChon.innerHTML = "♝";
                        oChon.setAttribute("class", "coTrang Tuong");
                    }
                    break;
                    case "Ma": {
                        oChon.innerHTML = "♞";
                        oChon.setAttribute("class", "coTrang Ma");
                    }
                    break;
                }
            }
            clearInterval(test);
        }
    }, 1000);
}