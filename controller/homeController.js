(function(homeController){

	var LiveData = require('../dbInterface/liveDataInterface');

	homeController.getBatteryLevelForSolution = function(req, res){
		var solution = req.params.solution;

		LiveData.find({
			'_id.solution' : solution
		}, function(err, liveDataResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(liveDataResponse.length == 0){
					return res.status(200).send({sites : liveDataResponse});	
				}else{
					var arr = Array.from({ length: 10 }, () => 0);
					console.log("liveDataResponse : ", liveDataResponse.length);
					liveDataResponse.forEach(function(item){
						var batteryLevel = item.batteryLevel;
						arr = checkLevel(arr, batteryLevel);
						console.log("arr : ", arr);
					})
					// var no_duplicate = [...new Set(sites)]
					// var array = checkMaLxevel(liveDataResponse.length, arr);
					return res.status(200).send(arr);	
				}
				
			}
		})
	}

	function checkLevel(arr, batteryLevel){
		if(batteryLevel>=0 && batteryLevel <=10){
			arr[0] = arr[0]+1;
		}
		if(batteryLevel>=10 && batteryLevel <=20){
			arr[1] = arr[1]+1;
		}
		if(batteryLevel>=20 && batteryLevel <=30){
			arr[2] = arr[2]+1;
		}
		if(batteryLevel>=30 && batteryLevel <=40){
			arr[3] = arr[3]+1;
		}
		if(batteryLevel>=40 && batteryLevel <=50){
			arr[4] = arr[4]+1;
		}
		if(batteryLevel>=50 && batteryLevel <=60){
			arr[5] = arr[5]+1;
		}
		if(batteryLevel>=60 && batteryLevel <=70){
			arr[6] = arr[6]+1;
		}
		if(batteryLevel>=70 && batteryLevel <=80){
			arr[7] = arr[7]+1;
		}
		if(batteryLevel>=80 && batteryLevel <=90){
			arr[8] = arr[8]+1;
		}
		if(batteryLevel>=90 && batteryLevel <=100){
			arr[9] = arr[9]+1;
		}
		return arr;
	}

	// function checkMaxLevel(len, arr){
	// 	var level = -1;;
	// 	arr.forEach(function(item){
	// 		if(item == len){
	// 			level = arr.indexOf(item);
	// 		}
	// 	})
	// 	if(level !== -1){
	// 		var minLevel = Number(level.toString() + "0")
	// 		var maxLevel = minLevel + 10;


	// 	}
	// }

	homeController.getBatteryLevelForZone = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;

		LiveData.find({
			'_id.solution' : solution,
			'zone' : zone
		}, function(err, liveDataResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(liveDataResponse.length == 0){
					return res.status(200).send({gateways : liveDataResponse});	
				}else{
					var arr = Array.from({ length: 10 }, () => 0);
					console.log("liveDataResponse : ", liveDataResponse.length);
					liveDataResponse.forEach(function(item){
						var batteryLevel = item.batteryLevel;
						arr = checkLevel(arr, batteryLevel);
						console.log("arr : ", arr);
					})
					// var no_duplicate = [...new Set(sites)]
					return res.status(200).send(arr);		
				}
			}
		})
	}

	homeController.getBatteryLevelForArea = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;

		LiveData.find({
			'_id.solution' : solution,
			'zone' : zone,
			'area' : area
		}, function(err, liveDataResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(liveDataResponse.length == 0){
					return res.status(200).send({devices : liveDataResponse});	
				}else{
					var arr = Array.from({ length: 10 }, () => 0);
					console.log("liveDataResponse : ", liveDataResponse.length);
					liveDataResponse.forEach(function(item){
						var batteryLevel = item.batteryLevel;
						arr = checkLevel(arr, batteryLevel);
						console.log("arr : ", arr);
					})
					// var no_duplicate = [...new Set(sites)]
					return res.status(200).send(arr);
				}
			}
		})
	}

	/*homeController.getDeviceById = function(req, res){
		var solution = req.params.solution;
		var siteName = req.params.siteName;
		var gatewayName = req.params.gatewayName;
		var deviceId = req.params.deviceId;

		LiveData.find({
			'_id.solution' : solution,
			'siteName' : siteName,
			'gatewayName' : gatewayName,
			'_id.deviceId' : Number(deviceId)
		}, function(err, liveDataResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				return res.status(200).send(liveDataResponse);
			}
		})

	}*/

})(module.exports)