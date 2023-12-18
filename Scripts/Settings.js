class MetricsOrImperials {
    constructor() {
        this.metric = true;
        this.decimalPrecision = 1;
    }
    toggle() {
        this.metric = !this.metric;
        return this.metric;
    }
    /**
     * 
     * @param {Number} value 
     * @param {Boolean} addText 
     * @returns 
     */
    kgOrLbs(value, addText = true) {
        if (this.metric) {
            if (!addText) {
                return value;
            }
            if (value < 1) {
                return `${(value * 1000).toFixed()}g`;
            }
            if (value >= 1000) {
                const left = value % 1000;
                if (left > 1) {
                    return `${(value / 1000).toFixed()}ton and ${left}kg`;
                }
                return `${(value / 1000).toFixed()}ton`;
            }
            const left = value % 1;
            if (left > 0.1) {
                return value.toFixed(this.decimalPrecision) + "kg";
            }
            return value.toFixed() + "kg";
        } else {
            value *= 2.2;
            if (!addText) {
                return value.toFixed();
            }
            if (value < 1) {
                const ounces = value * 16;
                return `${ounces.toFixed()}oz`;
            }
            let left = value % 1;
            if (left > 0.1) {
                return value.toFixed(this.decimalPrecision) + "lbs";
            }
            return value.toFixed() + "lbs";
        }
    }
    /**
     * 
     * @param {Number} value 
     * @param {Boolean} addText 
     * @returns 
     */
    cmOrInches(value, addText = true) {
        if (this.metric) {
            if (!addText) {
                return value;
            }
            if (value >= 200) {
                const left = value % 100;
                if (left > 1) {
                    return `${(value / 100).toFixed()}m and ${left}cm`;
                }
                return `${(value / 100).toFixed()}m`;
            }
            if (value < 1) {
                return `${(value * 100).toFixed()}mm`;
            }
            const left = value % 1;
            if (left > 0.1) {
                return `${(value * 100).toFixed(this.decimalPrecision)}cm`;
            }
            return `${value.toFixed()}cm`;
        }
        if (!addText) {
            return value * 0.39;
        }
        if (value >= 96) {
            const left = value % 12;
            if (left > 1) {
                return `${(value / 12).toFixed()}ft and ${left}in`;
            }
            return `${(value / 12).toFixed()}ft`;
        }
        return `${value}in`;
    }
    /**
     * 
     * @param {Number} value 
     * @param {Boolean} addText 
     * @returns 
     */
    lOrG(value, addText = true) {
        if (this.metric) {
            if (!addText) {
                return value;
            }
            return value + "l";
        } else {
            value *= 0.26;
            if (!addText) {
                return value;
            }
            return value + "g";
        }
    }
}

export const metricsOrImperials = new MetricsOrImperials();
