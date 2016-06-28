db.assets.update({ assetName: 'APC_UPS_Test' }, {
  $set: {
    'assetStatus': [
      {
        'available': true,
        'current': true,
        'activityId': 'none',
        'periodStart': '2016-06-24T01:00:00+00:00',
      },
    ],
  },
}
);

db.assets.update({ assetId: 'APC_UPS_Test' }, {
  $push: {
    assetStatus: {
      'available': true,
      'current': false,
      'activityId': '',
      'updatedAt': '2016-06-24T01:00:00+00:00',
      'periodStart': '2016-06-24T01:00:00+00:00',
      'periodEnd': '2016-06-24T01:10:00+00:00',
      'userId': '',
    },
  },
}
);

db.assets.update({
  assetId: 'APC_UPS_Test',
}, {
  $set: {
    'assetStatus.$.current': true,
    'assetStatus.$.periodEnd': '2016-06-24T01:00:00+00:00',
    'assetStatus.$.userId': 'asasdf',
  },
});

db.assets.update({
  assetId: 'APC_UPS_Test',
}, {
  $set: {
    requestedPower: 0,
    assetChargePowerMax: 1000,
    assetTotalEnergy: 111,
  },
});
