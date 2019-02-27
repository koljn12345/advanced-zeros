module.exports = function getZerosCount(number, base) {
   count=0;
   minCount=Number.MAX_VALUE;
   masM=[];
   del=2;
   while (base !=1) {
      if(base%del !=0) {del++;}
      else {
         base /= del;  
         masM[masM.length]=del;
      }
   }
   k=1;
   for(i=0; i<masM.length; i++){
      if(masM[i]==masM[i+1]) {k++; continue;}
      else {
         count=0;
         numberT=number;
         while (numberT>0) {
            numberT = (numberT/masM[i])|0;
            count += numberT;
         }
         count =(count/k)|0;
         k=1;
         if(minCount>count) minCount=count;
      }
   }
   return minCount;
}
