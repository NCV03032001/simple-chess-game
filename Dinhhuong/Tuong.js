function Tuong(id) {
    var iX = id.charAt(1);
    var iY = id.charAt(0);
    var X = parseInt(iX);
    var Y = parseInt(iY);
    switch(isCoTrang(X, Y)) {
        case true: { //Cờ trắng
            var X_TR = X;
            var Y_TR = Y;
            while(!isBien(X_TR + 1, Y_TR + 1) && !isCoTrang(X_TR + 1, Y_TR + 1)) {
                isChon(X_TR + 1, Y_TR + 1);
                if(isCoDen(X_TR + 1, Y_TR + 1))
                    break;
                X_TR += 1;
                Y_TR += 1;
            }
            var X_TL = X;
            var Y_TL = Y;
            while(!isBien(X_TL - 1, Y_TL + 1) && !isCoTrang(X_TL - 1, Y_TL + 1)) {
                isChon(X_TL - 1, Y_TL + 1);
                if(isCoDen(X_TL - 1, Y_TL + 1))
                    break;
                X_TL -= 1;
                Y_TL += 1;
            }
            var X_BR = X;
            var Y_BR = Y;
            while(!isBien(X_BR + 1, Y_BR - 1) && !isCoTrang(X_BR + 1, Y_BR - 1)) {
                isChon(X_BR + 1, Y_BR - 1);
                if(isCoDen(X_BR + 1, Y_BR - 1))
                    break;
                X_BR += 1;
                Y_BR -= 1;
            }
            var X_BL = X;
            var Y_BL = Y;
            while(!isBien(X_BL - 1, Y_BL - 1) && !isCoTrang(X_BL - 1, Y_BL - 1)) {
                isChon(X_BL - 1, Y_BL - 1);
                if(isCoDen(X_BL - 1, Y_BL - 1))
                    break;
                X_BL -= 1;
                Y_BL -= 1;
            }
        }
        break;
        case false: { //Cờ đen
            var X_TR = X;
            var Y_TR = Y;
            while(!isBien(X_TR + 1, Y_TR + 1) && !isCoDen(X_TR + 1, Y_TR + 1)) {
                isChon(X_TR + 1, Y_TR + 1);
                if(isCoTrang(X_TR + 1, Y_TR + 1))
                    break;
                X_TR += 1;
                Y_TR += 1;
            }
            var X_TL = X;
            var Y_TL = Y;
            while(!isBien(X_TL - 1, Y_TL + 1) && !isCoDen(X_TL - 1, Y_TL + 1)) {
                isChon(X_TL - 1, Y_TL + 1);
                if(isCoTrang(X_TL - 1, Y_TL + 1))
                    break;
                X_TL -= 1;
                Y_TL += 1;
            }
            var X_BR = X;
            var Y_BR = Y;
            while(!isBien(X_BR + 1, Y_BR - 1) && !isCoDen(X_BR + 1, Y_BR - 1)) {
                isChon(X_BR + 1, Y_BR - 1);
                if(isCoTrang(X_BR + 1, Y_BR - 1))
                    break;
                X_BR += 1;
                Y_BR -= 1;
            }
            var X_BL = X;
            var Y_BL = Y;
            while(!isBien(X_BL - 1, Y_BL - 1) && !isCoDen(X_BL - 1, Y_BL - 1)) {
                isChon(X_BL - 1, Y_BL - 1);
                if(isCoTrang(X_BL - 1, Y_BL - 1))
                    break;
                X_BL -= 1;
                Y_BL -= 1;
            }
        }
        break;
    }
}