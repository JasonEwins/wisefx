import styled from "styled-components"

const MainProp = styled.h1`
`

const SubProp = styled.p`
    font-size: 2.4rem;
`

const hero = () => {   
    return (
        <>
            <MainProp>Unrivalled<br /> Payments<br /> Performance</MainProp>
            <SubProp>Sub heading goes here</SubProp>
        </>
    )
} 

export default hero