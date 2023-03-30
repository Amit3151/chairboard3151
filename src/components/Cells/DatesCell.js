export default function DatesCell({ value:{data,salediff}}) {
  let  spanclass = salediff()>0? "upper_diff pos" :"upper_diff neg"
  if(salediff()===0){
    spanclass = "upper_diff zero"
  }
 
    return (
        <div  className="datedatatb">
       <div  className="datedatatb_inner">{
data}

<span className={spanclass}>{ salediff()}</span>
      </div>
      </div>
      
    )
  }
  