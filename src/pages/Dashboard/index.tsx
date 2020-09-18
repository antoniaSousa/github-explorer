import React { useState } from 'react';
import {FiChevronRight} from 'react-icons/fi';
import api from '../../services/api';
import logoImg from '../../assests/logo.svg';
import {Title, Form, Repositories} from '../Dashboard/styles';
import { useState } from 'react';

const Dashboard: React.FC = ()=>{
    const [repositories, setRepositories] = useState([]);
    return(
    <>
        <img src={logoImg} alt="Github Explore"/>
        <Title>Explore repositórios no Github</Title>

     <Form>
    <input placeholder="Digite o nome do repositório"/>
    <button type="submit">Pesquisar</button>
     </Form>

     <Repositories>
         <a href="teste">
            <img src="https://avatars2.githubusercontent.com/u/25445983?s=460&u=f608e90f79dbc3b2cbf301cc09030d063d2df07b&v=4" alt="Antonia"/>
            <div>
                <strong>app-with-flexbox</strong>
               <p> Layout twitter with FlexBox</p>
            </div>
            <FiChevronRight size={20} />
            </a>
     </Repositories>
</>
);
};

export default Dashboard;
