for(i=0;i<1000;i+100){
    for(j=0;j<1000;j+100){
        var myCircle = new Path.Circle(new Point(i, j), 10);
        myCircle.fillColor = 'red';
    }
}