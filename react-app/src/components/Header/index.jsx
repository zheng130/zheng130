import React, { useState } from 'react';
const Header = () => {
    const [age, setAge] = useState(18);
    const fn = () => {
        // setAge(age + 1)
        setAge(age => age + 1)
        setAge(age => age + 1)
    }
    return [
        <div onClick={fn}>hello,{age}</div>
    ]
}
export default Header