const assert = require('assert');

function countBatteriesByHealth(presentCapacities) {
  let batteryCounts = {
    healthy: 0,
    exchange: 0,
    failed: 0
  }

  presentCapacities.forEach(presentCapacity => {
    let ratedCapacity = 120;
    let stateOfBatteryHealth = (100* (presentCapacity/ratedCapacity)).toFixed(2);
    if(stateOfBatteryHealth > 80) {
      batteryCounts["healthy"] = batteryCounts["healthy"] + 1 
    } else if(stateOfBatteryHealth > 63 && stateOfBatteryHealth <80) {
      batteryCounts["exchange"]  = batteryCounts["exchange"] + 1 
    } else if(stateOfBatteryHealth < 63) {
      batteryCounts["failed"] = batteryCounts["failed"] + 1 
    }
  })
  return batteryCounts;
}

function testBucketingByHealth() {
  console.log('Counting batteries by SoH...');
  const presentCapacities = [113, 116, 80, 95, 92, 70];
  counts = countBatteriesByHealth(presentCapacities);
  assert(counts["healthy"] == 2);
  assert(counts["exchange"] == 3);
  assert(counts["failed"] == 1);
  console.log("Done counting :)");
}

testBucketingByHealth();
