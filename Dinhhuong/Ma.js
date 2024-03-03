function Ma(id) {
    var iX = id.charAt(1);
    var iY = id.charAt(0);
    var X = parseInt(iX);
    var Y = parseInt(iY);
    switch(isCoTrang(X, Y)) {
        case true: //Cờ trắng
            if(!isBien(X - 1, Y + 2) && !isCoTrang(X - 1, Y + 2))
                isChon(X - 1, Y + 2);
            if(!isBien(X + 1, Y + 2) && !isCoTrang(X + 1, Y + 2))
                isChon(X + 1, Y + 2);
            if(!isBien(X - 1, Y - 2) && !isCoTrang(X - 1, Y - 2))
                isChon(X - 1, Y - 2);
            if(!isBien(X + 1, Y - 2) && !isCoTrang(X + 1, Y - 2))
                isChon(X + 1, Y - 2);
            if(!isBien(X + 2, Y + 1) && !isCoTrang(X + 2, Y + 1))
                isChon(X + 2, Y + 1);
            if(!isBien(X + 2, Y - 1) && !isCoTrang(X + 2, Y - 1))
                isChon(X + 2, Y - 1);
            if(!isBien(X - 2, Y + 1) && !isCoTrang(X - 2, Y + 1))
                isChon(X - 2, Y + 1);
            if(!isBien(X - 2, Y - 1) && !isCoTrang(X - 2, Y - 1))
                isChon(X - 2, Y - 1);
        break;
        case false: //Cờ đen
            if(!isBien(X - 1, Y + 2) && !isCoDen(X - 1, Y + 2))
                isChon(X - 1, Y + 2);
            if(!isBien(X + 1, Y + 2) && !isCoDen(X + 1, Y + 2))
                isChon(X + 1, Y + 2);
            if(!isBien(X - 1, Y - 2) && !isCoDen(X - 1, Y - 2))
                isChon(X - 1, Y - 2);
            if(!isBien(X + 1, Y - 2) && !isCoDen(X + 1, Y - 2))
                isChon(X + 1, Y - 2);
            if(!isBien(X + 2, Y + 1) && !isCoDen(X + 2, Y + 1))
                isChon(X + 2, Y + 1);
            if(!isBien(X + 2, Y - 1) && !isCoDen(X + 2, Y - 1))
                isChon(X + 2, Y - 1);
            if(!isBien(X - 2, Y + 1) && !isCoDen(X - 2, Y + 1))
                isChon(X - 2, Y + 1);
            if(!isBien(X - 2, Y - 1) && !isCoDen(X - 2, Y - 1))
                isChon(X - 2, Y - 1);
        break;
    }
}