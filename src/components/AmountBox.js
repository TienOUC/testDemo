import React from 'react'

const AmountBox = ({ text, type, amount }) => {
    return (
        <div className="col text-center">
            <div className="card">
                <div className={`card-header bg-${type} text-white`}>
                    {text}
                </div>
                <div className="card-body">
                    {amount}
                </div>
            </div>
        </div>
    )
}

export default AmountBox