//import {useState} from 'react'
import {moneyFormat} from '../helpers';

function Header({money, total}){
    return (
        <>
         <div className="header">
            {(total > 0 && (
                <>
                    Harcayacak <span> ${moneyFormat(money - total)} </span> paranız kaldı! 
                </>
            )) || (
                <>
                    Harcamak için <span> ${moneyFormat(money)} </span> paranız var 
                </>
            )
            }

         </div>
        </>
    )
}

 export default Header