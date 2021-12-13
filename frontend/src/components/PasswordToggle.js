import React, { useState } from 'react'

const PasswordToggle = () => {
    const [visible, setVisible] = useState(false)

    const hideViewIcon = <img src={ visible ?  '/assets/hidden.png' : '/assets/view.png'} onClick={() => setVisible(visible => !visible)} alt="visibility icon"/>

    const inputType = visible ? "text" : "password";

    return [inputType, hideViewIcon]
}

export default PasswordToggle;