(function(liveDataController){

	var LiveData = require('../dbInterface/liveDataInterface');

	liveDataController.getAllZonesForSolution = function(req, res){
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
					var zone = liveDataResponse.map(function(item){
						return item.zone;
					})
					var no_duplicate = [...new Set(zone)]
					return res.status(200).send({zone : no_duplicate, data : liveDataResponse});	
				}
				
			}
		})
	}

	liveDataController.getAreasForZonePerSolution = function(req, res){
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
					return res.status(200).send({Zones : liveDataResponse});	
				}else{
					var area = liveDataResponse.map(function(item){
						return item.area;
					})
					var no_duplicate = [...new Set(area)]
					return res.status(200).send({area : no_duplicate, data : liveDataResponse});
				}
			}
		})
	}

	liveDataController.getDevicesForAreasZonePerSolution = function(req, res){
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
					var devices = liveDataResponse.map(function(item){
						return item.deviceName;
					})
					var no_duplicate = [...new Set(devices)]
					return res.status(200).send({devices : no_duplicate, data : liveDataResponse});
				}
			}
		})
	}

	liveDataController.getDeviceById = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;
		var deviceName = req.params.deviceName;

		LiveData.find({
			'_id.solution' : solution,
			'zone' : zone,
			'area' : area,
			'deviceName' : deviceName
		}, function(err, liveDataResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				return res.status(200).send(liveDataResponse);
			}
		})

	}

})(module.exports)