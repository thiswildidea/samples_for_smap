var Label = /** @class */ (function () {
    function Label(labeloption) {
        this.type = 'text';
        this.color = 'white';
        this.visible = true;
        this.size = 12;
        this.weight = 'normal';
        this.angle = 0;
        this.backgroundColor = 'red';
        this.borderLineColor = 'blue';
        this.borderLineSize = 200;
        this.haloColor = 'yellow';
        this.haloSize = 20;
        this.horizontalAlignment = 'right';
        this.verticalAlignment = 'top';
        this.kerning = true;
        this.lineHeight = 25;
        this.lineWidth = 200;
        this.rotated = false;
        this.xoffset = 0;
        this.yoffset = 0;
        this.zoffset = 0;
        this.placement = "above-right";
        this.maxScale = 0;
        this.minScale = 0;
        this.text = labeloption.text === undefined ? '标注' : labeloption.text;
        this.color = labeloption.color === undefined ? 'white' : labeloption.color;
        this.visible = labeloption.visible === undefined ? true : labeloption.visible;
        this.size = labeloption.size === undefined ? 12 : labeloption.size;
        this.weight = labeloption.weight === undefined ? 'normal' : labeloption.weight;
        this.angle = labeloption.angle === undefined ? 0 : labeloption.angle;
        this.backgroundColor = labeloption.backgroundColor === undefined ? 'red' : labeloption.backgroundColor;
        this.borderLineColor = labeloption.borderLineColor === undefined ? 'blue' : labeloption.borderLineColor;
        this.borderLineSize = labeloption.borderLineSize === undefined ? 200 : labeloption.borderLineSize;
        this.haloColor = labeloption.haloColor === undefined ? 'yellow' : labeloption.haloColor;
        this.haloSize = labeloption.haloSize === undefined ? 0 : labeloption.haloSize;
        this.horizontalAlignment = labeloption.horizontalAlignment === undefined ? 'right' :
            labeloption.horizontalAlignment;
        this.verticalAlignment = labeloption.verticalAlignment === undefined ? 'top' :
            labeloption.verticalAlignment;
        this.kerning = labeloption.kerning === undefined ? true : labeloption.kerning;
        this.lineHeight = labeloption.lineHeight === undefined ? 25 : labeloption.lineHeight;
        this.lineWidth = labeloption.lineWidth === undefined ? 200 : labeloption.lineWidth;
        this.rotated = labeloption.rotated === undefined ? false : labeloption.rotated;
        this.xoffset = labeloption.xoffset === undefined ? 0 : labeloption.xoffset;
        this.yoffset = labeloption.yoffset === undefined ? 0 : labeloption.yoffset;
        this.zoffset = labeloption.zoffset === undefined ? 0 : labeloption.zoffset;
        this.placement = labeloption.placement === undefined ? "center-right" : labeloption.placement;
        this.maxScale = labeloption.maxScale === undefined ? 0 : labeloption.maxScale;
        this.minScale = labeloption.minScale === undefined ? 0 : labeloption.minScale;
    }
    return Label;
}());
export default Label;
