var StringBuffer = function(){
    this.buffer = new Array();
    };
    
    StringBuffer.prototype.append = function(str){
        this.buffer.push(str);
        return this;
    };
    StringBuffer.prototype.toString = function(){
    return this.buffer.join("");
    };
