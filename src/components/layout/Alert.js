import React from 'react'

const alert = (a) => {

    if(a!==null && a.msg!==undefined){
        console.log('alert null: '+a.msg);
    }

    //console.log('alert null2: '+a.msg+' type: '+type);

    
    return (

        

        a!==null && a.msg!==undefined &&
        <div className={`alert alert-${a.type}`}>
            <i className='fas fa-info-circle'/>{a.msg}
            
        </div>
    );
}

export default alert
