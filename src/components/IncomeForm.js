import React, { useRef } from 'react'

function IncomeForm({income, setIncome}) {
    const desc = useRef(null)
    const date = useRef(null)
    const price = useRef(null)

    function AddIncome(e){
        e.preventDefault();

        let d = date.current.value.split(("-"));
        let newD =    new Date(d[0], d[1], d[2]);

        setIncome([...income, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newD.getTime()
        }])

        desc.current.value = "";
        price.current.value = null;
        date.current.value = null;
    }

  return (


    <>
        <form className='income-form' onSubmit={AddIncome}>
      <div className='form-inner'>
        <input type='text' id='desc' name='desc' placeholder='Income Description...' ref={desc} />
        <input type='number' id='price' name='price' placeholder='Price...' ref={price}/>
        <input type='date' id='date' name='date' placeholder='Income Date...' ref={date}/>
        <input type='submit' value='Add Income' />
      </div>
    </form>

    <h1>{}</h1>
    </>
  )
}

export default  IncomeForm
