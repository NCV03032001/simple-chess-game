function Tot(id){
    var iX = id.charAt(1);
    var iY = id.charAt(0);
    var X = parseInt(iX);
    var Y = parseInt(iY);
	switch(isCoTrang(X, Y)) {
		case true: //Cờ trắng
			if(Y == 2) { //Dòng xuất phát
				for(i = Y + 1; i <= Y + 2; i ++) {
					if(isEmpty(X, i))
						isChon(X, i);
					if(isCoDen(X, i))
						break;
				}
				if(!isBien(X - 1, Y + 1) && isCoDen(X - 1, Y + 1))
					isChon(X - 1, Y + 1);
				if(!isBien(X + 1, Y + 1) && isCoDen(X + 1, Y + 1))
					isChon(X + 1, Y + 1);
			}
            else {
				if(!isBien(X, Y + 1) && isEmpty(X, Y + 1))
					isChon(X, Y + 1);
				if(!isBien(X - 1, Y + 1) && isCoDen(X - 1, Y + 1))
					isChon(X - 1, Y + 1);
				if(!isBien(X + 1, Y + 1) && isCoDen(X + 1, Y + 1))
					isChon(X + 1, Y + 1);
			}
		break;
		case false:	//Cờ đen		
			if(Y == 7) { //Dòng xuất phát
				for(i = Y - 1; i >= Y - 2; i--) {
					if(isEmpty(X, i))
						isChon(X, i);
					if(isCoTrang(X, i))
						break;
			    }
			    if(!isBien(X - 1, Y - 1) && isCoTrang(X - 1, Y - 1))
				    isChon(X - 1, Y - 1);
			    if(!isBien(X + 1, Y - 1) && isCoTrang(X + 1, Y - 1))
				    isChon(X + 1, Y - 1);
			}
            else {
				if(!isBien(X, Y - 1) && isEmpty(X, Y - 1))
					isChon(X, Y - 1);
				if(!isBien(X - 1, Y - 1) && isCoTrang(X - 1, Y - 1))
					isChon(X - 1, Y - 1);
				if(!isBien(X + 1, Y - 1) && isCoTrang(X + 1, Y - 1))
					isChon(X + 1, Y - 1);
			}
		break;	
	}
}