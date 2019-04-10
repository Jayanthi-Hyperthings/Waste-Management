(function(reportsController){

	var Reports = require('../dbInterface/reportsInterface');

	reportsController.getReportForSolution = function(req, res){
		var solution = req.params.solution;

		Reports.find({
			'_id.solution' : solution
		}, function(err, reportResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				return res.status(200).send(reportResponse);	
			}
		})
	}

	reportsController.getReportForZonePerSolution = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;

		Reports.find({
			'_id.solution' : solution,
			'zone' : zone
		}, function(err, reportResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{	
				return res.status(200).send(reportResponse);	
			}
		})
	}

	reportsController.getReportForAreasZonePerSolution = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;

		Reports.find({
			'_id.solution' : solution,
			'zone' : zone,
			'area' : area
		}, function(err, reportResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{	
				return res.status(200).send(reportResponse);	
			}
		})
	}

	reportsController.getReportForDeviceById = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;
		var deviceName = req.params.deviceId;

		Reports.find({
			'_id.solution' : solution,
			'zone' : zone,
			'area' : area,
			'deviceName' : deviceName
		}, function(err, reportResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				return res.status(200).send(reportResponse);
			}
		})

	}

})(module.exports)