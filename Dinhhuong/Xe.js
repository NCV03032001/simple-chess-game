function Xe(id){
    var iX = id.charAt(1);
    var iY = id.charAt(0);
    var X = parseInt(iX);
    var Y = parseInt(iY);
	switch(isCoTrang(X, Y)) {
		case true: //Cờ trắng
			var Y_Top = Y;
			while(!isBien(X, Y_Top - 1) && !isCoTrang(X, Y_Top - 1)) {
				isChon(X, Y_Top - 1);
				if(isCoDen(X, Y_Top - 1))
					break;
                Y_Top -= 1;
			}
			var Y_Bottom = Y;
			while(!isBien(X, Y_Bottom + 1) && !isCoTrang(X, Y_Bottom + 1)) {
				isChon(X, Y_Bottom + 1);
				if(isCoDen(X, Y_Bottom + 1))
					break;
				Y_Bottom += 1; 
			}
			var X_Left = X;
			while(!isBien(X_Left - 1, Y) && !isCoTrang(X_Left - 1, Y)) {
				isChon(X_Left - 1, Y);
				if(isCoDen(X_Left - 1, Y))
					break;
				X_Left -= 1; 
			}
			var X_Right = X;
			while(!isBien(X_Right + 1, Y) &&!isCoTrang(X_Right + 1, Y)) {
				isChon(X_Right + 1, Y);
				if(isCoDen(X_Right + 1, Y))
					break;
				X_Right += 1; 
			}
		break;	
		case false: //Cờ đen
            var Y_Top = Y;
            while(!isBien(X, Y_Top - 1) && !isCoDen(X, Y_Top - 1)) {
                isChon(X, Y_Top - 1);
                if(isCoTrang(X, Y_Top - 1))
                    break;
                Y_Top -= 1;
            }
            var Y_Bottom = Y;
            while(!isBien(X, Y_Bottom + 1) && !isCoDen(X, Y_Bottom + 1)) {
                isChon(X, Y_Bottom + 1);
                if(isCoTrang(X, Y_Bottom + 1))
                    break;
                Y_Bottom += 1; 
            }
            var X_Left = X;
            while(!isBien(X_Left - 1, Y) && !isCoDen(X_Left - 1, Y)) {
                isChon(X_Left - 1, Y);
                if(isCoTrang(X_Left - 1, Y))
                    break;
                X_Left -= 1; 
            }
            var X_Right = X;
            while(!isBien(X_Right + 1, Y) &&!isCoDen(X_Right + 1, Y)) {
                isChon(X_Right + 1, Y);
                if(isCoTrang(X_Right + 1, Y))
                    break;
                X_Right += 1; 
            }
		break;
	}
}