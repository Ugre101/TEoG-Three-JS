export class ToogleOption{
    private _isOn: boolean = false;
    toggle() {
        this._isOn = !this._isOn;
        return this._isOn;
    }
    get IsOn(){
        return this._isOn;
    }
    load(isOn: boolean){
        this._isOn = isOn;
    }
}