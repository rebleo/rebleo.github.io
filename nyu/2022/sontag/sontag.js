
let theExposure;

function photographicParameters(fStop, shutterSpeed, iso){
    this.depthOfField = fStop;
    this.motion = shutterSpeed;
    this.grainNowNoise = iso;
    
    theExposure = fStop * shutterTime * iso;
}

 