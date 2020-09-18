
import styled from 'styled-components';
import{ shade} from 'polished';

export const Title = styled.h1`
font-size: 34px;
color: #3a3a3a;
max-width: 450px;
line-height: 56px;

margin-top: 80px;
`;

export const Form = styled.form`
margin-top: 40px;
max-width: 700px;

display: flex;

input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;

    &::placeholder{
     color: #a8a8a8;
    }

}

button{
    width: 210px;
    height: 70px;
    background: #04d361;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;

    &:hover{
        background: ${shade(0.2, '#04d361')}
    }
    transition: background-color  0,2s
}

`;
export const Repositories = styled.div`
margin-top: 80px;
max-width: 700px;

a{
    background: #fff;
    border-radius:5px;
    width: 100%;
    padding: 24px;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;
    transition: transform 0,2s;

    &:hover{
    transform: translate(10px);
    }

    & + a {
        margin-top: 16px;
    }
    img {
        width: 64px;
        height: 64px;
        border-radius: 50px;
    }

    div {
        margin-left: 16px;

        strong {
            font-size: 20px;
            color: #3D3D4D;
        }

        p{
            font-size: 18px;
            color: #A8A8B3;
            margin-top: 4px;
        }
    }
    svg {
        margin-left: auto;
        color: #C9C9D4;
    }
}n
`;
