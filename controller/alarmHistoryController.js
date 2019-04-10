(function(alarmHistoryController){

	var AlarmHistory = require('../dbInterface/alarmHistoryInterface');
	var AssignedAlarms = require('../dbInterface/assignedAlarmsInterface');


	alarmHistoryController.notifications = function(req, res){
		AlarmHistory.findSort({
			status : "Open"
		}, function(err, alarmHistoryResponse){
			if(err){
				return res.status(400).send({error : "error in getting notificaions"});
			}else{
				return res.status(200).send(alarmHistoryResponse);
			}
		})
	}

	alarmHistoryController.getNotificationForSolution = function(req, res){
		var solution = req.params.solution;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		AlarmHistory.find({
			'solution' : solution,
			'isAssigned' : false
		}, function(err, alarmHistoryResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(alarmHistoryResponse.length == 0){
					return res.status(200).send({wasteCollected : alarmHistoryResponse});	
				}else{
					return res.status(200).send(alarmHistoryResponse);	
				}
				
			}
		})
	}

	alarmHistoryController.getNotificationForZonePerSolution = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		AlarmHistory.find({
			'solution' : solution,
			'zone' : zone,
			'isAssigned' : false
		}, function(err, alarmHistoryResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(alarmHistoryResponse.length == 0){
					return res.status(200).send({Zones : alarmHistoryResponse});	
				}else{
					return res.status(200).send(alarmHistoryResponse);	
				}
			}
		})
	}

	alarmHistoryController.getNotificationForAreasZonePerSolution = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		AlarmHistory.find({
			'solution' : solution,
			'zone' : zone,
			'area' : area,
			'isAssigned' : false
		}, function(err, alarmHistoryResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(alarmHistoryResponse.length == 0){
					return res.status(200).send({devices : alarmHistoryResponse});	
				}else{
					return res.status(200).send(alarmHistoryResponse);	
				}
			}
		})
	}

	alarmHistoryController.getNotificationForDeviceById = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;
		var deviceId = req.params.deviceId;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		AlarmHistory.find({
			'solution' : solution,
			'zone' : zone,
			'area' : area,
			'deviceId' : Number(deviceId),
			'isAssigned' : false
		}, function(err, alarmHistoryResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
					return res.status(200).send(alarmHistoryResponse);
			}
		})

	}

	alarmHistoryController.getAssignedAlarms = function(req, res){
		AssignedAlarms.find({}, function(err, assignedAlarmsResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
					return res.status(200).send(assignedAlarmsResponse);
			}
		})
	}

})(module.exports)