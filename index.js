let items = [];
let number = 100;
   let id = 1;
do{
 
   console.log("[New] add todo");
    console.log("[List] List all todo");
     console.log("[Delete] delete specifict todo");
    console.log("[Exit] Exit app");
    
    let todo = prompt("What shoul you do? : " );
    
    switch(todo){
        case "New":
            const itemsx = prompt("Todo: ");
            items.push({id:id++,todo:itemsx});
            break;
            
    case "List":
      items.length === 0?console.log("No items"):console.log(items)
        break;
        
        case "Delete":
            console.log("Your items ==============")
   items.forEach(pro =>{
       console.log(`${pro.id} ${pro.todo}`)
   })
    console.log("==============")
    let choose = prompt("Choose index for deleted items: ");
    let idChoose = parseInt(choose);
    
    const newItems = items.filter(pro => {
          return pro.id !== idChoose
      });
      
     items = newItems
            break;
            
            
            case "Exit":
                number = -1
                break;
            
            default:
            console.log("Wrong input");
            break;
    }
   
}while(number>0);


console.log("thanks")