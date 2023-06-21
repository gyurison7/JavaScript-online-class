var obj1 = {
	outer: function() {
		console.log('TEST => ', this); // (1) obj1 출력
		var innerFunc = function() {
			console.log('TEST => ', this); // (2), (3) 전역객체
		}
		innerFunc(); // 함수로서의 호출

		var obj2 = {
			innerMethod: innerFunc
		};
		obj2.innerMethod(); // 매소드로서의 호출
	}
};
obj1.outer();
