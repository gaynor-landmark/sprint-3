
function cube(x){
... return x * x * x
... }
> cube(3)
27
> cube(5)
125

 function absolute(x){
... if (x < 0){
..... return x * -1;
..... }
... else {
..... return x;
..... }
... }
undefined
> absolute(5)
5
> absolute(-23)
23
> absolute(-3.4)
3.4

var namesArray = ["Matthew", "Mark", "Luke", "John", "Amos"]
undefined
 var nickNames = namesArray.map(function(x){return x + "y"})
undefined
> nickNames
[ 'Matthewy', 'Marky', 'Lukey', 'Johny', 'Amosy' ]

 function makeKiaOra(name){
... return function(){
..... return "Kia Ora " + name;
..... }
... }
undefined
> var KiaOraJoe = makeKiaOra('Joe');
undefined
> KiaOraJoe();
'Kia Ora Joe'
> 

function makeSince(date1){
... return function(){
..... return (Date.now() - date1) / 1000;
..... }
... }
undefined
> var since = makeSince(Date.now());
undefined
> since();
9.009


