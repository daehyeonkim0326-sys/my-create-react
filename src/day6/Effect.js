/*
*리엑트는 화면에 그려주면 끝!!!
*부가적인 효과(사이드 이펙트)
*이걸 관리해주는 훅 useEffect임. 
*/

import LauoutEffect from "./LauoutEffect"

// import EffectBasic from "./EffectBasic"


const Effect = () => {
    return (
        <div>
            {/* <EffectBasic/> */}
            <LauoutEffect />
        </div>
    )
}

export default Effect