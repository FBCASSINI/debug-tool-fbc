exports.verNumberInc = (currentVersionNumber, change) => {
  const versionArray = currentVersionNumber.split('.');

  for(let versionIndex in versionArray) {
    versionArray[versionIndex] = parseInt(versionArray[versionIndex]);
  }

  if(change === 'major') {
      versionArray[0] += 1;
      versionArray[1] = 0;
      versionArray[2] = 0;
    } else if(change === 'minor') {
      versionArray[1] += 1;
      versionArray[2] = 0;
    } else if(change === 'patch') {
      versionArray[2] += 1;
    }

    return versionArray.join('.');
}
