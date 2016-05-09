function Game (canvas, bitSize) {
    var obj = {},
        now = Date.now ();
    
    
    
    obj.canvas = canvas;
    obj.context = canvas.getContext("2d");
    
    obj.paused = false;
    
    obj.frame = {};
    obj.frame.frequency = 100;
    obj.frame.last = now;
    obj.frame.update = function () {
        this.last = Date.now ();
    };
    
    obj.drawOctagon = function (x, y, size) {
        var cxt = this.context,
            numberOfSides = 6;

        cxt.beginPath();
        cxt.moveTo (x +  size * Math.cos(0), y +  size *  Math.sin(0));          

        for (var i = 1; i <= numberOfSides; i += 1) 
        {
            cxt.lineTo (x + size * Math.cos(i * 2 * Math.PI / numberOfSides), y + size * Math.sin(i * 2 * Math.PI / numberOfSides));
        }

        cxt.strokeStyle = "rgba(47,181,243,1)";
        cxt.lineWidth = 1;
        cxt.stroke();
    }
    
    return obj;
}