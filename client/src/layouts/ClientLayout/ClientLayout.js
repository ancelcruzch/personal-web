import React from 'react'

export function ClientLayout(props) {
    const {children} = props;
    return (
        <div>
            <h2>Se esta cargando el ClientLayout</h2>x
            {children}
        </div>
    )
}
