class ToogleOption{
    private _isOn: boolean = false;
    private _name: string;
    private _description: string;
    constructor(name: string, description: string){
        this._name = name;
        this._description = description;
    }
    toggle() {
        this._isOn = !this._isOn;
        return this._isOn;
    }
    get IsOn(){
        return this._isOn;
    }
    get Name(){
        return this._name;
    }
    get Description(){
        return this._description;
    }
    load(isOn: boolean){
        this._isOn = isOn;
    }
}