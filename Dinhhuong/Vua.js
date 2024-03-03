function Vua(id){
    var iX = id.charAt(1);
    var iY = id.charAt(0);
    var X = parseInt(iX);
    var Y = parseInt(iY);
    switch(isCoTrang(X, Y)) {
        case true: //Cờ trắng
            if(!isBien(X, Y - 1) && !isCoTrang(X, Y - 1))
                isChon(X, Y - 1);
            if(!isBien(X + 1, Y - 1) && !isCoTrang(X + 1,Y - 1))
                isChon(X + 1, Y - 1);		
            if(!isBien(X - 1, Y - 1) && !isCoTrang(X - 1,Y - 1))
                isChon(X - 1, Y - 1);
            if(!isBien(X, Y + 1) && !isCoTrang(X, Y + 1))
                isChon(X, Y + 1);
            if(!isBien(X + 1, Y + 1) && !isCoTrang(X + 1, Y + 1))
                isChon(X + 1, Y + 1);
            if(!isBien(X - 1, Y + 1) && !isCoTrang(X - 1, Y + 1))
                isChon(X - 1, Y + 1);
            if(!isBien(X - 1, Y) && !isCoTrang(X - 1, Y))
                isChon(X - 1, Y); 
            if(!isBien(X + 1, Y) && !isCoTrang(X + 1, Y))
                isChon(X + 1, Y);
        break;
        case false: //Cờ đen
            if(!isBien(X, Y - 1) && !isCoDen(X, Y - 1))
                isChon(X, Y - 1);
            if(!isBien(X + 1, Y - 1) && !isCoDen(X + 1,Y - 1))
                isChon(X + 1, Y - 1);		
            if(!isBien(X - 1, Y - 1) && !isCoDen(X - 1,Y - 1))
                isChon(X - 1, Y - 1);
            if(!isBien(X, Y + 1) && !isCoDen(X, Y + 1))
                isChon(X, Y + 1);
            if(!isBien(X + 1, Y + 1) && !isCoDen(X + 1, Y + 1))
                isChon(X + 1, Y + 1);
            if(!isBien(X - 1, Y + 1) && !isCoDen(X - 1, Y + 1))
                isChon(X - 1, Y + 1);
            if(!isBien(X - 1, Y) && !isCoDen(X - 1, Y))
                isChon(X - 1, Y); 
            if(!isBien(X + 1, Y) && !isCoDen(X + 1, Y))
                isChon(X + 1, Y);
        break;
    }
}