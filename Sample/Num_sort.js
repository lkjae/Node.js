let points = [40, 100, 1, 5, 25, 10];


console.log(points);
points.sort(function(a,b){return a-b}); //오름차순
console.log(points);
points.sort(function(a,b){return b-a}); //내림차순
console.log(points);
