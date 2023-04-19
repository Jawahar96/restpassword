import React from 'react'
import Cart from './Cart'

function Dashboard() {
    const cards=[

        {
            title :"EARNING MONTHLY",
            price :"$40,000",
            theme :"primary"
        },
        {
            title :"EARNING ANNUAL",
            price :"$215,000",
            theme:"success"
        },
        {
            title :"TASK",
            price :"50%",
            theme:"info"
        },
        {
            title :"PENDING REQUEST",
            price :"18",
            theme:"warning"
        },
    ]
  return (
    <div>
    <div className='row'>
    
        <div className='container-fluid'>
        
        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Dashboard</h1>
                        <a href="#" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                    </div>
        </div>
        </div>
        
        <div className='column'>
        

        {
            cards.map((cards)=>{
                return <Cart cards={cards} />
            })
        }
</div>
</div>

   
  )
}

export default Dashboard