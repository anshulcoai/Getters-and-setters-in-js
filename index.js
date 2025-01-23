class Rectangle{
     
    constructor(width, Height){
        this.width = width;
        this.Height = Height;

    }

    set width(newWidth){
        if(newWidth > 0){
            this._width = newWidth;
        }
        else{
            console.error("Width must be a positive number");
        }
    }
    set Height(newHeight){
        if(newHeight > 0){
            this._Height = newHeight;
        }
        else{
            console.error("Height must be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)}cm`;
    }
      
    get Height(){
        return `${this._Height.toFixed(1)}cm`;
    } 
 
   get area(){
    return `${(this._width * this._Height).toFixed(1)}cm^2`;
  }
}

 const rectangle = new Rectangle(3, 4);
   


 console.log(rectangle.width);
 console.log(rectangle.Height);
 console.log(rectangle.area);



