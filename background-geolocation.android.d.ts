import { AbstractBackgroundGeolocation } from './background-geolocation.common';
export declare class BackgroundGeolocation extends AbstractBackgroundGeolocation {
    private mConfig;
    private requestAction;
    private isStarting;
    private startCallback;
    private backgroundServiceIntent;
    private isEnabled;
    private forceReload;
    private getCountCallbacks;
    constructor();
    configure(config: any, success?: (state: any) => void, failure?: (error: any) => void): any;
    on(event: any, success: any, failure?: (param: any) => void): void;
    toObject(jsonObject: org.json.JSONObject): any;
    changePace(value: boolean, callback?: (location: any) => void, failure?: (error: any) => void): void;
    setConfig(config: any, success?: (state: any) => void, failure?: (error: any) => void): void;
    start(success?: (state: any) => void, failure?: (error: any) => void): void;
    startSchedule(success?: () => void, failure?: (error: any) => void): void;
    stop(success: any, failure: any): void;
    getCurrentPosition(success: Function, failure?: (error: any) => void, options?: {}): void;
    watchPosition(success: Function, failure?: (error: any) => void, options?: {}): void;
    stopWatchPosition(success?: (result: any) => void, failure?: (error: any) => void): void;
    getCount(success: Function): void;
    getOdometer(): number;
    resetOdometer(): void;
    addGeofence(params: any, success?: (param: any) => void, failure?: (error: any) => void): void;
    addGeofences(geofences: any, success?: (param: any) => void, failure?: (error: any) => void): void;
    getGeofences(): any;
    removeGeofences(success?: (result: any) => void, failure?: (error: any) => void): void;
    removeGeofence(identifier: any, success?: (result: any) => void, failure?: (error: any) => void): void;
    clearDatabase(success?: (result: any) => void, failure?: (error: any) => void): void;
    sync(success: Function, failure?: (error: any) => void): void;
    insertLocation(params: any, success?: (result: any) => void, failure?: (error: any) => void): void;
    private setEnabled(value, success, failure);
    private createHttpCallback(success?, failure?);
    private createMotionChangeCallback(callback);
    private createActivityChangeCallback(callback);
    private onGooglePlayServicesConnectError(errorCode);
    private hasPermission();
    private getAdapter();
    private requestPermission(success, failure);
}
