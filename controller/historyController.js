(function(historyController){

	var History = require('../dbInterface/historyInterface');
	var moment = require('moment');

	historyController.getAllZonesForSolution = function(req, res){
		var solution = req.params.solution;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'_id.solution' : solution
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            // EGeneration: { '$sum': '$EGeneration' }
				            wasteCollected : {$sum : "$wasteCollected"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({wasteCollected : historyResponse});	
				}else{
					dateFormatterForWasteCollected(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
				}
				
			}
		})
	}

	historyController.getAreasForZonePerSolution = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'_id.solution' : solution,
						'zone' : zone	
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            // EGeneration: { '$sum': '$EGeneration' }
				            wasteCollected : {$sum : "$wasteCollected"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({Zones : historyResponse});	
				}else{
					dateFormatterForWasteCollected(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
				}
			}
		})
	}

	historyController.getDevicesForAreasZonePerSolution = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'_id.solution' : solution,
						'zone' : zone,
						'area' : area
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            // EGeneration: { '$sum': '$EGeneration' }
				            wasteCollected : {$sum : "$wasteCollected"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({devices : historyResponse});	
				}else{
					dateFormatterForWasteCollected(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
				}
			}
		})
	}

	historyController.getDeviceById = function(req, res){
		var solution = req.params.solution;
		var zone = req.params.zone;
		var area = req.params.area;
		var deviceId = req.params.deviceId;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'_id.solution' : solution,
						'zone' : zone,
						'area' : area,
						'_id.deviceId' : Number(deviceId)
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            // EGeneration: { '$sum': '$EGeneration' }
				            wasteCollected : {$sum : "$wasteCollected"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				dateFormatterForWasteCollected(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
			}
		})

	}

	historyController.getWasteForAdmin = function(req, res){
		var adminMail = req.params.adminMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            // EGeneration: { '$sum': '$EGeneration' }
				            dryWaste : {$sum : "$dryWaste"},
				            wetWaste : {$sum : "$wetWaste"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({dryWaste : 0, wetWaste : 0});	
				}else{
					dateFormatterForWaste(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
					
				}
				
			}
		})
	}

	historyController.getWasteForDistrbuter = function(req, res){
		var adminMail = req.params.adminMail;
		var distributorMail = req.params.distributorMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail,
						'distributorMail' : distributorMail	
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            dryWaste : {$sum : "$dryWaste"},
				            wetWaste : {$sum : "$wetWaste"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({dryWaste : 0, wetWaste : 0});	
				}else{
					dateFormatterForWaste(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
				}
			}
		})
	}

	historyController.getWasteForCustomer = function(req, res){
		var adminMail = req.params.adminMail;
		var distributorMail = req.params.distributorMail;
		var customerMail = req.params.customerMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail,
						'distributorMail' : distributorMail,
						'customerMail' : customerMail
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            dryWaste : {$sum : "$dryWaste"},
				            wetWaste : {$sum : "$wetWaste"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({dryWaste : 0, wetWaste : 0});	
				}else{
					dateFormatterForWaste(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})	
				}
			}
		})
	}

	historyController.getWasteForUser = function(req, res){
		var adminMail = req.params.adminMail;
		var distributorMail = req.params.distributorMail;
		var customerMail = req.params.customerMail;
		var userMail = req.params.userMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail,
						'distributorMail' : distributorMail,
						'customerMail' : customerMail,
						'userMail' : userMail
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            dryWaste : {$sum : "$dryWaste"},
				            wetWaste : {$sum : "$wetWaste"}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				dateFormatterForWaste(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
			}
		})

	}

	historyController.getEnergyForAdmin = function(req, res){
		var adminMail = req.params.adminMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            EGeneration: { '$sum': '$EGeneration' },
				            EConsumption: { '$sum' : '$EConsumption'}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({dryWaste : 0, wetWaste : 0});	
				}else{
					dateFormatterForEnergy(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})	
				}
				
			}
		})
	}

	historyController.getEnergyForDistrbuter = function(req, res){
		var adminMail = req.params.adminMail;
		var distributorMail = req.params.distributorMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		/*History.find({
			'_id.solution' : solution,
			'zone' : zone,
			ts : {
				$gte : startDate
			}
		}*/
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail,
						'distributorMail' : distributorMail	
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            EGeneration: { '$sum': '$EGeneration' },
				            EConsumption: { '$sum' : '$EConsumption'}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({dryWaste : 0, wetWaste : 0});	
				}else{
					dateFormatterForEnergy(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
				}
			}
		})
	}

	historyController.getEnergyForCustomer = function(req, res){
		var adminMail = req.params.adminMail;
		var distributorMail = req.params.distributorMail;
		var customerMail = req.params.customerMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		// History.find({
		// 	'_id.solution' : solution,
		// 	'zone' : zone,
		// 	'area' : area,
		// 	ts : {
		// 		$gte : startDate
		// 	}
		// }
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail,
						'distributorMail' : distributorMail,
						'customerMail' : customerMail
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            EGeneration: { '$sum': '$EGeneration' },
				            EConsumption: { '$sum' : '$EConsumption'}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				if(historyResponse.length == 0){
					return res.status(200).send({dryWaste : 0, wetWaste : 0});	
				}else{
					dateFormatterForEnergy(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})	
				}
			}
		})
	}

	historyController.getEnergyForUser = function(req, res){
		var adminMail = req.params.adminMail;
		var distributorMail = req.params.distributorMail;
		var customerMail = req.params.customerMail;
		var userMail = req.params.userMail;
		var startDate = new Date();
		startDate.setDate(startDate.getDate() - 7);
		console.log(startDate);
		// History.find({
		// 	'_id.solution' : solution,
		// 	'zone' : zone,
		// 	'area' : area,
		// 	'_id.deviceId' : Number(deviceId),
		// 	ts : {
		// 		$gte : startDate
		// 	}
		// }
		History.aggregate([
					// {'_id.solution' : solution},
					{$match:{ts:{$gt: moment().subtract(6, 'days').startOf('day')._d,$lt: moment().endOf('day')._d},
						'adminMail' : adminMail,
						'distributorMail' : distributorMail,
						'customerMail' : customerMail,
						'userMail' : userMail
					}},
				    {
				        $group: {
				            _id : { day: { $dayOfMonth: "$ts" }, month: { $month: "$ts" }, year: { $year: "$ts" } },
				            EGeneration: { '$sum': '$EGeneration' },
				            EConsumption: { '$sum' : '$EConsumption'}
				        }
				    }
		], function(err, historyResponse){
			if(err){
				return res.status(400).send({
					error : err
				})
			}else{
				dateFormatterForEnergy(historyResponse, function(err, resp){
						return res.status(200).send(resp);		
					})
			}
		})

	}

	function dateFormatterForWaste(historyResponse, callback){
		var arr = [];
		var i = 7;
		for(i=7;i>0;i--){
			arr.push({
				date : (moment().subtract(i, 'days')).format('MM/DD/YYYY')
			});
		}
		console.log(arr);
		var data = historyResponse.map(function(item){
			var dateString = item._id.month+"/"+item._id.day+"/"+item._id.year;
			var dateObj = new Date(dateString)
			var dateFormat = moment(dateObj).format('MM/DD/YYYY');
			return {
				date : dateFormat,
				dryWaste : item.dryWaste,
				wetWaste : item.wetWaste
			};
		})
		arr.forEach(function(x){
			var count = 0;
			data.forEach(function(y){
				if(x.date == y.date){
					count = 1;
					x.dryWaste = y.dryWaste;
					x.wetWaste = y.wetWaste;
				}
			})
			if(count == 0){
				x.dryWaste = 0;
				x.wetWaste = 0;
			}
		})
		callback(null, arr);
	}

	function dateFormatterForEnergy(historyResponse, callback){
		var arr = [];
		var i = 7;
		for(i=7;i>0;i--){
			arr.push({
				date : (moment().subtract(i, 'days')).format('MM/DD/YYYY')
			});
		}
		console.log(arr);
		var data = historyResponse.map(function(item){
			var dateString = item._id.month+"/"+item._id.day+"/"+item._id.year;
			var dateObj = new Date(dateString)
			var dateFormat = moment(dateObj).format('MM/DD/YYYY');
			return {
				date : dateFormat,
				EGeneration : item.EGeneration,
				EConsumption : item.EConsumption
			};
		})
		arr.forEach(function(x){
			var count = 0;
			data.forEach(function(y){
				if(x.date == y.date){
					count = 1;
					x.EGeneration = y.EGeneration;
					x.EConsumption = y.EConsumption;
				}
			})
			if(count == 0){
				x.EGeneration = 0;
				x.EConsumption = 0;
			}
		})
		callback(null, arr);
	}

	function dateFormatterForWasteCollected(historyResponse, callback){
		var arr = [];
		var i = 7;
		for(i=7;i>0;i--){
			arr.push({
				date : (moment().subtract(i, 'days')).format('MM/DD/YYYY')
			});
		}
		console.log(arr);
		var data = historyResponse.map(function(item){
			var dateString = item._id.month+"/"+item._id.day+"/"+item._id.year;
			var dateObj = new Date(dateString)
			var dateFormat = moment(dateObj).format('MM/DD/YYYY');
			return {
				date : dateFormat,
				wasteCollected : item.wasteCollected,
				// wetWaste : item.wetWaste
			};
		})
		arr.forEach(function(x){
			var count = 0;
			data.forEach(function(y){
				if(x.date == y.date){
					count = 1;
					x.wasteCollected = y.wasteCollected;
					// x.wetWaste = y.wetWaste;
				}
			})
			if(count == 0){
				x.wasteCollected = 0;
				// x.wetWaste = 0;
			}
		})
		callback(null, arr);
	}

})(module.exports)